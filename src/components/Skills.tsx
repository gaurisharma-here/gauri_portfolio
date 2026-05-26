"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Laptop, Cpu, Database, Wrench } from "lucide-react";
import Section from "./Section";
import { skillsData } from "@/data/portfolio";

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 size={16} className="text-accent" />;
      case "Frontend":
        return <Laptop size={16} className="text-accent" />;
      case "Backend & APIs":
        return <Cpu size={16} className="text-accent" />;
      case "Databases":
        return <Database size={16} className="text-accent" />;
      case "DevOps & Tools":
        return <Wrench size={16} className="text-accent" />;
      default:
        return <Code2 size={16} className="text-accent" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technical stack and software development capabilities."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillsData.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="glass-card p-6 rounded-2xl border border-neutral-900/60 hover:border-neutral-800/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-neutral-900/80">
                <span className="p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/40">
                  {getCategoryIcon(category.title)}
                </span>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills List */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-2 rounded-xl text-xs font-medium text-neutral-300 bg-neutral-900/35 border border-neutral-800/80 hover:text-accent hover:border-accent/40 hover:bg-accent-muted/5 transition-all duration-300 hover:shadow-glow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
