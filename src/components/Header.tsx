import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Shield, Menu, X, MessageCircle, Clock } from 'lucide-react';
import { LAWYER_DATA, getWhatsAppLink } from '../data';
import { LogoArtDeco } from './LogoArtDeco';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      {/* Top Sleek Trust Bar */}
      <div className="bg-[#02050a] border-b border-[#c5a059]/40 text-xs py-2 px-4 text-gray-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-mono text-[11px] tracking-widest text-[#c5a059] uppercase font-bold">{LAWYER_DATA.oab}</span>
              <span className="text-[#c5a059]/40">|</span>
              <span className="text-[11px] tracking-wider text-gray-300 uppercase">Advocacia de Alta Performance</span>
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
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#c5a059] hover:text-[#e6be6a] transition-colors font-mono text-[11px] font-bold tracking-wider"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{LAWYER_DATA.phoneFormatted}</span>
            </a>
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
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border border-[#c5a059] rounded-full flex items-center justify-center p-0.5">
                <div className="w-full h-full border border-[#c5a059] rounded-full flex items-center justify-center text-[10px] text-[#c5a059] font-serif font-bold">
                  AH
                </div>
              </div>
              <div>
                <h1 className="text-base sm:text-lg tracking-[0.2em] font-serif uppercase text-[#c5a059] font-bold leading-none">
                  Advocacia Helfstein
                </h1>
                <p className="text-[9px] tracking-[0.15em] text-gray-400 uppercase mt-0.5">
                  Dr. Marcelo Vieira Helfstein da Silva
                </p>
              </div>
            </div>
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

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-whatsapp-cta"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest text-black bg-[#c5a059] hover:bg-[#e6be6a] transition-all shadow-[0_2px_12px_rgba(197,160,89,0.25)]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="sm:hidden p-2 rounded-sm bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/40"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-sm bg-[#050a14] border border-[#c5a059]/50 text-[#c5a059] hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#050a14] border-b border-[#c5a059] px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs uppercase tracking-[0.2em] font-semibold text-gray-200 hover:text-[#c5a059] py-2 border-b border-[#c5a059]/20"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm font-bold text-xs uppercase tracking-widest text-black bg-[#c5a059] hover:bg-[#e6be6a] shadow-lg text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar Consulta no WhatsApp</span>
              </a>
            </div>

            <div className="pt-3 text-[10px] tracking-widest text-gray-400 uppercase space-y-1">
              <p className="flex items-center gap-1.5 text-[#c5a059]">
                <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{LAWYER_DATA.oab}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Capão Bonito & Itapetininga - SP</span>
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
