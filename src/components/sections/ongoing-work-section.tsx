"use client";

import { Cpu, ShieldCheck, Factory, HardHat, Train, Wind, Compass } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Steel & Metallurgy",
    description: "High-current carbon brushes matching extreme heat and high mechanical stress in rolling mills.",
  },
  {
    icon: HardHat,
    title: "Cement & Mining",
    description: "Dust-tolerant carbon blocks optimized for crushing machines and large rotary kilns.",
  },
  {
    icon: Train,
    title: "Railways & Traction",
    description: "OEM-standard traction motor brushes with high vibrational stability for locomotives.",
  },
  {
    icon: Compass,
    title: "Power Generation",
    description: "Low-resistance brushes ensuring continuous current transfer on high-speed alternators.",
  },
  {
    icon: Wind,
    title: "Wind Energy",
    description: "Lightning protection contacts and slip-ring assemblies for offshore and onshore turbines.",
  },
];

const qaChecks = [
  {
    title: "Dimensional Verification",
    description: "Pocket tolerance auditing down to +0.02mm using precision digital gauges.",
  },
  {
    title: "Resistivity & Density Testing",
    description: "Verifying uniform graphite formulation structure to prevent spot-heating.",
  },
  {
    title: "Shunt Pull Verification",
    description: "Ensuring tamped copper braids withstand mechanical stresses during high-RPM operation.",
  },
];

export function OngoingWorkSection() {
  return (
    <section id="industries" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-200" />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Industries Section */}
        <div className="mb-24">
          <div className="text-center mb-16 space-y-2">
            <span className="text-[11px] font-bold text-industry-accent tracking-widest uppercase block">
              05 / INDUSTRIES SERVED
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 uppercase">
              Proven Performance Across Sectors
            </h2>
            <p className="text-zinc-550 max-w-xl mx-auto text-sm leading-relaxed">
              Our components are designed to withstand the distinct chemical, physical, and electrical environments of key heavy industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((ind, idx) => (
              <div 
                key={idx}
                className="p-6 border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-industry-accent hover:shadow-lg transition-all duration-300 group"
              >
                <div className="p-3 bg-white border border-zinc-200 text-zinc-650 rounded-none w-fit mb-5 transition-colors group-hover:bg-industry-accent group-hover:text-white group-hover:border-industry-accent">
                  <ind.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-2">
                  {ind.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="border-t border-zinc-200 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* QA Left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-industry-accent tracking-widest uppercase block">
                  06 / QUALITY ASSURANCE
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 uppercase">
                  Zero-Defect Commitment
                </h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Commutators are expensive assets. A bad brush can lead to sparking, grooving, or flashing that destroys your rotor coils. We eliminate these risks by testing every dispatch in our quality control lab.
              </p>
              <div className="flex items-center gap-3 p-4 bg-zinc-900 text-white border border-zinc-800">
                <div className="p-2 bg-industry-accent text-white rounded-none">
                  <Cpu className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold uppercase tracking-wider text-white">Audited Materials Only</p>
                  <p className="text-zinc-400">All carbon rods and blocks are sourced from certified global labs.</p>
                </div>
              </div>
            </div>

            {/* QA Right */}
            <div className="lg:col-span-7 grid grid-cols-1 gap-4">
              {qaChecks.map((check, idx) => (
                <div 
                  key={idx}
                  className="p-5 border border-zinc-200 bg-zinc-50 flex items-start gap-4 hover:border-zinc-300 transition-all"
                >
                  <div className="h-6 w-6 rounded-full bg-green-50 text-green-700 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-green-200">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950 mb-1">
                      {check.title}
                    </h4>
                    <p className="text-xs text-zinc-500 leading-normal">
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
