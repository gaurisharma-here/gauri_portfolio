"use client";

import React from "react";
import {
  ExternalLink,
  CheckSquare,
  Brain,
  Sparkles,
  Activity,
} from "lucide-react";
import { GithubIcon } from "@/lib/icons";
import Section from "./Section";
import { projectsData } from "@/data/portfolio";

interface MockupProps {
  type: "email" | "dashboard" | "scanner" | "editor";
}

function ProjectMockup({ type }: MockupProps) {
  if (type === "email") {
    return (
      <div className="w-full h-full bg-[#080808] border border-neutral-900 rounded-t-xl p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-accent/10 transition-colors">
        {/* Mock App Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-900">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">
            resumail.ai/outreach
          </span>
          <span className="w-4 h-4 rounded-md bg-accent-muted/10 border border-accent/20 flex items-center justify-center">
            <Sparkles size={8} className="text-accent" />
          </span>
        </div>

        {/* Mock App Body */}
        <div className="flex gap-3 pt-3 flex-1">
          {/* Mock Sidebar */}
          <div className="w-1/4 hidden sm:flex flex-col gap-2 border-r border-neutral-900 pr-2">
            <div className="h-4 bg-accent-muted/10 rounded border border-accent/20 flex items-center px-1">
              <span className="text-[8px] font-medium text-accent">
                Active Inbox
              </span>
            </div>
            <div className="h-3 bg-neutral-900/65 rounded w-3/4" />
            <div className="h-3 bg-neutral-900/65 rounded w-5/6" />
            <div className="h-3 bg-neutral-900/65 rounded w-1/2" />
          </div>

          {/* Mock Compose Box */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="h-4 bg-neutral-900/80 rounded w-1/3 flex items-center px-1">
                <span className="text-[8px] text-neutral-400">
                  To: google-recruitment@
                </span>
              </div>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-accent-muted/10 border border-accent/20 text-accent font-semibold font-mono animate-pulse">
                AI Generated
              </span>
            </div>
            <div className="flex-1 bg-neutral-900/35 border border-neutral-950 p-2 rounded-lg flex flex-col gap-1.5 justify-start text-[8px] text-neutral-400 font-sans leading-relaxed">
              <p className="text-white font-medium">
                Subject: Application - Full Stack Engineer
              </p>
              <p>Hi Team,</p>
              <p>
                Based on my profile in AI automation and full-stack systems, I
                developed an end-to-end recruiter assistant...
              </p>
              <div className="h-1 bg-accent/40 w-5/6 rounded mt-auto animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="w-full h-full bg-[#080808] border border-neutral-900 rounded-t-xl p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-accent/10 transition-colors">
        {/* Mock App Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-900">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">
            prio.app/analytics
          </span>
          <span className="w-4 h-4 rounded-md bg-accent-muted/10 border border-accent/20 flex items-center justify-center">
            <CheckSquare size={8} className="text-accent" />
          </span>
        </div>

        {/* Mock Dashboard Grid */}
        <div className="grid grid-cols-12 gap-3 pt-3 flex-1">
          {/* Progress Circular Mock */}
          <div className="col-span-4 bg-neutral-900/30 border border-neutral-950 rounded-lg p-2 flex flex-col items-center justify-center gap-1.5">
            <div className="relative w-10 h-10 rounded-full border-[3px] border-neutral-800 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[3px] border-accent border-r-transparent border-b-transparent animate-spin-slow" />
              <span className="text-[8px] font-bold text-white">78%</span>
            </div>
            <span className="text-[7px] text-neutral-500 uppercase tracking-widest font-semibold">
              Done Rate
            </span>
          </div>

          {/* List Details Mock */}
          <div className="col-span-8 flex flex-col gap-2 bg-neutral-900/20 border border-neutral-950 rounded-lg p-2.5">
            <span className="text-[7px] text-accent uppercase tracking-widest font-semibold">
              Daily Schedule Distribution
            </span>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[8px] text-neutral-300">
                    FastAPI backend optimize
                  </span>
                </div>
                <span className="text-[7px] text-accent-dark font-mono font-bold">
                  2.5 hrs
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-[8px] text-neutral-300">
                    React chart component hooks
                  </span>
                </div>
                <span className="text-[7px] text-accent-dark font-mono font-bold">
                  1.5 hrs
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                  <span className="text-[8px] text-neutral-400">
                    Database backup replication
                  </span>
                </div>
                <span className="text-[7px] text-neutral-500 font-mono font-bold">
                  0.8 hrs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "editor") {
    return (
      <div className="w-full h-full bg-[#060606] border border-neutral-900 rounded-t-xl p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-accent/10 transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-900">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">
            local-ai-fixer/terminal
          </span>
          <span className="w-4 h-4 rounded-md bg-accent-muted/10 border border-accent/20 flex items-center justify-center">
            <Sparkles size={8} className="text-accent" />
          </span>
        </div>

        <div className="flex flex-col gap-3 pt-4 flex-1">
          <div className="bg-[#0b0b0b] border border-neutral-900 rounded-2xl p-3 text-[10px] font-mono text-neutral-400 space-y-2">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <span className="w-2 h-2 rounded-full bg-green-500/60" />
              <span className="text-neutral-500">Local AI Text Fixer</span>
            </div>
            <div className="h-2 bg-neutral-900 rounded-full" />
          </div>

          <div className="relative flex-1 rounded-3xl bg-[#070707] border border-neutral-900 p-4 overflow-hidden">
            <div className="absolute inset-x-4 top-4 h-0.5 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 blur-sm" />
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-accent font-mono">
                  $ fix-line --current
                </span>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] text-accent">
                  F9
                </span>
              </div>
              <div className="bg-[#0d0d0d] rounded-2xl border border-neutral-900 p-3 text-[11px] leading-relaxed text-neutral-300 shadow-[inset_0_0_20px_rgba(0,230,142,0.08)]">
                <p className="text-accent/70">
                  fixing grammar, punctuation, and casing…
                </p>
                <p>
                  Selected text passed to local Ollama model for correction.
                </p>
              </div>
              <div className="flex items-center justify-between gap-2 text-[9px] text-neutral-500">
                <span>Clipboard → local model → restore text</span>
                <span className="px-2 py-1 rounded-full border border-neutral-800 bg-neutral-950 text-accent">
                  F10
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Scanner Type
  return (
    <div className="w-full h-full bg-[#080808] border border-neutral-900 rounded-t-xl p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-accent/10 transition-colors">
      {/* Mock App Header */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-900">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-[10px] text-neutral-500 font-mono">
          neuroscan.ai/classify
        </span>
        <span className="w-4 h-4 rounded-md bg-accent-muted/10 border border-accent/20 flex items-center justify-center">
          <Brain size={8} className="text-accent" />
        </span>
      </div>

      {/* Mock Scanner Layout */}
      <div className="flex gap-4 pt-3 flex-1 relative items-center justify-center">
        {/* Radar Graphic */}
        <div className="w-16 h-16 rounded-full border border-neutral-900 flex items-center justify-center relative">
          <div className="absolute w-12 h-12 rounded-full border border-neutral-800" />
          <div className="absolute w-6 h-6 rounded-full border border-accent/15" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-neutral-900 -translate-x-1/2" />
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-neutral-900 -translate-y-1/2" />

          {/* Scanner Sweeping Line */}
          <div className="absolute top-1/2 left-1/2 w-8 h-[1px] bg-accent origin-left rotate-45 animate-pulse" />

          <Activity size={12} className="text-accent opacity-75 absolute" />
        </div>

        {/* Scan Results */}
        <div className="flex flex-col gap-1.5 bg-neutral-900/30 border border-neutral-950 p-2 rounded-lg max-w-[120px]">
          <span className="text-[7px] text-neutral-400 font-semibold uppercase">
            Prediction Result
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold text-accent">Stage 2</span>
            <span className="text-[7px] text-neutral-500">MCI Stage</span>
          </div>
          <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
            <div className="w-[91%] h-full bg-accent" />
          </div>
          <span className="text-[6px] text-accent/80 font-mono">
            Confidence: 91.2%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Practical web platforms and tools built using modern stacks."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="group glass-card rounded-2xl border border-neutral-900/60 overflow-hidden flex flex-col justify-between hover:border-accent/10 transition-all duration-300 hover:shadow-card-glow"
          >
            {/* Visual Thumbnail / Interactive Graphic */}
            <div className="h-56 md:h-64 w-full relative bg-[#060606] flex items-end px-4 md:px-6 pt-4 border-b border-neutral-950 overflow-hidden">
              {/* Outer wrapping frame scale anim */}
              <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                <ProjectMockup type={project.graphicType} />
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Header Title + Links */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-serif text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-accent/85 font-medium tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-300"
                      aria-label="View Github Repository"
                    >
                      <GithubIcon size={14} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-300"
                        aria-label="View Live Website"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Short Paragraph Description */}
                <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 pt-1">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-[11px] md:text-xs text-neutral-400 leading-relaxed font-sans"
                    >
                      <span className="text-accent mt-1 select-none">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badge List */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-900/80">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="px-2.5 py-1 rounded-lg text-[9px] font-semibold text-neutral-400 bg-neutral-900/60 border border-neutral-850 cursor-default transition-transform duration-300 hover:scale-105 hover:border-accent/30 hover:text-white"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
