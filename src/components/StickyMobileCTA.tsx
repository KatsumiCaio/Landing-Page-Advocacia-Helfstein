import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { LAWYER_DATA, getWhatsAppLink } from '../data';
import { interactiveTap } from '../lib/motion';

interface StickyMobileCTAProps {
  onOpenAssessment?: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenAssessment }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#02050a]/95 backdrop-blur-md border-t-2 border-[#c5a059] p-3 shadow-2xl">
      <div className="flex items-center gap-2">
        {onOpenAssessment && (
          <motion.button
            type="button"
            onClick={onOpenAssessment}
            whileTap={interactiveTap}
            className="p-3 border border-[#c5a059] text-[#c5a059] bg-[#0c1424] active:bg-[#131e33] rounded-sm transition-colors flex items-center justify-center"
            aria-label="Diagnóstico rápido"
          >
            <Sparkles className="w-4 h-4" />
          </motion.button>
        )}

        <motion.a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={interactiveTap}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#c5a059] text-black font-bold text-xs uppercase tracking-widest active:bg-[#e6be6a] transition-colors rounded-sm shadow-[0_2px_10px_rgba(197,160,89,0.3)]"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Falar no WhatsApp</span>
        </motion.a>

        <motion.a
          href={`tel:+55${LAWYER_DATA.phoneRaw}`}
          whileTap={interactiveTap}
          className="p-3 border border-[#c5a059] text-[#c5a059] bg-[#050a14] active:bg-[#080d17] transition-colors flex items-center justify-center rounded-sm"
          aria-label="Ligar Agora"
        >
          <Phone className="w-4 h-4" />
        </motion.a>
      </div>
    </div>
  );
};
