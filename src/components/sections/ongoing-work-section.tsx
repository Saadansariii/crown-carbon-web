"use client";

import { Cpu, Factory, HardHat, Train, Wind, Compass } from "lucide-react";
import { translations } from "@/lib/translations";

interface OngoingWorkSectionProps {
  lang: "en" | "hi";
}

export function OngoingWorkSection({ lang }: OngoingWorkSectionProps) {
  const t = translations[lang].ongoing;

  const industries = [
    {
      icon: Factory,
      title: t.ind1Title,
      description: t.ind1Desc,
    },
    {
      icon: HardHat,
      title: t.ind2Title,
      description: t.ind2Desc,
    },
    {
      icon: Train,
      title: t.ind3Title,
      description: t.ind3Desc,
    },
    {
      icon: Compass,
      title: t.ind4Title,
      description: t.ind4Desc,
    },
    {
      icon: Wind,
      title: t.ind5Title,
      description: t.ind5Desc,
    },
  ];

  const qaChecks = [
    {
      title: t.qaCheck1Title,
      description: t.qaCheck1Desc,
    },
    {
      title: t.qaCheck2Title,
      description: t.qaCheck2Desc,
    },
    {
      title: t.qaCheck3Title,
      description: t.qaCheck3Desc,
    },
  ];

  return (
    <section id="industries" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-200" />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Industries Section */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-2">
            <span className="text-[10px] font-bold text-industry-accent tracking-widest uppercase block">
              {t.indKicker}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 uppercase">
              {t.indTitle}
            </h2>
            <p className="text-zinc-550 max-w-xl mx-auto text-xs leading-relaxed">
              {t.indDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((ind, idx) => (
              <div 
                key={idx}
                className="p-5 border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-industry-accent hover:shadow-lg transition-all duration-350 group"
              >
                <div className="p-2 bg-white border border-zinc-250 text-zinc-650 rounded-none w-fit mb-4 transition-colors group-hover:bg-industry-accent group-hover:text-white group-hover:border-industry-accent">
                  <ind.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-950 mb-1.5 leading-tight">
                  {ind.title}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="border-t border-zinc-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* QA Left */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-industry-accent tracking-widest uppercase block">
                  {t.qaKicker}
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase">
                  {t.qaTitle}
                </h3>
              </div>
              <p className="text-zinc-600 text-xs leading-relaxed">
                {t.qaDesc}
              </p>
              <div className="flex items-center gap-3 p-3.5 bg-zinc-900 text-white border border-zinc-800">
                <div className="p-1.5 bg-industry-accent text-white rounded-none">
                  <Cpu className="h-4 w-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold uppercase tracking-wider text-white">{t.qaBoxTitle}</p>
                  <p className="text-[11px] text-zinc-450">{t.qaBoxDesc}</p>
                </div>
              </div>
            </div>

            {/* QA Right */}
            <div className="lg:col-span-7 grid grid-cols-1 gap-3.5">
              {qaChecks.map((check, idx) => (
                <div 
                  key={idx}
                  className="p-4 border border-zinc-200 bg-zinc-50 flex items-start gap-3.5 hover:border-zinc-250 transition-all"
                >
                  <div className="h-5 w-5 rounded-full bg-green-50 text-green-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-green-200">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-950 mb-0.5">
                      {check.title}
                    </h4>
                    <p className="text-[11px] text-zinc-500 leading-normal">
                      {check.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
