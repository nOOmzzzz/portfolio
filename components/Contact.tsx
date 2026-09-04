"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioContent } from "@/data/portfolio-data";
import {
  Mail,
  Copy,
  Check,
  Send,
} from "lucide-react";

export function Contact() {
  const { language } = useLanguage();
  const content = portfolioContent[language];
  const { personal, contactSection } = content;

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || `Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#000000] text-white">
      <div className="max-w-[900px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            {contactSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[rgba(255,255,255,0.7)] leading-relaxed tracking-[0.24px]">
            {contactSection.subtitle}
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-[24px] bg-[#16181a] p-8 sm:p-12">
          
          {/* Quick Email Copy Chip */}
          <div className="mb-8 p-4 rounded-[16px] bg-[#0c0d0f] flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#494fdf] text-white shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <span className="text-[11px] text-[rgba(255,255,255,0.5)] block font-mono">
                  {contactSection.directEmail}
                </span>
                <span className="text-sm font-medium text-white select-all">
                  {personal.email}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-2.5 rounded-full bg-[#16181a] hover:bg-[#202326] text-white transition-colors cursor-pointer shrink-0"
              title="Copy email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-[#00a87e]" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[rgba(255,255,255,0.7)] mb-2 tracking-[0.24px]">
                  {contactSection.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={contactSection.namePlaceholder}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-14 px-4 rounded-[12px] bg-[#0c0d0f] text-white placeholder-[rgba(255,255,255,0.3)] text-sm focus:outline-none focus:ring-1 focus:ring-white transition-colors border border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[rgba(255,255,255,0.7)] mb-2 tracking-[0.24px]">
                  {contactSection.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  placeholder={contactSection.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-14 px-4 rounded-[12px] bg-[#0c0d0f] text-white placeholder-[rgba(255,255,255,0.3)] text-sm focus:outline-none focus:ring-1 focus:ring-white transition-colors border border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[rgba(255,255,255,0.7)] mb-2 tracking-[0.24px]">
                {contactSection.subjectLabel}
              </label>
              <input
                type="text"
                required
                placeholder={contactSection.subjectPlaceholder}
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full h-14 px-4 rounded-[12px] bg-[#0c0d0f] text-white placeholder-[rgba(255,255,255,0.3)] text-sm focus:outline-none focus:ring-1 focus:ring-white transition-colors border border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[rgba(255,255,255,0.7)] mb-2 tracking-[0.24px]">
                {contactSection.messageLabel}
              </label>
              <textarea
                rows={4}
                required
                placeholder={contactSection.messagePlaceholder}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-4 rounded-[12px] bg-[#0c0d0f] text-white placeholder-[rgba(255,255,255,0.3)] text-sm focus:outline-none focus:ring-1 focus:ring-white transition-colors resize-none border border-transparent"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#ffffff] text-[#000000] text-sm font-semibold hover:bg-[#e2e2e7] active:bg-[#c9c9cd] transition-colors tracking-[0.24px] cursor-pointer"
              >
                <span>{contactSection.submitBtn}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

            {formSubmitted && (
              <p className="text-xs text-[#00a87e] mt-2 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                {contactSection.submittingFeedback}
              </p>
            )}
          </form>

        </div>

      </div>
    </section>
  );
}
