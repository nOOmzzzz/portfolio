"use client";

import { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { Projects } from "@/components/Projects";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ProfilesSection } from "@/components/ProfilesSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

function PortfolioApp() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#000000] text-white selection:bg-[#494fdf] selection:text-white">
      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Floating Pill Dock Navbar with Language Switcher */}
      <Navbar />

      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Projects Showcase */}
        <Projects />

        {/* 4. Technical Skills with Category Filters */}
        <SkillsSection />

        {/* 5. Certifications Grid */}
        <CertificationsSection />

        {/* 6. Professional Network / Profiles */}
        <ProfilesSection />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Embedded Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
