import React from 'react';
import { Phone, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { LAWYER_DATA, OFFICE_LOCATIONS, getWhatsAppLink } from '../data';
import { CopyButton } from './ui/CopyButton';
import { interactiveTap, interactiveHover, transitions } from '../lib/motion';

interface FooterProps {
  onOpenLegal?: (tab: 'termos' | 'privacidade') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050a] text-white border-t-2 border-[#c5a059]">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand & OAB */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border border-[#c5a059] rounded-full flex items-center justify-center text-xs font-serif font-bold text-[#c5a059] bg-[#050a14]">
                AH
              </div>
              <div>
                <h3 className="font-serif tracking-[0.2em] text-sm uppercase text-[#c5a059] font-bold">
                  Advocacia Helfstein
                </h3>
                <p className="text-[9px] uppercase tracking-widest text-gray-400">
                  {LAWYER_DATA.lawyerName}
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-light leading-relaxed">
              {LAWYER_DATA.slogan}. Atuação pautada pela ética, rigor processual e defesa incansável dos direitos de cada constituinte.
            </p>

            <div className="flex items-center gap-2">
              <div className="p-2 border border-[#c5a059]/40 bg-[#050a14] text-[10px] text-[#c5a059] font-mono font-bold tracking-widest rounded-sm">
                {LAWYER_DATA.oab}
              </div>
              <CopyButton textToCopy={LAWYER_DATA.oab} feedbackText="OAB Copiada" />
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-bold pb-2 border-b border-[#c5a059]/30">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#sobre" className="hover:text-[#c5a059] transition-colors">
                  • Sobre o Dr. Marcelo
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#c5a059] transition-colors">
                  • Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#c5a059] transition-colors">
                  • Avaliações & Depoimentos
                </a>
              </li>
              <li>
                <a href="#unidades" className="hover:text-[#c5a059] transition-colors">
                  • Unidades & Endereços
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#c5a059] transition-colors">
                  • Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Addresses */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-bold pb-2 border-b border-[#c5a059]/30">
              Unidades Físicas
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              {OFFICE_LOCATIONS.map((loc) => (
                <div key={loc.id} className="space-y-1">
                  <p className="font-serif font-bold text-[#c5a059]">{loc.city}</p>
                  <p className="text-gray-400 text-[11px] leading-tight">
                    {loc.address}, {loc.neighborhood}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Contact & Agendamento */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#c5a059]/30">
              <h4 className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-bold">
                Contato Direto
              </h4>
              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={interactiveTap}
                className="p-1 text-[#c5a059] hover:text-white border border-[#c5a059]/40 rounded-sm text-[10px] flex items-center gap-1 transition-colors"
                title="Voltar ao topo"
              >
                <ArrowUp className="w-3 h-3" />
                <span>Topo</span>
              </motion.button>
            </div>

            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span className="font-mono text-[11px]">{LAWYER_DATA.phoneFormatted}</span>
                </p>
                <CopyButton textToCopy={LAWYER_DATA.phoneRaw} feedbackText="Copiado" />
              </div>

              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span className="truncate">{LAWYER_DATA.email}</span>
                </p>
                <CopyButton textToCopy={LAWYER_DATA.email} feedbackText="Copiado" />
              </div>
            </div>

            <div className="pt-2">
              <motion.a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={interactiveTap}
                whileHover={{ y: -1 }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#c5a059] hover:bg-[#e6be6a] text-black font-bold text-xs uppercase tracking-widest transition-colors rounded-sm shadow-[0_2px_15px_rgba(197,160,89,0.25)]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Iniciar Atendimento</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-[#c5a059]/30 bg-[#050a14] py-6 px-4 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto space-y-3">
          <p className="text-[11px] leading-relaxed max-w-3xl mx-auto">
            Este site tem caráter meramente informativo e educacional, em estrita conformidade com o Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil) e o Provimento nº 205/2021 do CFOAB.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-gray-300">
            {onOpenLegal && (
              <>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacidade')}
                  className="text-gray-300 hover:text-[#c5a059] underline underline-offset-4 transition-colors"
                >
                  Política de Privacidade & LGPD
                </button>
                <span className="text-[#c5a059]/40">•</span>
                <button
                  type="button"
                  onClick={() => onOpenLegal('termos')}
                  className="text-gray-300 hover:text-[#c5a059] underline underline-offset-4 transition-colors"
                >
                  Termos de Uso
                </button>
                <span className="text-[#c5a059]/40">•</span>
              </>
            )}
            <span className="text-[#c5a059]">
              Advogado Responsável: Dr. Marcelo Vieira Helfstein da Silva ({LAWYER_DATA.oab})
            </span>
          </div>

          <p className="text-[10px] uppercase tracking-widest text-[#c5a059]/80">
            © {new Date().getFullYear()} Advocacia Helfstein. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
