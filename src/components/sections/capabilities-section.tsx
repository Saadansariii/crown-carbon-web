"use client";

import { Wrench, ShieldCheck, Flame, GitMerge, FileCheck } from "lucide-react";

const capabilities = [
  {
    icon: Wrench,
    title: "Precision Profiling & Bevelling",
    description: "Machining of double bevels, side channels, and top grooves to tolerances of ±0.05mm, ensuring smooth slide fits in the holder slots.",
  },
  {
    icon: GitMerge,
    title: "Flexible Shunts & Terminals",
    description: "Tamp-bonded high-purity copper braids fitted with custom terminators (fork, ring, flag, or quick-connect brass terminals) with silicone or glass-fiber insulation sleeves.",
  },
  {
    icon: ShieldCheck,
    title: "Integrated Wear Sensors",
    description: "Option to insert embedding wear-alert copper pins or cut wear-limit indicator notches that notify maintenance crews before armature damage occurs.",
  },
  {
    icon: Flame,
    title: "High-Temperature Spring Mounts",
    description: "Specialized brush-top pads (such as hard rubber or phenolic cushions) combined with customized spring clips to distribute mechanical pressure.",
  },
];

const steps = [
  {
    step: "01",
    title: "Technical Review & Spec Design",
    description: "We analyze client blueprints, load requirements, operating speeds, and current load to specify the exact dimensions and parameters.",
  },
  {
    step: "02",
    title: "Materials Formulation",
    description: "We select high-purity graphite powders, copper alloys, and bonding resins, sintering them under high pressure to yield specified grades.",
  },
  {
    step: "03",
    title: "CNC Mechanical Processing",
    description: "Slabs are cut, milled, bevelled, and drilled on precision machinery. Shunts are secured using high-density tamp copper powder.",
  },
  {
    step: "04",
    title: "Quality Lab Auditing",
    description: "Every batch undergoes electrical resistance tests, density measurements, dimensions auditing, and shunt pull-strength verification.",
  },
];

export function CapabilitiesSection() {
  return (
    <section id="infrastructure" className="py-24 bg-zinc-950 text-white relative">
      {/* Blueprint Grid Lines Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none z-0" 
        aria-hidden="true" 
      />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-2">
          <span className="text-[11px] font-bold text-industry-accent tracking-widest uppercase block">
            03 / INFRASTRUCTURE & CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            Custom Manufacturing Specifications
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            We don't just supply standard carbon blocks. Crown Carbon Brush machines custom features to fit specific machinery requirements, helping industrial plants keep heavy rotating assets spinning.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900 group"
            >
              <div className="p-3 bg-zinc-950 border border-zinc-800 text-industry-accent w-fit mb-6 transition-colors group-hover:bg-industry-accent group-hover:text-white group-hover:border-industry-accent">
                <cap.icon className="h-5 w-5" />
              </div>
              <h3 className="text-md font-bold uppercase tracking-wider text-white mb-3">
                {cap.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* Manufacturing Process Header */}
        <div className="border-t border-zinc-800 pt-16 mb-16">
          <span className="text-[11px] font-bold text-industry-accent tracking-widest uppercase block mb-2">
            QUALITY PROCESS FLOW
          </span>
          <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
            From Raw Carbon Powder to Finished Contacts
          </h3>
        </div>

        {/* Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="relative space-y-4">
              <div className="flex items-end gap-3">
                <span className="text-4xl font-bold text-zinc-850 leading-none select-none font-mono">
                  {item.step}
                </span>
                <div className="h-px bg-zinc-800 flex-1 mb-2 hidden lg:block" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-200">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-450 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
