export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  graphicType: "email" | "dashboard" | "scanner" | "editor" | "studyroom";
}

export interface SocialLink {
  platform: "GitHub" | "LinkedIn" | "Email" | "Resume" | "Twitter";
  url: string;
  label: string;
}

export interface PersonalDetails {
  name: string;
  role: string;
  tagline: string;
  about: string;
  status: string;
}

export const personalDetails: PersonalDetails = {
  name: "Gauri Sharma",
  role: "Full Stack & AI-Focused Developer",
  tagline:
    "Third-year Computer Science student building full-stack apps, backend systems, and AI tools while exploring new ideas.",
  about:
    "Computer Science undergraduate interested in full-stack development, backend systems, and AI-powered applications. I enjoy building practical projects, learning modern technologies, and improving my problem-solving skills through hands-on development.",
  status: "Looking for opportunities",
};

export const educationHistory: EducationItem[] = [
  {
    degree: "B.Tech – Computer Science Engineering",
    institution: "ABES Engineering College | AKTU",
    period: "Nov 2023 – July 2027",
  },
  {
    degree: "Senior Secondary (CBSE) | 81%",
    institution: "Modern School, Noida",
    period: "2022",
  },
  {
    degree: "Secondary (CBSE) | 92.3%",
    institution: "Modern School, Noida",
    period: "2020",
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "bcrypt",
      "OTP Verification",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code"],
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: "Local AI Text Fixer",
    subtitle: "Offline AI Writing Assistant",
    description:
      "A lightweight offline writing assistant that fixes grammar, typos, punctuation, and casing using a local LLM through Ollama. Works system-wide across apps using global hotkeys.",
    highlights: [
      "Fully offline AI text correction with local Ollama support.",
      "Works across any application using clipboard automation and global hotkeys.",
      "F9 fixes the current line and F10 fixes selected text for fast editing.",
      "Preserves formatting and line breaks while keeping the flow lightweight and CPU-friendly.",
    ],
    tech: ["Python", "Ollama", "Local LLMs", "httpx", "pynput", "pyperclip"],
    githubUrl: "https://github.com/gaurisharma-here/local-ai-text-fixer",
    graphicType: "editor",
  },
  {
    title: "Resumail",
    subtitle: "AI Job Application Assistant",
    description:
      "Engineered a full-stack AI job application assistant that automates personalized outreach — from resume upload to email delivery — end-to-end.",
    highlights: [
      "Used Groq API to process uploaded resumes and generate personalized application emails automatically.",
      "Implemented secure authentication with OTP email verification, bcrypt password hashing, JWT session tokens, and route-level access control.",
      "Integrated Brevo for transactional email delivery and persisted sent-email history in PostgreSQL, enabling dashboard tracking.",
      "Containerized and deployed the application via Docker, ensuring reproducible builds and production-ready reliability.",
    ],
    tech: [
      "React.js",
      "FastAPI",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Groq API",
      "Brevo API",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/gaurisharma-here/resumail",
    liveUrl: "https://github.com/gaurisharma-here/resumail", // Use github link as placeholder for live demo
    graphicType: "email",
  },
  {
    title: "Prio",
    subtitle: "Smart Task & Productivity Platform",
    description:
      "Developed a full-stack productivity platform for managing tasks, deadlines, and priorities with secure JWT-based authentication.",
    highlights: [
      "Implemented heuristic task prioritization using priority levels and deadline urgency to rank pending work intelligently.",
      "Built a schedule generation system that distributes task hours across upcoming days based on deadlines and daily working hours.",
      "Designed an analytics dashboard displaying completion rates, priority distribution, and 7-day productivity trends.",
      "Added rule-based insights with optional Groq LLM integration for natural-language feedback.",
    ],
    tech: [
      "React.js",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/gaurisharma-here/prio",
    liveUrl: "https://github.com/gaurisharma-here/prio",
    graphicType: "dashboard",
  },
  {
    title: "NeuroScan AI",
    subtitle: "Alzheimer's Detection System",
    description:
      "Developed an Alzheimer's detection system using FastAPI, Python, and pretrained CNN models for MRI image classification.",
    highlights: [
      "Integrated pretrained CNN models to predict Alzheimer's stages from uploaded MRI scans.",
      "Built backend APIs for MRI upload, prediction processing, chatbot interaction, and session management.",
      "Added Gemini API integration to generate precautionary guidance and follow-up recommendations based on prediction results.",
      "Designed a conversational chatbot interface for user interaction and medical assistance support.",
    ],
    tech: [
      "FastAPI",
      "Python",
      "CNN",
      "TensorFlow/PyTorch",
      "Gemini API",
      "React.js",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/gaurisharma-here/neuroscan-ai",
    liveUrl: "https://github.com/gaurisharma-here/neuroscan-ai",
    graphicType: "scanner",
  },
  {
    title: "StudyRoom",
    subtitle: "Collaborative Study Room Platform",
    description:
      "Built a real-time collaborative study platform that helps students stay focused and accountable while studying together online, with live rooms, chat, and session tracking.",
    highlights: [
      "Realtime room chat and live participant updates using FastAPI WebSockets",
      "JWT-based authentication with protected routes and invite-code room joins",
      "Pomodoro-style session timer with study streak and total hours dashboard",
      "Deployed frontend on Vercel and backend on Render, with Supabase PostgreSQL",
    ],
    tech: [
      "React",
      "Vite",
      "FastAPI",
      "WebSockets",
      "Supabase",
      "Zustand",
    ],
    githubUrl: "https://github.com/gaurisharma-here/study-platform",
    liveUrl: "https://study-platform-hazel.vercel.app",
    graphicType: "studyroom",
  },
];

export const socialsData: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/gaurisharma-here",
    label: "github.com/gaurisharma-here",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/gauri-sharma-67328235",
    label: "linkedin.com/in/gauri-sharma",
  },
  {
    platform: "Email",
    url: "mailto:gaurisharma89892@gmail.com",
    label: "gaurisharma89892@gmail.com",
  },
  {
    platform: "Resume",
    url: "#resume", // Under local layout it triggers resume section or download
    label: "Download Resume",
  },
];
