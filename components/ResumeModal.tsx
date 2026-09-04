"use client";

import { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioContent } from "@/data/portfolio-data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { language } = useLanguage();
  const content = portfolioContent[language];
  const { modal, personal } = content;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl h-[85vh] rounded-[24px] bg-[#16181a] border border-[rgba(255,255,255,0.15)] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(255,255,255,0.1)] bg-[#0a0a0a]">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#494fdf] text-white">
              <FileText className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-white">
                {modal.title}
              </h3>
              <p className="text-xs text-[rgba(255,255,255,0.5)]">
                {modal.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumeUrl}
              download="CV_AxelOrd.pdf"
              className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-[#ffffff] text-[#000000] text-xs font-semibold hover:bg-[#e2e2e7] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{modal.downloadBtn}</span>
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[rgba(255,255,255,0.72)] hover:text-white hover:bg-white/5 transition-colors hidden sm:inline-flex"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[rgba(255,255,255,0.72)] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF iframe */}
        <div className="flex-1 w-full bg-[#000000]">
          <iframe
            src={`${personal.resumeUrl}#toolbar=0`}
            title="CV Axel Ordoñez"
            className="w-full h-full border-none"
          />
        </div>
      </div>

    </div>
  );
}
