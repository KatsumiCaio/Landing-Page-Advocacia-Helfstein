/**
 * Módulo de Segurança & Operação - Advocacia Helfstein
 * 
 * Fornece:
 * - Rate Limiting em memória / sessionStorage (proteção contra flood de formulários e cliques repetitivos)
 * - Sanitização e validação de dados de entrada (prevenção contra XSS / Injection)
 * - Performance Budgets e Políticas de Segurança do Cliente
 */

export interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
}

class ClientRateLimiter {
  private attempts: Map<string, number[]> = new Map();

  /**
   * Verifica se a ação está permitida dentro da janela temporal.
   * @param actionKey Identificador único da ação (ex: 'assessment_submit', 'whatsapp_click')
   * @param config Configuração de tentativas máximas e janela em ms
   * @returns boolean true se permitido, false se bloqueado por rate limit
   */
  public checkLimit(
    actionKey: string,
    config: RateLimitConfig = { maxAttempts: 5, windowMs: 60000 }
  ): { allowed: boolean; remaining: number; retryAfterMs?: number } {
    const now = Date.now();
    const timestamps = this.attempts.get(actionKey) || [];

    // Filtra apenas tentativas dentro da janela atual
    const activeTimestamps = timestamps.filter((time) => now - time < config.windowMs);

    if (activeTimestamps.length >= config.maxAttempts) {
      const oldestActive = activeTimestamps[0];
      const retryAfterMs = oldestActive + config.windowMs - now;
      return {
        allowed: false,
        remaining: 0,
        retryAfterMs: Math.max(0, retryAfterMs),
      };
    }

    activeTimestamps.push(now);
    this.attempts.set(actionKey, activeTimestamps);

    return {
      allowed: true,
      remaining: config.maxAttempts - activeTimestamps.length,
    };
  }

  public reset(actionKey: string) {
    this.attempts.delete(actionKey);
  }
}

export const rateLimiter = new ClientRateLimiter();

/**
 * Sanitiza strings de entrada do usuário para evitar injeções ou formatações nocivas.
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/<[^>]*>?/gm, '') // Remove tags HTML completas
    .trim()
    .slice(0, 500); // Limite máximo de caracteres por campo
}

/**
 * Validador e formatador de telefone brasileiro (DDD + 8 ou 9 dígitos)
 */
export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
  }
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').slice(0, 15);
}

/**
 * Configuração de Performance Budget & Parâmetros Operacionais
 */
export const PERFORMANCE_BUDGET = {
  maxBundleSizeKb: 350,
  maxInitialLoadTimeMs: 2500,
  maxLcpMs: 2000,
  maxFidMs: 100,
  maxCls: 0.1,
} as const;

/**
 * Cabeçalhos de Segurança recomendados (CSP, HSTS, X-Frame-Options)
 */
export const SECURITY_HEADERS_POLICY = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;",
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
} as const;
