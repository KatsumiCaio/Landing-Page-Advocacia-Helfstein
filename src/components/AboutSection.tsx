import React from 'react';
import { ShieldCheck, Award, CheckCircle, FileCheck, Users, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { LAWYER_DATA, getWhatsAppLink } from '../data';
import { transitions, staggerFast, fadeInUpVariants, interactiveTap, interactiveHover } from '../lib/motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-16 lg:py-24 bg-[#050a14] border-b border-[#c5a059]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={transitions.springSmooth}
          className="mb-14"
        >
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
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Sleek Card Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={transitions.springSmooth}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="border border-[#c5a059] bg-[#02050a] p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 rounded-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 border-b border-[#c5a059]/30 pb-5">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    transition={transitions.springSnappy}
                    className="w-14 h-14 rounded-full border-2 border-[#c5a059] bg-[#080d17] flex items-center justify-center text-[#c5a059] font-serif font-bold text-lg shadow-[0_0_15px_rgba(197,160,89,0.2)]"
                  >
                    MH
                  </motion.div>
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
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={transitions.easeFast}
                    className="p-3 border border-[#c5a059]/20 bg-[#080d17] hover:border-[#c5a059] transition-colors rounded-sm"
                  >
                    <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Transparência e Ética</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                      Comunicação direta, sem rodeios ou termos inacessíveis. Clareza total sobre riscos e probabilidades.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={transitions.easeFast}
                    className="p-3 border border-[#c5a059]/20 bg-[#080d17] hover:border-[#c5a059] transition-colors rounded-sm"
                  >
                    <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>Comprometimento Máximo</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                      Dedicação individual em cada processo com foco obsessivo no melhor desfecho para o cliente.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={transitions.easeFast}
                    className="p-3 border border-[#c5a059]/20 bg-[#080d17] hover:border-[#c5a059] transition-colors rounded-sm"
                  >
                    <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Agilidade no Retorno</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                      Acesso rápido via WhatsApp e canais digitais para dúvidas e andamentos.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Direct CTA */}
              <motion.a
                href={getWhatsAppLink('Olá Dr. Marcelo, gostaria de falar com o senhor sobre minha situação jurídica.')}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={interactiveTap}
                whileHover={interactiveHover}
                className="w-full text-center py-3.5 px-4 bg-[#c5a059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#e6be6a] transition-colors rounded-sm flex items-center justify-center gap-2 shadow-[0_2px_15px_rgba(197,160,89,0.25)]"
              >
                <span>Falar com Dr. Marcelo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Bio & Philosophy Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={transitions.springSmooth}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="border border-[#c5a059]/30 bg-[#080d17] p-6 sm:p-8 space-y-4 rounded-sm">
              <h3 className="text-xl sm:text-2xl font-serif text-[#c5a059] leading-snug font-bold">
                Uma trajetória pautada pela excelência técnica e proximidade com o cliente.
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Com forte atuação no interior e no Estado de São Paulo, o{' '}
                <strong className="text-[#c5a059]">Dr. Marcelo Vieira Helfstein da Silva</strong> construiu a
                Advocacia Helfstein fundamentada em dois pilares inegociáveis: <strong>RESULTADO</strong> e{' '}
                <strong>COMPROMISSO</strong>.
              </p>

              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Reconhecido constantemente por seus clientes como um profissional extremamente atencioso,
                dedicado e competente, o Dr. Marcelo alia profundo conhecimento da jurisprudência atual a um
                atendimento humanizado que coloca a tranquilidade do cliente em primeiro lugar.
              </p>

              <div className="pt-2 border-t border-[#c5a059]/20">
                <p className="text-xs italic text-gray-300 font-serif border-l-2 border-[#c5a059] pl-4 py-1">
                  &ldquo;A confiança depositada em nós é honrada com trabalho árduo, estratégia refinada e
                  presença constante.&rdquo;
                </p>
              </div>
            </div>

            {/* 4 Feature Boxes in Sleek Grid */}
            <motion.div
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <motion.div
                variants={fadeInUpVariants}
                whileHover={{ y: -2 }}
                className="p-4 border border-[#c5a059]/20 bg-[#02050a] hover:border-[#c5a059] transition-colors rounded-sm"
              >
                <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Estratégia Sob Medida</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Soluções desenhadas individualmente para o perfil de cada cliente ou empresa.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUpVariants}
                whileHover={{ y: -2 }}
                className="p-4 border border-[#c5a059]/20 bg-[#02050a] hover:border-[#c5a059] transition-colors rounded-sm"
              >
                <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                  <FileCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Rigor Processual</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Elaboração minuciosa de peças, contratos e recursos em todas as instâncias.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUpVariants}
                whileHover={{ y: -2 }}
                className="p-4 border border-[#c5a059]/20 bg-[#02050a] hover:border-[#c5a059] transition-colors rounded-sm"
              >
                <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                  <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Canal Direto</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Você fala com o advogado responsável pelo seu processo, sem intermediários.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUpVariants}
                whileHover={{ y: -2 }}
                className="p-4 border border-[#c5a059]/20 bg-[#02050a] hover:border-[#c5a059] transition-colors rounded-sm"
              >
                <div className="flex items-center gap-2 text-[#c5a059] text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Sigilo Absoluto</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Proteção integral de dados e documentos sob rigoroso dever ético da OAB.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
