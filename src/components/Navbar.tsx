"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#home" },
  { name: "Work", href: "#projects" },
  { name: "Stack", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled down to apply background contrast
      setScrolled(window.scrollY > 20);

      // Track current active section
      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to match navbar heights
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of floating navbar/padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4 md:pt-6 transition-all duration-300">
        <div className="max-w-5xl mx-auto flex items-center justify-between relative">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-white hover:text-accent font-serif tracking-wide text-lg font-medium transition-colors pl-2"
          >
            Gauri<span className="text-accent font-sans">.</span>
          </a>

          {/* Desktop Navigation Pill */}
          <nav
            className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 glass-card ${
              scrolled
                ? "bg-black/75 shadow-card-glow border-accent/10"
                : "bg-neutral-900/40"
            }`}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 bg-accent-muted border border-accent/30 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Call-to-action button or status pill */}
          <div className="hidden md:block pr-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-[11px] font-semibold text-accent tracking-wider uppercase border border-accent/20 hover:border-accent hover:bg-accent-muted/10 px-4 py-2 rounded-full transition-all duration-300 shadow-glow-sm hover:shadow-glow"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center w-9 h-9 rounded-full bg-neutral-900/60 border border-neutral-800 text-white hover:text-accent hover:border-accent/40 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-40 md:hidden p-6 rounded-2xl glass-card bg-black/90 shadow-glow border-accent/15"
          >
            <div className="flex flex-col gap-4 text-center">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                      isActive
                        ? "text-accent text-glow"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <hr className="border-neutral-800/80 my-2" />
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full text-center text-xs font-semibold text-accent tracking-wider uppercase border border-accent/20 hover:border-accent hover:bg-accent-muted/10 py-3 rounded-xl transition-all duration-300 bg-accent-muted/5"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
