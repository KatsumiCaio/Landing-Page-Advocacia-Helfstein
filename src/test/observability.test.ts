import { describe, it, expect, vi } from 'vitest';
import { observability } from '../lib/observability';

describe('Observability & Telemetry Module', () => {
  it('should queue telemetry events accurately', () => {
    observability.trackEvent({
      name: 'test_click',
      category: 'interaction',
      properties: { button: 'cta_whatsapp' },
    });

    const recent = observability.getRecentEvents();
    expect(recent.length).toBeGreaterThan(0);
    const last = recent[recent.length - 1];
    expect(last.name).toBe('test_click');
    expect(last.category).toBe('interaction');
    expect(last.properties).toEqual({ button: 'cta_whatsapp' });
  });

  it('should capture exceptions and transform them into error telemetry events', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    observability.captureException(new Error('Simulated runtime error'), {
      component: 'AssessmentModal',
    });

    const recent = observability.getRecentEvents();
    const errorEvent = recent.find((e) => e.name === 'application_error');
    expect(errorEvent).toBeDefined();
    expect(errorEvent?.properties?.['message']).toBe('Simulated runtime error');
    expect(errorEvent?.properties?.['component']).toBe('AssessmentModal');

    spy.mockRestore();
  });
});
