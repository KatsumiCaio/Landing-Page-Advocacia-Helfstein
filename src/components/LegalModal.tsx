import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, FileText, Lock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LEGAL_DOCS, LegalDocument } from '../data/legal';
import { LAWYER_DATA, getWhatsAppLink } from '../data';
import { transitions, interactiveTap } from '../lib/motion';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'termos' | 'privacidade';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacidade',
}) => {
  const [activeTab, setActiveTab] = useState<'termos' | 'privacidade'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const doc: LegalDocument = LEGAL_DOCS[activeTab];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={transitions.springSnappy}
          className="relative w-full max-w-3xl bg-[#050a14] border-2 border-[#c5a059] shadow-2xl rounded-sm text-white z-10 flex flex-col max-h-[88vh] overflow-hidden"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#c5a059]/30 bg-[#02050a] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#c5a059] rounded-sm flex items-center justify-center text-[#c5a059] bg-[#080d17]">
                {activeTab === 'privacidade' ? <Lock className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#c5a059]">
                  {doc.title}
                </h3>
                <p className="text-[11px] text-gray-400">
                  {LAWYER_DATA.name} • {LAWYER_DATA.oab} • Atualizado em {doc.lastUpdated}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white border border-[#c5a059]/30 hover:border-[#c5a059] transition-colors rounded-sm"
              aria-label="Fechar janela jurídica"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#c5a059]/20 bg-[#080d17] px-5 sm:px-6 gap-4">
            <button
              type="button"
              onClick={() => setActiveTab('privacidade')}
              className={`py-3 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'privacidade'
                  ? 'border-[#c5a059] text-[#c5a059]'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Privacidade & LGPD</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('termos')}
              className={`py-3 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all flex items-center gap-2 ${
                activeTab === 'termos'
                  ? 'border-[#c5a059] text-[#c5a059]'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Termos de Uso</span>
            </button>
          </div>

          {/* Body Content with Custom Scrollbar */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
            <div className="p-3.5 border border-[#c5a059]/20 bg-[#02050a] rounded-sm flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
              <p className="text-[11px] text-gray-300">
                {doc.subtitle}. Em estrita conformidade com a Lei Federal nº 13.709/2018 (LGPD) e o Provimento nº 205/2021 do CFOAB.
              </p>
            </div>

            {doc.sections.map((section, idx) => (
              <div key={idx} className="space-y-2 border-b border-[#c5a059]/10 pb-4 last:border-0 last:pb-0">
                <h4 className="text-xs sm:text-sm font-serif font-bold text-[#c5a059]">
                  {section.heading}
                </h4>
                <div className="space-y-2 text-gray-300">
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-5 border-t border-[#c5a059]/30 bg-[#02050a] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-gray-400 text-center sm:text-left">
              Dúvidas sobre o tratamento de dados? Fale com o Encarregado (DPO).
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 border border-[#c5a059]/40 text-gray-300 hover:text-white text-xs uppercase tracking-wider rounded-sm transition-colors"
              >
                Fechar
              </button>
              <a
                href={getWhatsAppLink('Olá Dr. Marcelo, gostaria de tirar uma dúvida sobre privacidade e termos.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#c5a059] hover:bg-[#e6be6a] text-black font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 shadow-[0_2px_10px_rgba(197,160,89,0.2)]"
              >
                <span>Falar com o DPO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
