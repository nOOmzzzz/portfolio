"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioContent } from "@/data/portfolio-data";
import {
  Home,
  User,
  Code2,
  Layers,
  Award,
  Globe,
  Mail,
} from "lucide-react";

const SECTION_IDS = ["home", "about", "projects", "skills", "certifications", "profiles", "contact"];

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const content = portfolioContent[language];
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: content.nav.home, icon: Home, href: "#home" },
    { id: "about", label: content.nav.about, icon: User, href: "#about" },
    { id: "projects", label: content.nav.projects, icon: Code2, href: "#projects" },
    { id: "skills", label: content.nav.skills, icon: Layers, href: "#skills" },
    { id: "certifications", label: content.nav.certifications, icon: Award, href: "#certifications" },
    { id: "profiles", label: content.nav.profiles, icon: Globe, href: "#profiles" },
    { id: "contact", label: content.nav.contact, icon: Mail, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] sm:max-w-fit">
      <nav
        className="flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-[#16181a]/90 backdrop-blur-xl border border-[rgba(255,255,255,0.14)] shadow-2xl shadow-black/80"
        aria-label="Main Navigation"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              className={`relative flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 group ${
                isActive
                  ? "bg-[#ffffff] text-[#000000] shadow-md"
                  : "text-[rgba(255,255,255,0.72)] hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden md:inline tracking-[0.24px] whitespace-nowrap">
                {item.label}
              </span>
            </a>
          );
        })}

        {/* Language Switcher Pill */}
        <div className="flex items-center bg-[#0c0d0f] rounded-full p-0.5 ml-1 border border-[rgba(255,255,255,0.08)]">
          <button
            onClick={() => setLanguage("en")}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
              language === "en"
                ? "bg-[#494fdf] text-white"
                : "text-[rgba(255,255,255,0.5)] hover:text-white"
            }`}
            title="Switch to English"
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("es")}
            className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
              language === "es"
                ? "bg-[#494fdf] text-white"
                : "text-[rgba(255,255,255,0.5)] hover:text-white"
            }`}
            title="Cambiar a Español"
          >
            ES
          </button>
        </div>
      </nav>
    </header>
  );
}
