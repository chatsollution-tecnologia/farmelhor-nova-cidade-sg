import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoreVisit } from './components/StoreVisit';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState<'privacy' | 'terms'>('privacy');

  const handleOpenPrivacy = () => {
    setActiveLegalTab('privacy');
    setIsLegalModalOpen(true);
  };

  const handleOpenTerms = () => {
    setActiveLegalTab('terms');
    setIsLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      {/* 1. Compact White Header with Centered FarMelhor Nova Cidade SG Brand */}
      <Navbar />

      {/* 2. Main Content */}
      <main className="flex-grow">
        {/* Large Red Hero */}
        <Hero />

        {/* Short White Section: "Está por perto? Visite nossa loja" */}
        <StoreVisit />
      </main>

      {/* 3. Dark Red Compact Footer */}
      <Footer onOpenPrivacy={handleOpenPrivacy} onOpenTerms={handleOpenTerms} />

      {/* 4. Privacy & Terms Modal */}
      <LegalModals
        isOpen={isLegalModalOpen}
        activeTab={activeLegalTab}
        onClose={() => setIsLegalModalOpen(false)}
        onTabChange={(tab) => setActiveLegalTab(tab)}
      />
    </div>
  );
}
