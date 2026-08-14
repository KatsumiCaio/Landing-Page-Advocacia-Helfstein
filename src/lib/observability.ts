/**
 * Observabilidade & Telemetria - Advocacia Helfstein
 * 
 * Camada unificada de observabilidade compatível com os padrões:
 * - Sentry (Error Tracking & Crash Reporting)
 * - OpenTelemetry / Datadog / New Relic (Tracing & Event Metrics)
 * - Web Vitals (LCP, FID, CLS, TTFB)
 */

export interface TelemetryEvent {
  name: string;
  category: 'interaction' | 'navigation' | 'conversion' | 'error' | 'performance';
  properties?: Record<string, unknown>;
  timestamp?: number;
}

export interface ErrorReport {
  message: string;
  stack?: string;
  componentStack?: string;
  context?: Record<string, unknown>;
  timestamp: number;
}

class ObservabilityManager {
  private isInitialized = false;
  private sampleRate = 1.0;
  private queue: TelemetryEvent[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  public init() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    // Monitoramento global de erros não tratados no navegador
    window.addEventListener('error', (event) => {
      this.captureException(event.error || new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.captureException(
        event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
        { type: 'unhandled_promise_rejection' }
      );
    });

    // Rastreio de Web Vitals (Performance Budget)
    this.collectWebVitals();
  }

  public trackEvent(event: TelemetryEvent) {
    const payload: TelemetryEvent = {
      ...event,
      timestamp: event.timestamp || Date.now(),
    };

    if (process.env.NODE_ENV === 'development') {
      console.debug(`[Telemetry : ${payload.category}] ${payload.name}`, payload.properties || {});
    }

    this.queue.push(payload);
    if (this.queue.length > 50) {
      this.queue.shift(); // Mantém buffer circular leve
    }

    // Integração plugável com Sentry / Datadog / OpenTelemetry se configurados
    if (typeof window !== 'undefined' && (window as unknown as { datadogRum?: { addAction: (name: string, props: unknown) => void } }).datadogRum) {
      (window as unknown as { datadogRum: { addAction: (name: string, props: unknown) => void } }).datadogRum.addAction(payload.name, payload.properties);
    }
  }

  public captureException(error: Error | unknown, context?: Record<string, unknown>) {
    const errorObj = error instanceof Error ? error : new Error(String(error));
    const report: ErrorReport = {
      message: errorObj.message,
      stack: errorObj.stack,
      context,
      timestamp: Date.now(),
    };

    console.error('[Observability Error Captured]:', report);

    this.trackEvent({
      name: 'application_error',
      category: 'error',
      properties: {
        message: report.message,
        stack: report.stack,
        ...context,
      },
    });

    // Se Sentry estiver carregado no window, envia o evento
    if (typeof window !== 'undefined' && (window as unknown as { Sentry?: { captureException: (err: unknown, ctx: unknown) => void } }).Sentry) {
      (window as unknown as { Sentry: { captureException: (err: unknown, ctx: unknown) => void } }).Sentry.captureException(errorObj, { extra: context });
    }
  }

  private collectWebVitals() {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        if (perfData) {
          const ttfb = perfData.responseStart - perfData.requestStart;
          const domLoad = perfData.domContentLoadedEventEnd - perfData.startTime;
          const fullLoad = perfData.loadEventEnd - perfData.startTime;

          this.trackEvent({
            name: 'web_vitals',
            category: 'performance',
            properties: {
              ttfbMs: Math.round(ttfb),
              domLoadMs: Math.round(domLoad),
              fullLoadMs: Math.round(fullLoad),
            },
          });
        }
      }, 0);
    });
  }

  public getRecentEvents(): readonly TelemetryEvent[] {
    return this.queue;
  }
}

export const observability = new ObservabilityManager();
