import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import AppPreview from "@/components/landing/AppPreview";
import Features from "@/components/landing/Features";
import Philosophy from "@/components/landing/Philosophy";
import CTA from "@/components/landing/CTA";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <AppPreview />
      <Features />
      <Philosophy />
      <CTA />
    </div>
  );
}