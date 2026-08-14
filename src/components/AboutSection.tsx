import React from 'react';
import { ShieldCheck, Award, CheckCircle, MessageCircle, FileCheck, Users, Clock } from 'lucide-react';
import { LAWYER_DATA, getWhatsAppLink } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-16 lg:py-24 bg-[#050a14] border-b border-[#c5a059]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span className="text-[#c5a059] text-xs uppercase tracking-[0.3em] font-semibold">
              Sobre o Escritório
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#c5a059] max-w-2xl">
            Dr. Marcelo Vieira Helfstein da Silva
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm tracking-wider uppercase mt-1">
            {LAWYER_DATA.oab} • Advocacia Estratégica & Consultoria de Alto Valor
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sleek Card Profile */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="border border-[#c5a059] bg-[#02050a] p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 border-b border-[#c5a059]/30 pb-5">
                  <div className="w-14 h-14 rounded-full border-2 border-[#c5a059] bg-[#080d17] flex items-center justify-center text-[#c5a059] font-serif font-bold text-lg">
                    MH
                  </div>
                  <div>
                    <h3 className="text-base font-serif text-[#c5a059] font-bold">
                      Dr. Marcelo Helfstein
                    </h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">
                      Fundador & Advogado Titular
                    </p>
                  </div>
                </div>

                {/* Core Pillars */}
                <div className="space-y-3 pt-2">
                  <div className="p-3 border border-[#c5a059]/20 bg-[#080d17] hover:border-[#c5a059] transition-colors">
                    <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Transparência e Ética</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                      Comunicação direta, sem rodeios ou termos inacessíveis. Clareza total sobre riscos e probabilidades.
                    </p>
                  </div>

                  <div className="p-3 border border-[#c5a059]/20 bg-[#080d17] hover:border-[#c5a059] transition-colors">
                    <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>Comprometimento Máximo</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                      Dedicação individual em cada processo com foco obsessivo no melhor desfecho para o cliente.
                    </p>
                  </div>

                  <div className="p-3 border border-[#c5a059]/20 bg-[#080d17] hover:border-[#c5a059] transition-colors">
                    <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Agilidade no Retorno</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                      Acesso rápido via WhatsApp e canais digitais para dúvidas e andamentos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct CTA */}
              <a
                href={getWhatsAppLink('Olá Dr. Marcelo, gostaria de falar com o senhor sobre minha situação jurídica.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 px-4 bg-[#c5a059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#e6be6a] transition-colors"
              >
                Falar com Dr. Marcelo
              </a>

            </div>
          </div>

          {/* Right Column: Bio & Philosophy Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="border border-[#c5a059]/30 bg-[#080d17] p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif text-[#c5a059] leading-snug">
                Uma trajetória pautada pela excelência técnica e proximidade com o cliente.
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Com forte atuação no interior e no Estado de São Paulo, o <strong>Dr. Marcelo Vieira Helfstein da Silva</strong> construiu a Advocacia Helfstein fundamentada em dois pilares inegociáveis: <strong>RESULTADO</strong> e <strong>COMPROMISSO</strong>.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Reconhecido constantemente por seus clientes como um profissional extremamente atencioso, dedicado e competente, o Dr. Marcelo alia profundo conhecimento da jurisprudência atual a um atendimento humanizado que coloca a tranquilidade do cliente em primeiro lugar.
              </p>

              <div className="pt-2 border-t border-[#c5a059]/20">
                <p className="text-xs italic text-gray-300 font-serif border-l-2 border-[#c5a059] pl-4 py-1">
                  &ldquo;A confiança depositada em nós é honrada com trabalho árduo, estratégia refinada e presença constante.&rdquo;
                </p>
              </div>
            </div>

            {/* 4 Feature Boxes in Sleek Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-[#c5a059]/20 bg-[#02050a] hover:border-[#c5a059] transition-colors">
                <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Estratégia Sob Medida</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Soluções desenhadas individualmente para o perfil de cada cliente ou empresa.
                </p>
              </div>

              <div className="p-4 border border-[#c5a059]/20 bg-[#02050a] hover:border-[#c5a059] transition-colors">
                <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                  <FileCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Rigor Processual</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Elaboração minuciosa de peças, contratos e recursos em todas as instâncias.
                </p>
              </div>

              <div className="p-4 border border-[#c5a059]/20 bg-[#02050a] hover:border-[#c5a059] transition-colors">
                <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                  <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Canal Direto</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Você fala com o advogado responsável pelo seu processo, sem intermediários.
                </p>
              </div>

              <div className="p-4 border border-[#c5a059]/20 bg-[#02050a] hover:border-[#c5a059] transition-colors">
                <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Sigilo Absoluto</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Proteção integral de dados e documentos sob rigoroso dever ético da OAB.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
