'use client';

import React from 'react';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import BenefitsSection from '@/app/components/BenefitsSection';
import AboutSection from '@/app/components/AboutSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}