"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioContent, ProfileItem } from "@/data/portfolio-data";
import {
  GithubIcon,
  LinkedinIcon,
} from "@/components/icons/SocialIcons";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

export function ProfilesSection() {
  const { language } = useLanguage();
  const content = portfolioContent[language];
  const { profiles, personal, profilesSection } = content;

  const getProfileIcon = (icon: string) => {
    switch (icon) {
      case "Linkedin":
        return <LinkedinIcon className="w-5 h-5" />;
      case "Github":
        return <GithubIcon className="w-5 h-5" />;
      case "Phone":
        return <Phone className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="profiles" className="py-20 sm:py-24 bg-[#000000] text-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            {profilesSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[rgba(255,255,255,0.7)] leading-relaxed tracking-[0.24px]">
            {profilesSection.subtitle}
          </p>
        </div>

        {/* Profile Card Header */}
        <div className="mb-8 p-5 rounded-[20px] bg-[#16181a] max-w-md">
          <h3 className="text-base font-semibold text-white tracking-tight">
            {personal.fullName}
          </h3>
          <p className="text-xs font-mono text-[#4f55f1] mt-0.5">
            @nOOmzzzz • {personal.location}
          </p>
        </div>

        {/* Profiles Grid (4-up) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((profile: ProfileItem) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-[20px] bg-[#16181a] hover:bg-[#1a1d20] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="p-2.5 rounded-full bg-[#0c0d0f]"
                  style={{ color: profile.color }}
                >
                  {getProfileIcon(profile.icon)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    {profile.name}
                  </h4>
                  <p className="text-xs text-[rgba(255,255,255,0.5)]">
                    {profile.actionText}
                  </p>
                </div>
              </div>

              <div className="text-[rgba(255,255,255,0.4)] group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
