"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OngoingWorkSection } from "@/components/sections/ongoing-work-section";
import { ProductsSection } from "@/components/sections/products-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  const [lang, setLang] = useState<"en" | "hi">("en");

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} setLang={setLang} />
      <main className="flex-1">
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <ProductsSection lang={lang} />
        <CapabilitiesSection lang={lang} />
        <WhyUsSection lang={lang} />
        <OngoingWorkSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton />
    </div>
  );
}
