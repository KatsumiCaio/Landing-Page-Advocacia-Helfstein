import { describe, it, expect } from 'vitest';
import { LAWYER_DATA, PRACTICE_AREAS, TESTIMONIALS, OFFICE_LOCATIONS, FAQS, getWhatsAppLink } from '../data';
import { LEGAL_DOCS } from '../data/legal';

describe('Data Module & Business Logic', () => {
  it('should have valid lawyer details with active OAB format', () => {
    expect(LAWYER_DATA.lawyerName).toBe('Dr. Marcelo Vieira Helfstein da Silva');
    expect(LAWYER_DATA.oab).toContain('489.578');
    expect(LAWYER_DATA.phoneRaw).toBe('5515996091651');
  });

  it('should generate properly encoded WhatsApp URLs with default and custom messages', () => {
    const defaultUrl = getWhatsAppLink();
    expect(defaultUrl).toContain('https://wa.me/5515996091651');
    expect(defaultUrl).toContain('text=');

    const customUrl = getWhatsAppLink('Olá Dr. Marcelo, quero uma consulta');
    expect(customUrl).toContain(encodeURIComponent('Olá Dr. Marcelo, quero uma consulta'));
  });

  it('should have complete practice areas list with valid descriptions and cta messages', () => {
    expect(PRACTICE_AREAS.length).toBeGreaterThanOrEqual(6);
    PRACTICE_AREAS.forEach((area) => {
      expect(area.id).toBeTruthy();
      expect(area.title).toBeTruthy();
      expect(area.shortDesc).toBeTruthy();
      expect(area.items.length).toBeGreaterThan(0);
      expect(area.ctaMessage).toContain('Dr. Marcelo');
    });
  });

  it('should have testimonials with verified 5-star ratings', () => {
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(4);
    TESTIMONIALS.forEach((t) => {
      expect(t.rating).toBe(5);
      expect(t.verified).toBe(true);
      expect(t.author).toBeTruthy();
      expect(t.text).toBeTruthy();
    });
  });

  it('should have valid office locations in Capão Bonito and Itapetininga', () => {
    expect(OFFICE_LOCATIONS.length).toBe(2);
    const capao = OFFICE_LOCATIONS.find((l) => l.id === 'capao-bonito');
    const itape = OFFICE_LOCATIONS.find((l) => l.id === 'itapetininga');
    expect(capao).toBeDefined();
    expect(itape).toBeDefined();
    expect(capao?.isMain).toBe(true);
    expect(itape?.isMain).toBe(false);
  });

  it('should provide complete FAQ items with question and answer strings', () => {
    expect(FAQS.length).toBeGreaterThanOrEqual(5);
    FAQS.forEach((faq) => {
      expect(faq.question.length).toBeGreaterThan(10);
      expect(faq.answer.length).toBeGreaterThan(20);
    });
  });

  it('should have Terms of Use and Privacy Policy in compliance with OAB & LGPD', () => {
    expect(LEGAL_DOCS.termos).toBeDefined();
    expect(LEGAL_DOCS.privacidade).toBeDefined();
    expect(LEGAL_DOCS.termos.sections.length).toBeGreaterThanOrEqual(3);
    expect(LEGAL_DOCS.privacidade.sections.length).toBeGreaterThanOrEqual(3);
  });
});
