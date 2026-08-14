import React, { Suspense, lazy, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { SkeletonSection } from './components/ui/Skeleton';

// Lazy Loaded Sections for optimized performance & fluid skeleton transitions
const AboutSection = lazy(() =>
  import('./components/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const PracticeAreas = lazy(() =>
  import('./components/PracticeAreas').then((m) => ({ default: m.PracticeAreas }))
);
const SocialProof = lazy(() =>
  import('./components/SocialProof').then((m) => ({ default: m.SocialProof }))
);
const LocationsSection = lazy(() =>
  import('./components/LocationsSection').then((m) => ({ default: m.LocationsSection }))
);
const FAQSection = lazy(() =>
  import('./components/FAQSection').then((m) => ({ default: m.FAQSection }))
);
const AssessmentModal = lazy(() =>
  import('./components/AssessmentModal').then((m) => ({ default: m.AssessmentModal }))
);

export default function App() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [assessmentInitialArea, setAssessmentInitialArea] = useState<string | undefined>();

  const handleOpenAssessment = (areaId?: string) => {
    setAssessmentInitialArea(areaId);
    setIsAssessmentOpen(true);
  };

  const handleCloseAssessment = () => {
    setIsAssessmentOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#02050a] text-white flex flex-col selection:bg-[#c5a059] selection:text-black">
      {/* Top Header & Navigation with Scroll Progress */}
      <Header onOpenAssessment={() => handleOpenAssessment()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Eagerly Loaded) */}
        <Hero onOpenAssessment={() => handleOpenAssessment()} />

        {/* 2. Sobre o Dr. Marcelo (Lazy Loaded with Skeleton Fallback) */}
        <Suspense fallback={<SkeletonSection cardsCount={2} />}>
          <AboutSection />
        </Suspense>

        {/* 3. Áreas de Atuação (Lazy Loaded with Skeleton Fallback) */}
        <Suspense fallback={<SkeletonSection cardsCount={3} />}>
          <PracticeAreas onOpenAssessmentForArea={handleOpenAssessment} />
        </Suspense>

        {/* 4. Prova Social (Lazy Loaded with Skeleton Fallback) */}
        <Suspense fallback={<SkeletonSection cardsCount={3} />}>
          <SocialProof />
        </Suspense>

        {/* 5. Unidades de Atendimento (Lazy Loaded with Skeleton Fallback) */}
        <Suspense fallback={<SkeletonSection cardsCount={2} />}>
          <LocationsSection />
        </Suspense>

        {/* 6. Perguntas Frequentes (Lazy Loaded with Skeleton Fallback) */}
        <Suspense fallback={<SkeletonSection cardsCount={2} />}>
          <FAQSection />
        </Suspense>
      </main>

      {/* 7. Rodapé */}
      <Footer />

      {/* Floating WhatsApp Trigger */}
      <FloatingWhatsApp />

      {/* Mobile-First Sticky Bottom Action Bar */}
      <StickyMobileCTA onOpenAssessment={() => handleOpenAssessment()} />

      {/* Multi-step Interactive Case Assessment & Scheduling Modal */}
      <Suspense fallback={null}>
        {isAssessmentOpen && (
          <AssessmentModal
            isOpen={isAssessmentOpen}
            onClose={handleCloseAssessment}
            initialAreaId={assessmentInitialArea}
          />
        )}
      </Suspense>
    </div>
  );
}
