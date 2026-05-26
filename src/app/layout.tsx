import type { Metadata } from "next";
import { Outfit, DM_Serif_Display } from "next/font/google";
import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Gauri Sharma | Full Stack & AI-Focused Developer",
  description:
    "Portfolio of Gauri Sharma, a Computer Science undergraduate engineering scalable web applications, robust APIs, and AI-powered tools.",
  keywords: [
    "Gauri Sharma",
    "Full Stack Developer",
    "AI Developer",
    "FastAPI",
    "Next.js",
    "Python",
    "React",
    "Developer Portfolio",
  ],
  authors: [{ name: "Gauri Sharma" }],
  openGraph: {
    title: "Gauri Sharma | Full Stack & AI-Focused Developer",
    description:
      "Portfolio of Gauri Sharma, a Computer Science undergraduate engineering scalable web applications, robust APIs, and AI-powered tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
