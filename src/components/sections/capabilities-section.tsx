"use client";

import { Send, TestTube, Cpu, Truck, ChevronRight } from "lucide-react";
import { translations } from "@/lib/translations";

interface CapabilitiesSectionProps {
  lang: "en" | "hi";
}

export function CapabilitiesSection({ lang }: CapabilitiesSectionProps) {
  const t = translations[lang].capabilities;

  const steps = [
    {
      step: "01",
      icon: Send,
      title: t.step1Title,
      description: t.step1Desc,
    },
    {
      step: "02",
      icon: TestTube,
      title: t.step2Title,
      description: t.step2Desc,
    },
    {
      step: "03",
      icon: Cpu,
      title: t.step3Title,
      description: t.step3Desc,
    },
    {
      step: "04",
      icon: Truck,
      title: t.step4Title,
      description: t.step4Desc,
    },
  ];

  return (
    <section id="infrastructure" className="py-20 bg-zinc-950 text-white relative">
      {/* Blueprint Grid Lines Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none z-0" 
        aria-hidden="true" 
      />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 space-y-2 max-w-2xl">
          <span className="text-[10px] font-bold text-industry-accent tracking-widest uppercase block">
            {t.kicker}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
            {t.title}
          </h2>
          <p className="text-zinc-400 text-xs leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Stepper Grid (Horizontal Process) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-zinc-900/60 border border-zinc-850 hover:border-zinc-700 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Chevron indicator for steps connecting */}
              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 bg-zinc-950 p-1 border border-zinc-850">
                  <ChevronRight className="h-3.5 w-3.5 text-zinc-600 group-hover:text-industry-accent transition-colors" />
                </div>
              )}

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 bg-zinc-950 border border-zinc-800 text-industry-accent rounded-none group-hover:bg-industry-accent group-hover:text-white transition-all">
                    <item.icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-2xl font-black text-zinc-800 font-mono leading-none">
                    {item.step}
                  </span>
                </div>
                
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100">
                  {item.title}
                </h4>
                <p className="text-[11px] text-zinc-450 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
