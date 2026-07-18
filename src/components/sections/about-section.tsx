"use client";

import Image from "next/image";
import { Factory, ShieldCheck, Users, MapPin, Award } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "20+",
    label: "Years of Experience",
    description: "Two decades of technical craftsmanship since 2006",
  },
  {
    icon: Users,
    value: "100+",
    label: "OEM Partnerships",
    description: "Original equipment manufacturers across India",
  },
  {
    icon: Factory,
    value: "500k+",
    label: "Units Produced",
    description: "High-grade carbon parts shipped annually",
  },
  {
    icon: MapPin,
    value: "Pan-India",
    label: "Supply Network",
    description: "Logistics and support across all major industrial zones",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Decorative metal ruler detail at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-200" />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-industry-accent tracking-widest uppercase block">
                01 / Company Profile
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 uppercase">
                Engineering Quality in Carbon Brushes
              </h2>
            </div>
            
            <p className="text-zinc-655 text-base leading-relaxed text-pretty">
              Since 2006, Crown Carbon Brush has specialized in the formulation and precision machining of premium carbon brushes, holders, and slip rings. We work with an extensive portfolio of material grades—including electrographite, copper graphite, silver graphite, and resin-bonded carbon—collaborating closely with engineers to deliver products optimized for demanding operational conditions.
            </p>
            
            <p className="text-zinc-655 text-base leading-relaxed text-pretty">
              Our deep expertise in motor commutators and slip rings allows us to provide tailored configurations. We protect your machinery and minimize downtime, ensuring maximum service life for crucial industrial armatures.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-5 border border-zinc-150 bg-zinc-50/50 hover:bg-zinc-50 hover:border-zinc-300 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white border border-zinc-200 text-industry-accent group-hover:bg-industry-accent group-hover:text-white group-hover:border-industry-accent transition-all shrink-0">
                      <stat.icon className="h-4 w-4" />
                    </div>
                    <span className="text-2xl font-bold text-zinc-900 tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-normal">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Graphic/Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] w-full border border-zinc-200 p-3 bg-zinc-50">
              {/* Engineering grid lines inside */}
              <div 
                className="absolute inset-4 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 z-0 pointer-events-none" 
                aria-hidden="true" 
              />
              
              <div className="relative w-full h-full overflow-hidden z-10">
                <Image
                  src="/assets/carbon_image/carbon3.jpeg"
                  alt="Crown Carbon manufacturing facility and precision materials"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-w-720px) 100vw, 40vw"
                />
              </div>

              {/* Float badge */}
              <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-zinc-800 text-white p-4 hidden sm:flex items-center gap-3 shadow-xl z-20">
                <div className="p-2 bg-industry-accent text-white rounded-none">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="flex flex-col pr-4">
                  <span className="text-[10px] font-bold text-industry-silver uppercase tracking-widest leading-none mb-1">
                    Quality Standard
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    ISO Compliant Lab
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
