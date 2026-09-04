"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioContent } from "@/data/portfolio-data";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const { language } = useLanguage();
  const content = portfolioContent[language];
  const { footer, nav, personal } = content;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] border-t border-[rgba(255,255,255,0.12)] py-16 px-6 sm:px-8 text-[rgba(255,255,255,0.72)]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[rgba(255,255,255,0.06)]">
          
          {/* Brand & Tagline */}
          <div>
            <div className="mb-2">
              <span className="text-white font-bold text-lg">
                Axel<span className="text-[#4f55f1]">Ordoñez</span>
              </span>
            </div>
            <p className="text-xs text-[rgba(255,255,255,0.5)] max-w-sm">
              {footer.tagline}
            </p>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap gap-5 text-xs sm:text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-white transition-colors">
                {nav.home}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                {nav.about}
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">
                {nav.projects}
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition-colors">
                {nav.skills}
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:text-white transition-colors">
                {nav.certifications}
              </a>
            </li>
            <li>
              <a href="#profiles" className="hover:text-white transition-colors">
                {nav.profiles}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                {nav.contact}
              </a>
            </li>
          </ul>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/axel-ordoñez-ricaldi-228669279"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-[rgba(255,255,255,0.6)] hover:text-white hover:bg-white/5 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/nOOmzzzz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-[rgba(255,255,255,0.6)] hover:text-white hover:bg-white/5 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="#home"
              aria-label="Back to Top"
              className="p-2.5 rounded-full bg-[#16181a] border border-[rgba(255,255,255,0.12)] text-white hover:bg-white/10 transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[rgba(255,255,255,0.5)]">
          <p>
            © {currentYear} {personal.fullName}. {footer.rights}
          </p>
          <p className="font-mono">
            {footer.tech}
          </p>
        </div>

      </div>
    </footer>
  );
}
