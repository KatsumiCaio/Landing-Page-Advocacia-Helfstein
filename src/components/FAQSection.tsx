import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, getWhatsAppLink } from '../data';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-16 lg:py-24 bg-[#050a14] border-b border-[#c5a059]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span className="text-[#c5a059] text-xs uppercase tracking-[0.3em] font-semibold">
              Perguntas Frequentes
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#c5a059]">
            Dúvidas Comuns
          </h2>
          <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mt-1">
            Respostas diretas sobre honorários, atendimento e andamento processual
          </p>
        </div>

        {/* FAQ Accordion in Sleek Style */}
        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#c5a059]/20 bg-[#080d17] hover:border-[#c5a059]/50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 text-white focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-serif font-medium text-gray-100 flex items-center gap-3">
                    <span className="text-xs font-mono text-[#c5a059]">{String(idx + 1).padStart(2, '0')}.</span>
                    <span>{item.question}</span>
                  </span>
                  <div className={`p-1 border border-[#c5a059]/30 text-[#c5a059] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#c5a059] text-black' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-t border-[#c5a059]/10">
                    <p className="pl-6 border-l border-[#c5a059]/30 py-1">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Box */}
        <div className="mt-12 p-6 border border-[#c5a059]/30 bg-[#02050a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-sm font-serif text-[#c5a059] font-bold">
              Tem uma dúvida específica sobre a sua situação?
            </h4>
            <p className="text-xs text-gray-400">
              Nossa equipe está pronta para orientar você com total sigilo.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Olá Dr. Marcelo, tenho uma dúvida sobre um caso e gostaria de orientação.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-[#c5a059] hover:bg-[#e6be6a] text-black font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
