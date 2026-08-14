import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PracticeAreas } from './components/PracticeAreas';
import { SocialProof } from './components/SocialProof';
import { LocationsSection } from './components/LocationsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#02050a] text-white flex flex-col selection:bg-[#c5a059] selection:text-black">
      {/* Top Header & Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Sobre o Dr. Marcelo (Autoridade) */}
        <AboutSection />

        {/* 3. Áreas de Atuação (Especialidades) */}
        <PracticeAreas />

        {/* 4. Prova Social (Depoimentos & Avaliações) */}
        <SocialProof />

        {/* 5. Unidades de Atendimento (Capão Bonito & Itapetininga) */}
        <LocationsSection />

        {/* 6. Perguntas Frequentes */}
        <FAQSection />
      </main>

      {/* 7. Rodapé */}
      <Footer />

      {/* Floating WhatsApp Trigger */}
      <FloatingWhatsApp />

      {/* Mobile-First Sticky Bottom Action Bar */}
      <StickyMobileCTA />
    </div>
  );
}
