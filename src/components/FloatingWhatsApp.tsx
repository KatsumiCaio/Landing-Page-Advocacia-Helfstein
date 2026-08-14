import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Shield, Sparkles } from 'lucide-react';
import { LAWYER_DATA, getWhatsAppLink } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Sleek Popup Notification */}
      {showNotification && !isOpen && (
        <div className="mb-3 p-3 bg-[#050a14] border border-[#c5a059] shadow-2xl max-w-xs animate-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowNotification(false)}
            className="absolute top-1.5 right-1.5 text-gray-400 hover:text-white p-1"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-start gap-2.5 pr-4">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mt-1 shrink-0" />
            <div className="space-y-1">
              <p className="text-[11px] font-serif font-bold text-[#c5a059]">
                Advocacia Helfstein Online
              </p>
              <p className="text-[11px] text-gray-300 font-light leading-snug">
                Olá! Precisa de assistência jurídica? Fale diretamente com o Dr. Marcelo no WhatsApp.
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] uppercase tracking-widest text-[#c5a059] font-bold hover:underline mt-1"
              >
                Iniciar Conversa &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#c5a059] hover:bg-[#e6be6a] text-black shadow-[0_4px_25px_rgba(197,160,89,0.5)] transition-all duration-300 hover:scale-105 border-2 border-white/20"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#02050a] rounded-full" />
      </a>
    </div>
  );
};
