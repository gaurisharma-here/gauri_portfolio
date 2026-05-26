"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-black py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-sm tracking-wide text-white/90 font-medium">
            Gauri Sharma
          </h3>

          <p className="text-xs text-neutral-500 leading-relaxed max-w-md">
            Exploring backend development, AI automation, and scalable web
            applications.
          </p>

          <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-700 pt-1">
            © 2026 Gauri Sharma
          </p>
        </div>

        {/* Right Side */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2.5 text-xs font-medium tracking-wide text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400/40"
        >
          Back to Top
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </button>
      </div>
    </footer>
  );
}
