"use client";

import { Users, Wrench, Globe, ShieldCheck } from "lucide-react";
import { translations } from "@/lib/translations";

interface WhyUsSectionProps {
  lang: "en" | "hi";
}

/* 
  SECTION 04: TRADER & LABOUR / JOB WORK SERVICES
  Note: Formerly "04 / OUR VALUES" / "04 / हमारे मूल्य".
  Updated to highlight:
  1. Seeking Traders, Stockists & Wholesale Distributors
  2. Operating as Contract Labour & Custom Job Work Manufacturing
*/
export function WhyUsSection({ lang }: WhyUsSectionProps) {
  const t = translations[lang].whyUs;

  const features = [
    {
      icon: Users, // Trader & Dealer Network
      title: t.f1Title,
      description: t.f1Desc,
    },
    {
      icon: Wrench, // Contract Labour & Job Work
      title: t.f2Title,
      description: t.f2Desc,
    },
    {
      icon: Globe, // Direct Factory Supply
      title: t.f3Title,
      description: t.f3Desc,
    },
    {
      icon: ShieldCheck, // Custom Specs & Testing
      title: t.f4Title,
      description: t.f4Desc,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-zinc-900 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-800" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-800" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] font-bold text-industry-accent tracking-widest uppercase block">
            {t.kicker}
          </span>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight uppercase">
            {t.title}
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-xs leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-950/60 border border-zinc-850 p-6 rounded-none transition-all duration-300 hover:border-industry-accent hover:-translate-y-1 hover:bg-zinc-950 hover:shadow-lg group"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-4">
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-450 rounded-none group-hover:text-industry-accent group-hover:bg-zinc-950 group-hover:border-industry-accent transition-all duration-300">
                  <feature.icon className="h-5 w-5" />
                </div>
              </div>
              
              {/* Text Description */}
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-center text-zinc-150 mb-2 group-hover:text-white leading-tight">
                {feature.title}
              </h3>
              <p className="text-[11px] text-zinc-450 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
