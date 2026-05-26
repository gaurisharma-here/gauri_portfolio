"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/lib/icons";
import { personalDetails, socialsData } from "@/data/portfolio";

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPointer({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handlePointerLeave = () => {
    setPointer((prev) => ({ ...prev, active: false }));
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return (
          <GithubIcon
            size={14}
            className="group-hover:text-accent transition-colors"
          />
        );
      case "LinkedIn":
        return (
          <LinkedinIcon
            size={14}
            className="group-hover:text-accent transition-colors"
          />
        );
      case "Email":
        return (
          <Mail
            size={14}
            className="group-hover:text-accent transition-colors"
          />
        );
      case "Resume":
        return (
          <FileText
            size={14}
            className="group-hover:text-accent transition-colors"
          />
        );
      default:
        return <FileText size={14} />;
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Cinematic Glowing Background Blurs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.16, 0.3, 0.16],
            x: [0, 18, 0],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-[40%] w-[320px] md:w-[560px] h-[320px] md:h-[560px] rounded-full bg-accent/12 blur-[88px] md:blur-[140px]"
        />

        <div
          style={{
            left: pointer.x,
            top: pointer.y,
            opacity: pointer.active ? 1 : 0,
          }}
          className="pointer-glow"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10 space-y-8 md:space-y-10">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent/20 bg-accent-muted/5 shadow-glow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-[11px] font-medium tracking-wider text-accent uppercase font-sans">
            {personalDetails.status}
          </span>
        </motion.div>

        {/* Title & Headline */}
        <div className="space-y-4 md:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-normal tracking-tight leading-tight"
          >
            hi, I am {personalDetails.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl font-sans font-light max-w-2xl mx-auto text-neutral-300 leading-snug tracking-tight"
          >
            {personalDetails.tagline}
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <a
            href="#contact"
            onClick={handleContactClick}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-black font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
          >
            Let&apos;s Talk
            <ArrowRight
              size={13}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 hover:bg-neutral-900/80 text-white font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-300"
          >
            View Projects
          </a>
        </motion.div>

        {/* Social Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6"
        >
          <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
            Find me on the Internet
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-lg mx-auto">
            {socialsData.map((social) => {
              if (social.platform === "Resume") return null; // We display resume download button explicitly in navbar/projects/about/contact or as a standalone component
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-800/80 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-neutral-700 text-neutral-400 hover:text-white transition-all duration-300"
                >
                  {getSocialIcon(social.platform)}
                  <span className="text-xs font-medium tracking-wide">
                    {social.platform}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">
            Scroll
          </span>
          <div className="w-5 h-8 border border-neutral-800 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
