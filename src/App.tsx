/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Skills } from './components/Skills';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { WorkProcess } from './components/WorkProcess';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { ElementorKitModal } from './components/ElementorKitModal';
import { HERO_DEFAULT_IMAGE } from './data/portfolioData';

export default function App() {
  const [currentPhoto, setCurrentPhoto] = useState<string>(() => {
    return localStorage.getItem('nh_portfolio_hero_photo') || HERO_DEFAULT_IMAGE;
  });
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
  const [isElementorModalOpen, setIsElementorModalOpen] = useState<boolean>(false);
  const [selectedServiceOrScope, setSelectedServiceOrScope] = useState<string>('');

  const handleSavePhoto = (newPhotoUrl: string) => {
    setCurrentPhoto(newPhotoUrl);
    localStorage.setItem('nh_portfolio_hero_photo', newPhotoUrl);
  };

  const handleResetPhoto = () => {
    setCurrentPhoto(HERO_DEFAULT_IMAGE);
    localStorage.removeItem('nh_portfolio_hero_photo');
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceOrScope(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (summary: string) => {
    setSelectedServiceOrScope(summary);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestSimilarProject = (projectTitle: string) => {
    setSelectedServiceOrScope(`Similar build inquiry for: ${projectTitle}`);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-emerald-400 selection:text-slate-950 font-sans">
      {/* Navigation */}
      <Navbar
        onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
        onOpenElementorModal={() => setIsElementorModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          currentPhoto={currentPhoto}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
        />

        {/* About Section */}
        <About currentPhoto={currentPhoto} />

        {/* Services Section (10 Core Services) */}
        <Services onSelectService={handleSelectService} />

        {/* Featured Projects Showcase (5 Categories) */}
        <Projects onRequestSimilar={handleRequestSimilarProject} />

        {/* Interactive Scope & Cost Estimator */}
        <ProjectEstimator onApplyEstimate={handleApplyEstimate} />

        {/* Core Skills Section */}
        <Skills />

        {/* Why Work With Me (Trust Pillars) */}
        <WhyWorkWithMe />

        {/* Work Process (6-Step Timeline) */}
        <WorkProcess />

        {/* Testimonials (Clearly Marked Placeholders + Customizer) */}
        <Testimonials />

        {/* Frequently Asked Questions (8 Core Questions) */}
        <FAQ />

        {/* Contact Section & Final Call To Action */}
        <Contact initialServiceOrScope={selectedServiceOrScope} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Photo Upload / Switcher Modal */}
      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={currentPhoto}
        onSavePhoto={handleSavePhoto}
        onResetDefault={handleResetPhoto}
        defaultPhoto={HERO_DEFAULT_IMAGE}
      />

      {/* Elementor Kit & Combined ZIP Download Modal */}
      <ElementorKitModal
        isOpen={isElementorModalOpen}
        onClose={() => setIsElementorModalOpen(false)}
      />
    </div>
  );
}
