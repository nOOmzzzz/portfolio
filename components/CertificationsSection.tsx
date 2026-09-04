"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioContent, CertificationItem } from "@/data/portfolio-data";
import { Award, CheckCircle2 } from "lucide-react";

export function CertificationsSection() {
  const { language } = useLanguage();
  const content = portfolioContent[language];
  const { certifications, certificationsSection } = content;

  return (
    <section id="certifications" className="py-20 sm:py-24 bg-[#000000] text-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            {certificationsSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[rgba(255,255,255,0.7)] leading-relaxed tracking-[0.24px]">
            {certificationsSection.subtitle}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert: CertificationItem) => (
            <div
              key={cert.id}
              className="rounded-[20px] bg-[#16181a] p-7 flex flex-col justify-between hover:bg-[#1a1d20] transition-colors"
            >
              <div>
                {/* Top Info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c0d0f] text-[#4f55f1]">
                    <Award className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-[#00a87e] bg-[#00a87e]/10 px-3 py-1 rounded-full font-medium">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-1.5">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-medium text-[#4f55f1] mb-4">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[rgba(255,255,255,0.7)] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-xs text-[rgba(255,255,255,0.5)]">
                <span className="flex items-center gap-1.5 text-[#00a87e]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{certificationsSection.officialBadge}</span>
                </span>
                <span className="font-mono text-[11px]">UPC / Cert</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
