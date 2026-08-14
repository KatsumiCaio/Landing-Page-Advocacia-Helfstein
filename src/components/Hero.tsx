import React from 'react';
import { ShieldCheck, MessageCircle, Star, ArrowRight, CheckCircle2, Award, Scale, MapPin } from 'lucide-react';
import { LAWYER_DATA, getWhatsAppLink } from '../data';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050a14] to-[#02050a] border-b border-[#c5a059]/60">
      {/* Sleek Line Accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Sleek Conversion Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Slogan Pill / Eyebrow */}
            <div className="inline-flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-semibold">
                {LAWYER_DATA.slogan}
              </span>
            </div>

            {/* Main Headline with Sleek Left Gold Border Accent */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight font-serif text-[#c5a059] border-l-4 border-[#c5a059] pl-6">
                Resultados Jurídicos e Compromisso Inabalável para sua Causa.
              </h1>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl font-light">
                Representação jurídica de excelência com o <strong className="text-[#c5a059] font-medium">{LAWYER_DATA.lawyerName}</strong> (<span className="text-gray-300 font-mono">{LAWYER_DATA.oab}</span>). Atendimento humanizado, transparente e focado na resolução estratégica de conflitos.
              </p>
            </div>

            {/* Sleek Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-[#080d17] p-3 border border-[#c5a059]/20 hover:border-[#c5a059]/50 transition-all">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Atendimento direto com o advogado</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-[#080d17] p-3 border border-[#c5a059]/20 hover:border-[#c5a059]/50 transition-all">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Estratégias de alta precisão</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-[#080d17] p-3 border border-[#c5a059]/20 hover:border-[#c5a059]/50 transition-all">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Transparência em todas as etapas</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-[#080d17] p-3 border border-[#c5a059]/20 hover:border-[#c5a059]/50 transition-all">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Presencial & Online para todo o país</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  id="hero-main-cta"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c5a059] text-black font-bold py-4 px-8 rounded-sm text-xs sm:text-sm uppercase tracking-widest hover:bg-[#e6be6a] transition-all inline-flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(197,160,89,0.3)] hover:shadow-[0_4px_25px_rgba(197,160,89,0.5)]"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-black" />
                  <span>Agendar Consulta no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </a>

                <a
                  href="#areas"
                  className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-sm text-xs uppercase tracking-widest font-semibold text-[#c5a059] bg-[#080d17] border border-[#c5a059] hover:bg-[#0c1424] transition-all text-center"
                >
                  <Scale className="w-4 h-4 text-[#c5a059]" />
                  <span>Áreas de Atuação</span>
                </a>
              </div>

              {/* Fast response and trust signal */}
              <div className="flex items-center gap-4 text-[11px] text-gray-400">
                <span className="inline-flex items-center gap-1 text-[#c5a059]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Sigilo Ético Profissional (OAB)
                </span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-300">Resposta Rápida no WhatsApp</span>
              </div>
            </div>

            {/* Sleek Stats Strip */}
            <div className="pt-4 border-t border-[#c5a059]/30 flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-0.5 text-[#c5a059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-left text-xs">
                  <p className="font-bold text-[#c5a059]">5.0 Estrelas no Google</p>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">+60 avaliações verificadas</p>
                </div>
              </div>

              <div className="h-6 w-[1px] bg-[#c5a059]/30 hidden sm:block" />

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 border border-[#c5a059] text-[#c5a059]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-left text-xs">
                  <p className="font-bold text-[#c5a059]">2 Unidades Físicas</p>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Capão Bonito & Itapetininga</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Interface Presentation Box */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md border-2 border-[#c5a059] bg-[#050a14] p-6 sm:p-8 space-y-6 shadow-2xl relative">
              
              {/* Corner Accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#c5a059]" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#c5a059]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#c5a059]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#c5a059]" />

              {/* Monogram Crest */}
              <div className="flex justify-center">
                <div className="w-20 h-20 border-2 border-[#c5a059] rounded-full flex items-center justify-center p-1 bg-[#02050a]">
                  <div className="w-full h-full border border-[#c5a059] rounded-full flex flex-col items-center justify-center text-center">
                    <span className="font-serif text-lg font-bold text-[#c5a059]">AH</span>
                    <span className="text-[7px] tracking-widest text-[#c5a059] uppercase font-mono">LEX</span>
                  </div>
                </div>
              </div>

              {/* Title & OAB */}
              <div className="text-center space-y-1.5 border-y border-[#c5a059]/40 py-4">
                <h2 className="text-xl font-serif tracking-[0.2em] uppercase text-[#c5a059] font-bold">
                  Advocacia Helfstein
                </h2>
                <p className="text-xs font-serif text-gray-300 tracking-wider">
                  Dr. Marcelo Vieira Helfstein da Silva
                </p>
                <div className="inline-block text-[10px] tracking-widest text-[#c5a059] font-mono font-bold bg-[#02050a] px-3 py-0.5 border border-[#c5a059]/50 mt-1">
                  {LAWYER_DATA.oab}
                </div>
              </div>

              {/* Sleek Quote Box */}
              <div className="bg-[#02050a] p-4 border border-[#c5a059]/30 text-left space-y-2">
                <p className="text-xs italic text-[#c5a059] font-serif">
                  &ldquo;{LAWYER_DATA.slogan}&rdquo;
                </p>
                <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                  Defesa intransigente dos interesses dos nossos clientes, pautada na ética, celeridade e excelência técnica.
                </p>
              </div>

              {/* WhatsApp direct box */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#c5a059]/10 hover:bg-[#c5a059] text-[#c5a059] hover:text-black border border-[#c5a059] transition-all text-xs font-bold uppercase tracking-widest"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Falar no WhatsApp</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
