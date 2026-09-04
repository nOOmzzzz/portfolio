"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioContent } from "@/data/portfolio-data";
import { ArrowRight, FileText, FolderGit2, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

function TypingBadge({ titles }: { titles: string[] }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[currentTitleIndex] || titles[0] || "";
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  return (
    <div className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-medium text-[#4f55f1] bg-[rgba(79,85,241,0.08)] border border-[rgba(79,85,241,0.22)] px-4 py-2 rounded-full min-h-[38px] max-w-full">
      <span className="truncate">{displayText}</span>
      <span className="inline-block w-1.5 h-4 bg-[#4f55f1] ml-1.5 align-middle animate-pulse flex-shrink-0" />
    </div>
  );
}

export function Hero({ onOpenResume }: HeroProps) {
  const { language } = useLanguage();
  const content = portfolioContent[language];
  const { personal, hero, heroTitles } = content;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-center pt-36 pb-20 px-6 sm:px-8 bg-[#000000]"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center z-10 w-full">

        {/* Hero Title Container */}
        <div className="flex flex-col items-center mb-6">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-[rgba(255,255,255,0.55)] mb-3 font-normal">
            {hero?.greeting || (language === "es" ? "Hola, soy" : "Hello, I'm")}
          </p>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black text-white tracking-[-0.045em] leading-[0.94] drop-shadow-sm">
            {personal.name}
          </h1>

          <p className="text-xs sm:text-sm font-mono text-[rgba(255,255,255,0.45)] mt-3 tracking-widest uppercase">
            {personal.fullName}
          </p>
        </div>

        {/* Subtitle description */}
        <div className="max-w-2xl mx-auto mb-8 flex flex-col items-center">
          <p className="text-base sm:text-lg md:text-xl text-[rgba(255,255,255,0.78)] leading-relaxed tracking-[0.24px] mb-5">
            {hero?.description || personal.tagline}
          </p>

          {/* Dynamic typing specialization badge with key to reset on language change */}
          <TypingBadge key={language} titles={heroTitles} />
        </div>

        {/* Action Buttons: Let's Connect + View Projects + View Resume */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#ffffff] text-[#000000] text-sm font-semibold hover:bg-[#e2e2e7] active:bg-[#c9c9cd] transition-all tracking-[0.24px] shadow-sm hover:scale-[1.02]"
          >
            <span>{personal.connectBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#16181a] text-white text-sm font-medium border border-[rgba(255,255,255,0.08)] hover:bg-[#202326] hover:border-[rgba(255,255,255,0.18)] transition-all tracking-[0.24px] hover:scale-[1.02]"
          >
            <FolderGit2 className="w-4 h-4 text-[#4f55f1]" />
            <span>{hero?.viewProjectsBtn || (language === "es" ? "Ver Proyectos" : "View Projects")}</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#16181a] text-white text-sm font-medium border border-[rgba(255,255,255,0.08)] hover:bg-[#202326] hover:border-[rgba(255,255,255,0.18)] transition-all tracking-[0.24px] cursor-pointer hover:scale-[1.02]"
          >
            <FileText className="w-4 h-4 text-[#4f55f1]" />
            <span>{personal.resumeBtn}</span>
          </button>
        </div>

        {/* Scroll down cue */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center opacity-40 hover:opacity-80 transition-opacity">
          <a href="#about" aria-label="Scroll to About section" className="flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest text-white uppercase">
            <span>Scroll</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
}
