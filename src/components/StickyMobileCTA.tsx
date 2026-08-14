import React from 'react';
import { MessageCircle, Phone, Shield } from 'lucide-react';
import { LAWYER_DATA, getWhatsAppLink } from '../data';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#02050a] border-t-2 border-[#c5a059] p-3 shadow-2xl">
      <div className="flex items-center gap-2">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#c5a059] text-black font-bold text-xs uppercase tracking-widest active:bg-[#e6be6a] transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Falar no WhatsApp</span>
        </a>

        <a
          href={`tel:+55${LAWYER_DATA.phoneRaw}`}
          className="p-3 border border-[#c5a059] text-[#c5a059] bg-[#050a14] active:bg-[#080d17] transition-colors flex items-center justify-center"
          aria-label="Ligar Agora"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
