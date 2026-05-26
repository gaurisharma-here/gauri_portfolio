import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased font-sans select-none selection:bg-accent/20 selection:text-accent">
      {/* Background Gradients & Noise Grid */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute top-12 left-1/3 w-72 h-72 atmosphere-glow bg-[#00d9a5]/15" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 atmosphere-glow bg-[#3ecaaa]/12" />
        <div className="absolute inset-0 grid-overlay opacity-[0.01]" />
      </div>

      {/* Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
