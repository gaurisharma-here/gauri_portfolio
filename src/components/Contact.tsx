"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, MapPin } from "lucide-react";
import Section from "./Section";
import { socialsData } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const emailSocial = socialsData.find((item) => item.platform === "Email");

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    // Simulate submission delay
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1800);
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's build something scalable. Drop a message or reach out via email."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-stretch">
        {/* Info Column (Left) */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-8 p-6 md:p-8 rounded-2xl glass-card border border-neutral-900 bg-neutral-950/20">
          <div className="space-y-6">
            <h3 className="text-xl font-serif text-white tracking-tight">
              Let&apos;s collaborate
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans">
              I am open to software developer internship roles, backend
              engineering roles, AI automation gigs, or consulting
              opportunities. If you have an interesting codebase, API systems or
              ML workloads to build, feel free to drop a message.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={emailSocial?.url || "mailto:gaurisharma89892@gmail.com"}
                className="group flex items-center gap-3.5 text-neutral-400 hover:text-white transition-colors"
              >
                <span className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-850 text-accent group-hover:bg-accent-muted/10 transition-colors">
                  <Mail size={16} />
                </span>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-semibold">
                    Email
                  </span>
                  <span className="text-xs font-semibold font-mono tracking-wide">
                    {emailSocial?.label || "gaurisharma89892@gmail.com"}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 text-neutral-400">
                <span className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-850 text-accent">
                  <MapPin size={16} />
                </span>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-semibold">
                    Location
                  </span>
                  <span className="text-xs font-semibold">
                    Noida, UP, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-900 text-[10px] text-neutral-500 font-mono">
            Typically responds within 24 hours.
          </div>
        </div>

        {/* Form Column (Right) */}
        <div className="md:col-span-7 rounded-2xl glass-card border border-neutral-900 p-6 md:p-8 bg-neutral-950/20 relative flex flex-col justify-center min-h-[350px]">
          <motion.div layout>
            {status !== "success" ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold font-sans"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900/40 border text-white text-xs placeholder-neutral-600 focus:outline-none transition-all duration-300 ${
                      errors.name
                        ? "border-red-500/50"
                        : "border-neutral-800/80 focus:border-accent/40 focus:shadow-glow-sm"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-500 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold font-sans"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="jane@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900/40 border text-white text-xs placeholder-neutral-600 focus:outline-none transition-all duration-300 ${
                      errors.email
                        ? "border-red-500/50"
                        : "border-neutral-800/80 focus:border-accent/40 focus:shadow-glow-sm"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-500 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold font-sans"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Hi Gauri, let's discuss a project..."
                    className={`w-full px-4 py-3 rounded-xl bg-neutral-900/40 border text-white text-xs placeholder-neutral-600 focus:outline-none resize-none transition-all duration-300 ${
                      errors.message
                        ? "border-red-500/50"
                        : "border-neutral-800/80 focus:border-accent/40 focus:shadow-glow-sm"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[10px] text-red-500 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent hover:bg-[#00e68e] text-black font-semibold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={12} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center space-y-4 py-8"
              >
                <div className="p-3 bg-accent-muted/10 border border-accent/20 rounded-full text-accent shadow-glow">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-serif text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans max-w-sm leading-relaxed">
                    Thank you for reaching out. I have received your message and
                    will review it shortly.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-4 py-2 border border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 text-neutral-300 hover:text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
