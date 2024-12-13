"use client";

import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
    </div>
  );
}
