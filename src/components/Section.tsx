"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, title, subtitle, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 relative ${className}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16 space-y-3"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight flex items-center gap-2">
              <span className="text-accent font-sans font-normal opacity-85">/</span> {title}
            </h2>
            {subtitle && (
              <p className="text-sm md:text-base text-neutral-400 font-sans max-w-xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
