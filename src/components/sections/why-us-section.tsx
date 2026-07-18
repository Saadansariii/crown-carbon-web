"use client";

import { Award, Globe, Wrench, ShieldCheck, Flame } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "20 Years Expertise",
    description: "Manufacturing carbon contacts and technical brushes since 2006 with proven formulation reliability.",
  },
  {
    icon: Globe,
    title: "Pan India Delivery",
    description: "Fast-response logistics network serving power stations, steel mills, and cement hubs in all states.",
  },
  {
    icon: Wrench,
    title: "Tailored Solutions",
    description: "Custom mechanical dimensions, specialized bevel profiles, and custom-tension shunts built to order.",
  },
  {
    icon: ShieldCheck,
    title: "ISO Audited Materials",
    description: "Every batch is verified in our testing lab for density, electrical resistance, and mechanical resilience.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-zinc-900 text-white relative">
      {/* Structural visual lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-800" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-800" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-3">
          <span className="text-[11px] font-bold text-industry-accent tracking-widest uppercase block">
            04 / WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            Built for Demanding Industrial Environments
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
            Reducing commutator wear and motor downtime through verified material quality and engineering precision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-950/60 border border-zinc-800/80 p-8 rounded-none transition-all duration-300 hover:border-industry-accent hover:-translate-y-1 hover:bg-zinc-950 hover:shadow-xl group"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="p-3.5 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-none group-hover:text-industry-accent group-hover:bg-zinc-950 group-hover:border-industry-accent transition-all duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              
              {/* Text Description */}
              <h3 className="text-sm font-bold uppercase tracking-wider text-center text-zinc-100 mb-3 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-xs text-zinc-450 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
