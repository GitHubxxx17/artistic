import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/services/ServicesSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/team/TeamSection';
import NewsletterSection from '../components/NewsletterSection';

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <NewsletterSection />
    </>
  );
}

export default LandingPage;
