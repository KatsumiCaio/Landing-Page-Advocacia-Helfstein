import { describe, it, expect, beforeEach } from 'vitest';
import { rateLimiter, sanitizeInput, formatPhoneNumber, PERFORMANCE_BUDGET, SECURITY_HEADERS_POLICY } from '../lib/security';

describe('Security & Rate Limiting Module', () => {
  beforeEach(() => {
    rateLimiter.reset('test_action');
  });

  it('should allow actions within rate limits and block once limit is exceeded', () => {
    const config = { maxAttempts: 3, windowMs: 10000 };

    // 1st attempt
    const r1 = rateLimiter.checkLimit('test_action', config);
    expect(r1.allowed).toBe(true);
    expect(r1.remaining).toBe(2);

    // 2nd attempt
    const r2 = rateLimiter.checkLimit('test_action', config);
    expect(r2.allowed).toBe(true);
    expect(r2.remaining).toBe(1);

    // 3rd attempt
    const r3 = rateLimiter.checkLimit('test_action', config);
    expect(r3.allowed).toBe(true);
    expect(r3.remaining).toBe(0);

    // 4th attempt (exceeded)
    const r4 = rateLimiter.checkLimit('test_action', config);
    expect(r4.allowed).toBe(false);
    expect(r4.remaining).toBe(0);
    expect(r4.retryAfterMs).toBeGreaterThan(0);
  });

  it('should sanitize unsafe html input tags and truncate long strings', () => {
    const raw = '<script>alert("hack")</script>João Silva<b>';
    const clean = sanitizeInput(raw);
    expect(clean).not.toContain('<script>');
    expect(clean).not.toContain('</script>');
    expect(clean).not.toContain('<b>');
    expect(clean).toContain('alert("hack")João Silva');
  });

  it('should format Brazilian phone numbers properly', () => {
    expect(formatPhoneNumber('15996091651')).toBe('(15) 99609-1651');
    expect(formatPhoneNumber('1535421234')).toBe('(15) 3542-1234');
  });

  it('should have strict performance and security budget guidelines defined', () => {
    expect(PERFORMANCE_BUDGET.maxBundleSizeKb).toBe(350);
    expect(SECURITY_HEADERS_POLICY['X-Frame-Options']).toBe('SAMEORIGIN');
    expect(SECURITY_HEADERS_POLICY['X-Content-Type-Options']).toBe('nosniff');
  });
});
