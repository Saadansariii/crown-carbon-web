"use client";

import Image from "next/image";
import { Factory, ShieldCheck, Users, MapPin, Award } from "lucide-react";
import { translations } from "@/lib/translations";

interface AboutSectionProps {
  lang: "en" | "hi";
}

export function AboutSection({ lang }: AboutSectionProps) {
  const t = translations[lang].about;

  const stats = [
    {
      icon: Award,
      value: t.statYears,
      label: t.statYearsDesc,
    },
    {
      icon: Users,
      value: t.statOem,
      label: t.statOemDesc,
    },
    {
      icon: Factory,
      value: t.statUnits,
      label: t.statUnitsDesc,
    },
    {
      icon: MapPin,
      value: t.statNetwork,
      label: t.statNetworkDesc,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-200" />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Content - Shortened B2B format */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-industry-accent tracking-widest uppercase block">
                {t.kicker}
              </span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase">
                {t.title}
              </h2>
            </div>
            
            <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed">
              {t.desc1}
            </p>
            
            <p className="text-zinc-650 text-xs sm:text-sm leading-relaxed">
              {t.desc2}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-3">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-3 border border-zinc-150 bg-zinc-50/50 hover:bg-zinc-50 hover:border-zinc-250 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1 bg-white border border-zinc-200 text-industry-accent group-hover:bg-industry-accent group-hover:text-white transition-all shrink-0">
                      <stat.icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-base font-bold text-zinc-900 tracking-tight leading-none">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500 leading-normal">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Graphic Image */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative h-[320px] w-full border border-zinc-200 p-2 bg-zinc-50">
              <div 
                className="absolute inset-3 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-35 z-0 pointer-events-none" 
                aria-hidden="true" 
              />
              
              <div className="relative w-full h-full overflow-hidden z-10">
                <Image
                  src="/assets/carbon_image/carbon3.jpeg"
                  alt="Crown Carbon replication specs"
                  fill
                  className="object-cover"
                  sizes="(max-w-720px) 100vw, 35vw"
                />
              </div>

              {/* Lab verification tag */}
              <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-800 text-white py-2.5 px-3.5 flex items-center gap-2.5 shadow-md z-20">
                <div className="p-1 bg-industry-accent text-white rounded-none">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="flex flex-col pr-2">
                  <span className="text-[7.5px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-0.5">
                    {t.qaLabel}
                  </span>
                  <span className="text-[9.5px] font-bold text-white uppercase tracking-wider leading-none">
                    {t.qaVal}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
