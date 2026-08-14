import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LAWYER_DATA, getWhatsAppLink } from '../data';
import { transitions, interactiveTap } from '../lib/motion';

export const FloatingWhatsApp: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end pointer-events-none">
      {/* Sleek Popup Notification with AnimatePresence */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={transitions.springSnappy}
            className="pointer-events-auto mb-3 p-3.5 bg-[#050a14] border border-[#c5a059] shadow-2xl max-w-xs relative rounded-sm"
          >
            <button
              type="button"
              onClick={() => setShowNotification(false)}
              className="absolute top-1.5 right-1.5 text-gray-400 hover:text-white p-1"
              aria-label="Fechar aviso"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-start gap-2.5 pr-4">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mt-1 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
              <div className="space-y-1">
                <p className="text-[11px] font-serif font-bold text-[#c5a059]">
                  Advocacia Helfstein Online
                </p>
                <p className="text-[11px] text-gray-300 font-light leading-snug">
                  Olá! Precisa de orientação jurídica? Fale diretamente com o Dr. Marcelo no WhatsApp.
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[10px] uppercase tracking-widest text-[#c5a059] font-bold hover:text-[#e6be6a] transition-colors mt-1"
                >
                  Iniciar Atendimento &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button with Spring Hover & Tap */}
      <motion.a
        id="floating-whatsapp-btn"
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={interactiveTap}
        transition={transitions.springSnappy}
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 bg-[#c5a059] hover:bg-[#e6be6a] text-black shadow-[0_4px_25px_rgba(197,160,89,0.5)] border-2 border-white/20 rounded-full"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#02050a] rounded-full animate-ping opacity-75" />
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#02050a] rounded-full" />
      </motion.a>
    </div>
  );
};
