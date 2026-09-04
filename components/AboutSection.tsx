"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioContent } from "@/data/portfolio-data";
import { GraduationCap, Code2, Globe2 } from "lucide-react";

export function AboutSection() {
  const { language } = useLanguage();
  const content = portfolioContent[language];
  const { aboutSection } = content;

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#000000] text-white">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
        
        {/* Main Card container */}
        <div className="rounded-[24px] bg-[#16181a] p-8 sm:p-12 md:p-14">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            {aboutSection.title}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[rgba(255,255,255,0.78)] leading-relaxed tracking-[0.24px]">
            <p>{aboutSection.paragraph1}</p>
            <p>{aboutSection.paragraph2}</p>
            <p>{aboutSection.paragraph3}</p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-[rgba(255,255,255,0.08)]">
            <div className="rounded-[16px] bg-[#0c0d0f] p-5">
              <div className="flex items-center gap-2 mb-1.5 text-white font-medium text-sm">
                <GraduationCap className="w-4 h-4 text-[#494fdf]" />
                <span>{aboutSection.pillars.educationTitle}</span>
              </div>
              <p className="text-xs text-[rgba(255,255,255,0.65)] leading-relaxed">
                {aboutSection.pillars.educationText}
              </p>
            </div>

            <div className="rounded-[16px] bg-[#0c0d0f] p-5">
              <div className="flex items-center gap-2 mb-1.5 text-white font-medium text-sm">
                <Code2 className="w-4 h-4 text-[#00a87e]" />
                <span>{aboutSection.pillars.specialtyTitle}</span>
              </div>
              <p className="text-xs text-[rgba(255,255,255,0.65)] leading-relaxed">
                {aboutSection.pillars.specialtyText}
              </p>
            </div>

            <div className="rounded-[16px] bg-[#0c0d0f] p-5">
              <div className="flex items-center gap-2 mb-1.5 text-white font-medium text-sm">
                <Globe2 className="w-4 h-4 text-[#007bc2]" />
                <span>{aboutSection.pillars.languagesTitle}</span>
              </div>
              <p className="text-xs text-[rgba(255,255,255,0.65)] leading-relaxed">
                {aboutSection.pillars.languagesText}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
