"use client";

import { useLanguage } from "@/context/LanguageContext";
import { portfolioContent, ProjectItem } from "@/data/portfolio-data";
import { CheckCircle2, Eye } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export function Projects() {
  const { language } = useLanguage();
  const content = portfolioContent[language];
  const { projects, projectsSection } = content;

  return (
    <section id="projects" className="py-20 sm:py-24 bg-[#000000] text-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
            {projectsSection.title}
          </h2>
          <p className="text-base sm:text-lg text-[rgba(255,255,255,0.7)] leading-relaxed tracking-[0.24px]">
            {projectsSection.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="rounded-[20px] bg-[#16181a] p-7 flex flex-col justify-between hover:bg-[#1a1d20] transition-colors duration-200"
            >
              <div>
                {/* Date & Tag Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-[#00a87e] font-medium bg-[#00a87e]/10 px-3 py-1 rounded-full">
                    {project.date}
                  </span>
                  <span className="text-xs text-[rgba(255,255,255,0.6)] font-medium bg-[#0e1012] px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[rgba(255,255,255,0.72)] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[rgba(255,255,255,0.8)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4f55f1] mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0c0d0f] text-[rgba(255,255,255,0.75)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: View Live & GitHub */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-[#ffffff] text-[#000000] text-xs font-semibold hover:bg-[#e2e2e7] transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{projectsSection.viewLive}</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-[#0c0d0f] text-white text-xs font-medium hover:bg-[#1a1d20] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{projectsSection.github}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
