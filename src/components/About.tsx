"use client";

import React from "react";
import { Download, GraduationCap, Calendar } from "lucide-react";
import Section from "./Section";
import {
  personalDetails,
  educationHistory,
  socialsData,
} from "@/data/portfolio";

export default function About() {
  const resumeUrl =
    socialsData.find((item) => item.platform === "Resume")?.url || "#";

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="My journey, academic foundation, and alignment as a developer."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* Biography & Philosophy (Left) */}
        <div className="md:col-span-6 space-y-6">
          <h3 className="text-xl font-medium font-serif text-white tracking-tight">
            Building practical software & learning modern technologies
          </h3>
          <p className="text-neutral-400 font-sans leading-relaxed text-sm md:text-base">
            {personalDetails.about}
          </p>
          <p className="text-neutral-400 font-sans leading-relaxed text-sm md:text-base">
            Currently exploring FastAPI, Docker, system design, and AI
            automation while continuously learning new tools and frameworks.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {["FastAPI", "Docker", "System Design", "AI Automation"].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center justify-center rounded-full border border-neutral-800 bg-neutral-950/70 px-3 py-2 text-[11px] text-neutral-300 font-medium"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          <div className="pt-4">
            <a
              href={resumeUrl}
              download="Gauri_Sharma_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-accent/20 hover:border-accent bg-accent-muted/5 hover:bg-accent-muted/10 text-accent font-semibold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-glow-sm hover:shadow-glow"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Education Timeline (Right) */}
        <div className="md:col-span-6 space-y-8">
          <h3 className="text-xl font-medium font-serif text-white tracking-tight flex items-center gap-2">
            <GraduationCap size={20} className="text-accent" />
            Education Path
          </h3>

          <div className="relative border-l border-neutral-800/80 pl-6 ml-2.5 space-y-10">
            {educationHistory.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent/30 bg-black group-hover:border-accent transition-colors duration-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                </span>

                {/* Card Container */}
                <div className="glass-card p-5 rounded-2xl space-y-2 hover:border-neutral-850 hover:bg-neutral-900/10 transition-all duration-300">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-accent uppercase tracking-wider">
                    <Calendar size={10} />
                    {edu.period}
                  </span>
                  <h4 className="text-sm md:text-base font-semibold text-white tracking-tight">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-neutral-400 font-medium">
                    {edu.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
