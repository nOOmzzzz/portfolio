"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioContent, SkillItem } from "@/data/portfolio-data";
import {
  Code,
  Layers,
  Server,
  Database,
  Smartphone,
  Wrench,
} from "lucide-react";

export function SkillsSection() {
  const { language } = useLanguage();
  const content = portfolioContent[language];
  const { skills, skillsSection } = content;
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters = [
    { id: "all", label: skillsSection.filters.all },
    { id: "languages", label: skillsSection.filters.languages },
    { id: "frontend", label: skillsSection.filters.frontend },
    { id: "backend", label: skillsSection.filters.backend },
    { id: "databases", label: skillsSection.filters.databases },
    { id: "mobile", label: skillsSection.filters.mobile },
    { id: "tools", label: skillsSection.filters.tools },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((s: SkillItem) => s.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "languages":
        return <Code className="w-4 h-4 text-[#4f55f1]" />;
      case "frontend":
        return <Layers className="w-4 h-4 text-[#007bc2]" />;
      case "backend":
        return <Server className="w-4 h-4 text-[#00a87e]" />;
      case "databases":
        return <Database className="w-4 h-4 text-[#ec7e00]" />;
      case "mobile":
        return <Smartphone className="w-4 h-4 text-[#e61e49]" />;
      default:
        return <Wrench className="w-4 h-4 text-[#8d969e]" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#000000] text-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            {skillsSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[rgba(255,255,255,0.7)] leading-relaxed tracking-[0.24px]">
            {skillsSection.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`h-9 px-4 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                activeFilter === f.id
                  ? "bg-[#ffffff] text-[#000000]"
                  : "bg-[#16181a] text-[rgba(255,255,255,0.72)] hover:text-white hover:bg-[#202326]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="p-4 rounded-[16px] bg-[#16181a] hover:bg-[#1f2226] transition-colors flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-full bg-[#0c0d0f]">
                  {getCategoryIcon(skill.category)}
                </div>
                {skill.level && (
                  <span className="text-[10px] text-[rgba(255,255,255,0.45)] font-mono">
                    {skill.level}
                  </span>
                )}
              </div>

              <span className="text-sm font-medium text-white tracking-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
