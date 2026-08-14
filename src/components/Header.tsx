import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Shield, Menu, X, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { LAWYER_DATA, getWhatsAppLink } from '../data';
import { CopyButton } from './ui/CopyButton';
import { transitions, interactiveTap } from '../lib/motion';

interface HeaderProps {
  onOpenAssessment?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAssessment }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Unidades', href: '#unidades' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#02050a]">
      {/* Top Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#c5a059] via-[#e6be6a] to-[#c5a059] origin-left z-50 shadow-[0_0_10px_rgba(197,160,89,0.7)]"
        style={{ scaleX }}
      />

      {/* Top Sleek Trust Bar */}
      <div className="bg-[#02050a] border-b border-[#c5a059]/40 text-xs py-2 px-4 text-gray-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-mono text-[11px] tracking-widest text-[#c5a059] uppercase font-bold">
                {LAWYER_DATA.oab}
              </span>
              <CopyButton textToCopy={LAWYER_DATA.oab} feedbackText="OAB Copiada" className="py-0.5 px-1.5" />
              <span className="text-[#c5a059]/40">|</span>
              <span className="text-[11px] tracking-wider text-gray-300 uppercase">
                Advocacia de Alta Performance
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Atendimento com Hora Marcada (Presencial & Online)</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-gray-300 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Capão Bonito & Itapetininga - SP</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#c5a059] hover:text-[#e6be6a] transition-colors font-mono text-[11px] font-bold tracking-wider"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{LAWYER_DATA.phoneFormatted}</span>
              </a>
              <CopyButton textToCopy={LAWYER_DATA.phoneRaw} feedbackText="Tel Copiado" className="py-0.5 px-1.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Sleek Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#02050a]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#c5a059]'
            : 'bg-[#02050a] py-4 border-b border-[#c5a059]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Sleek Logo */}
          <a href="#" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={transitions.easeFast}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 border border-[#c5a059] rounded-full flex items-center justify-center p-0.5 group-hover:border-[#e6be6a] transition-colors">
                <div className="w-full h-full border border-[#c5a059] rounded-full flex items-center justify-center text-[10px] text-[#c5a059] font-serif font-bold group-hover:text-[#e6be6a]">
                  AH
                </div>
              </div>
              <div>
                <h1 className="text-base sm:text-lg tracking-[0.2em] font-serif uppercase text-[#c5a059] font-bold leading-none group-hover:text-[#e6be6a] transition-colors">
                  Advocacia Helfstein
                </h1>
                <p className="text-[9px] tracking-[0.15em] text-gray-400 uppercase mt-0.5">
                  Dr. Marcelo Vieira Helfstein da Silva
                </p>
              </div>
            </motion.div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-gray-300 hover:text-[#c5a059] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1px] after:bg-[#c5a059] after:absolute after:bottom-0 after:left-0 after:transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenAssessment && (
              <motion.button
                type="button"
                onClick={onOpenAssessment}
                whileTap={interactiveTap}
                whileHover={{ y: -1 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-sm text-xs font-semibold tracking-wider text-[#c5a059] bg-[#0c1424] hover:bg-[#131e33] border border-[#c5a059]/40 hover:border-[#c5a059] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Diagnóstico Rápido</span>
              </motion.button>
            )}

            <motion.a
              id="header-whatsapp-cta"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={interactiveTap}
              whileHover={{ y: -1 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest text-black bg-[#c5a059] hover:bg-[#e6be6a] transition-all shadow-[0_2px_12px_rgba(197,160,89,0.25)]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Agendar Consulta</span>
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            {onOpenAssessment && (
              <motion.button
                type="button"
                onClick={onOpenAssessment}
                whileTap={interactiveTap}
                className="p-2 rounded-sm bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/40"
                aria-label="Diagnóstico rápido"
              >
                <Sparkles className="w-4 h-4" />
              </motion.button>
            )}

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="sm:hidden p-2 rounded-sm bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/40"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <motion.button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={interactiveTap}
              className="p-2.5 rounded-sm bg-[#050a14] border border-[#c5a059]/50 text-[#c5a059] hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Motion AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={transitions.easeFast}
              className="lg:hidden bg-[#050a14] border-b border-[#c5a059] px-5 py-6 space-y-4 overflow-hidden"
            >
              <div className="space-y-3">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                    className="block text-xs uppercase tracking-[0.2em] font-semibold text-gray-200 hover:text-[#c5a059] py-2 border-b border-[#c5a059]/20"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="pt-2 space-y-2">
                {onOpenAssessment && (
                  <motion.button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAssessment();
                    }}
                    whileTap={interactiveTap}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm font-semibold text-xs uppercase tracking-widest text-[#c5a059] bg-[#0c1424] border border-[#c5a059] text-center"
                  >
                    <Sparkles className="w-4 h-4 text-[#c5a059]" />
                    <span>Fazer Diagnóstico do Caso</span>
                  </motion.button>
                )}

                <motion.a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={interactiveTap}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm font-bold text-xs uppercase tracking-widest text-black bg-[#c5a059] hover:bg-[#e6be6a] shadow-lg text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Agendar Consulta no WhatsApp</span>
                </motion.a>
              </div>

              <div className="pt-3 text-[10px] tracking-widest text-gray-400 uppercase space-y-1">
                <div className="flex items-center justify-between text-[#c5a059]">
                  <p className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{LAWYER_DATA.oab}</span>
                  </p>
                  <CopyButton textToCopy={LAWYER_DATA.oab} feedbackText="Copiado" />
                </div>
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Capão Bonito & Itapetininga - SP</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
