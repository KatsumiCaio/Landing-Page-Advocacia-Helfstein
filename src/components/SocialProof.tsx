import React from 'react';
import { Star, MessageCircle, Quote, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS, getWhatsAppLink } from '../data';
import { transitions, staggerFast, fadeInUpVariants, interactiveTap, interactiveHover } from '../lib/motion';

export const SocialProof: React.FC = () => {
  return (
    <section id="depoimentos" className="relative py-16 lg:py-24 bg-[#050a14] border-b border-[#c5a059]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={transitions.springSmooth}
          className="mb-14 text-center sm:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-[#c5a059] text-xs uppercase tracking-[0.3em] font-semibold">
                Avaliações Verificadas
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#c5a059]">
              Reconhecimento & Confiança
            </h2>
            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 mt-1">
              Opinião de clientes atendidos pelo Dr. Marcelo Helfstein
            </p>
          </div>

          {/* Google 5.0 Rating Badge */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={transitions.easeFast}
            className="border border-[#c5a059] bg-[#02050a] p-4 flex items-center gap-4 shrink-0 rounded-sm shadow-[0_0_15px_rgba(197,160,89,0.15)]"
          >
            <div className="text-2xl font-serif font-bold text-[#c5a059]">5.0</div>
            <div className="space-y-1 text-left">
              <div className="flex text-[#c5a059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gray-300">
                Avaliação Máxima no Google (+60)
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid with Stagger */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeInUpVariants}
              whileHover={{ y: -3 }}
              transition={transitions.springSmooth}
              className="p-6 border border-[#c5a059]/20 bg-[#080d17] hover:border-[#c5a059] transition-all flex flex-col justify-between space-y-6 rounded-sm relative"
            >
              <div className="space-y-4">
                {/* Header with stars and quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#c5a059]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#c5a059]/40" />
                </div>

                {/* Testimonial Text */}
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#c5a059]/20 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-serif font-bold text-[#c5a059]">{t.author}</h4>
                  <p className="text-[10px] text-gray-400">{t.roleOrContext || 'Cliente Verificado'}</p>
                </div>
                <span className="text-[9px] uppercase tracking-wider text-[#c5a059] border border-[#c5a059]/30 px-2 py-0.5 bg-[#02050a] flex items-center gap-1">
                  <ShieldCheck className="w-2.5 h-2.5" />
                  <span>Verificado</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sleek CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transitions.springSmooth}
          className="mt-14 p-8 border-2 border-[#c5a059] bg-[#02050a] flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-serif text-[#c5a059] font-bold">
              Precisa de orientação jurídica segura para o seu caso?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl font-light">
              Converse diretamente com o Dr. Marcelo Helfstein e receba uma análise clara dos seus direitos.
            </p>
          </div>

          <motion.a
            href={getWhatsAppLink('Olá Dr. Marcelo, vi os depoimentos e gostaria de uma avaliação para o meu caso.')}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={interactiveTap}
            whileHover={{ y: -2 }}
            className="shrink-0 px-8 py-4 bg-[#c5a059] hover:bg-[#e6be6a] text-black font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 shadow-[0_4px_20px_rgba(197,160,89,0.25)] rounded-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com o Advogado</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
