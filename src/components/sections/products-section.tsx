"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { CheckCircle, ArrowUpRight, FileSpreadsheet } from "lucide-react";
import { translations } from "@/lib/translations";

interface ProductsSectionProps {
  lang: "en" | "hi";
}

export function ProductsSection({ lang }: ProductsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("carbon-brushes");

  const t = translations[lang].products;

  const productCategories = [
    {
      id: "carbon-brushes",
      title: t.brushesTitle,
      subtitle: t.brushesSub,
      description: t.brushesDesc,
      image: "/product-imgs/carbon_brush.png",
      features: [t.brushesF1, t.brushesF2, t.brushesF3, t.brushesF4],
      specs: [
        { label: t.specLabels.grades, value: "EG251, MC79, SG30" },
        { label: t.specLabels.current, value: "8 - 30 A/cm²" },
        { label: t.specLabels.speed, value: "Up to 85 m/s" },
        { label: t.specLabels.resistivity, value: "10 - 75 µΩ·m" },
      ],
      grades: ["EG236 / EG251", "MC79 / MC88", "SG30 / SG50"],
    },
    {
      id: "brush-holders",
      title: t.holdersTitle,
      subtitle: t.holdersSub,
      description: t.holdersDesc,
      image: "/product-imgs/holder.jpeg",
      features: [t.holdersF1, t.holdersF2, t.holdersF3, t.holdersF4],
      specs: [
        { label: t.specLabels.tolerance, value: "+0.02 to +0.08mm" },
        { label: t.specLabels.tension, value: "1.8 N - 3.8 N" },
        { label: t.specLabels.primaryMat, value: "Cast Brass / Bronze" },
        { label: t.specLabels.springMat, value: "Stainless Steel SUS301" },
      ],
      grades: ["Single Pocket Box", "Tandem Spring Pocket", "Constant Pressure"],
    },
    {
      id: "slip-rings",
      title: t.ringsTitle,
      subtitle: t.ringsSub,
      description: t.ringsDesc,
      image: "/product-imgs/slip_ring_unit.png",
      features: [t.ringsF1, t.ringsF2, t.ringsF3, t.ringsF4],
      specs: [
        { label: t.specLabels.voltage, value: "24V DC to 11kV AC" },
        { label: t.specLabels.circuits, value: "2 to 48 Tracks" },
        { label: t.specLabels.surface, value: "Mirror Ra < 0.4 µm" },
        { label: t.specLabels.insulation, value: "Class H Insulation" },
      ],
      grades: ["Molded Assemblies", "Machined Shaft", "Split Ring"],
    },
    {
      id: "springs",
      title: t.springsTitle,
      subtitle: t.springsSub,
      description: t.springsDesc,
      image: "/product-imgs/spring.jpg",
      features: [t.springsF1, t.springsF2, t.springsF3, t.springsF4],
      specs: [
        { label: t.specLabels.material, value: "Stainless Steel SUS301/304" },
        { label: t.specLabels.tension, value: "1.5 N - 15 N (Calibrated)" },
        { label: t.specLabels.fatigue, value: "50,000+ Cycles" },
        { label: t.specLabels.thickness, value: "0.1mm - 0.8mm Strip" },
      ],
      grades: ["Constant Force Scroll", "Helical Tension", "Cantilever Leaf"],
    },
  ];

  const activeProduct = productCategories.find((p) => p.id === activeTab) || productCategories[0];

  const handleEnquiryClick = (productName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      
      const messageInput = document.getElementById("message") as HTMLTextAreaElement | null;
      if (messageInput) {
        messageInput.value = lang === "hi" 
          ? `नमस्ते क्राउन कार्बन टीम,\n\nहमें ${productName} के लिए तकनीकी विनिर्देश और कोटेशन की आवश्यकता है।\n\n[कृपया मात्रा, आकार या सामग्री विवरण दर्ज करें]`
          : `Dear Crown Carbon Team,\n\nWe are looking for technical specifications and a quote for: ${productName}.\n\n[Please specify quantity, drawings, or material grade if known]`;
      }
      
      const categorySelect = document.getElementById("category") as HTMLSelectElement | null;
      if (categorySelect) {
        if (productName.toLowerCase().includes("holder") || productName.includes("होल्डर")) {
          categorySelect.value = "brush-holders";
        } else if (productName.toLowerCase().includes("brush") || productName.includes("ब्रश")) {
          categorySelect.value = "carbon-brushes";
        } else if (productName.toLowerCase().includes("ring") || productName.includes("रिंग")) {
          categorySelect.value = "slip-rings";
        } else if (productName.toLowerCase().includes("spring") || productName.includes("स्प्रिंग")) {
          categorySelect.value = "springs";
        }
      }
    }
  };

  return (
    <section id="products" className="py-20 bg-zinc-50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-200" />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <span className="text-[10px] font-bold text-industry-accent tracking-widest uppercase block">
            {t.kicker}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 uppercase">
            {t.title}
          </h2>
          <p className="text-zinc-500 max-w-2xl text-xs leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Tab Buttons for 4 Categories */}
        <div className="flex flex-wrap border-b border-zinc-200 mb-8 gap-1">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-3.5 text-[10px] font-bold uppercase tracking-wider transition-all border-b-2 -mb-px ${
                activeTab === cat.id
                  ? "border-industry-accent text-zinc-900 bg-white shadow-sm"
                  : "border-transparent text-zinc-500 hover:text-zinc-800"
              }`}
            >
              {cat.id === "carbon-brushes"
                ? t.tabBrushes
                : cat.id === "brush-holders"
                ? t.tabHolders
                : cat.id === "slip-rings"
                ? t.tabRings
                : t.tabSprings}
            </button>
          ))}
        </div>

        {/* Active Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white border border-zinc-200 p-6 md:p-8 shadow-sm animate-scale-in">
          
          {/* Left: Image & Concise specs sheet */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-56 md:h-64 w-full bg-zinc-100 border border-zinc-200 p-1.5 overflow-hidden">
              <div 
                className="absolute inset-2 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35 z-0" 
                aria-hidden="true" 
              />
              <div className="relative w-full h-full z-10 overflow-hidden">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Specifications Datasheet */}
            <div className="border border-zinc-200">
              <div className="bg-zinc-50 px-3.5 py-2 border-b border-zinc-200 flex items-center justify-between">
                <span className="text-[9px] font-bold text-zinc-700 uppercase tracking-widest flex items-center gap-1.5">
                  <FileSpreadsheet className="h-3 w-3 text-industry-accent" />
                  {t.specsTitle}
                </span>
                <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-wider">
                  {t.specsSub}
                </span>
              </div>
              <div className="divide-y divide-zinc-150">
                {activeProduct.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between px-3.5 py-2 text-[11px] leading-tight">
                    <span className="font-bold text-zinc-500 uppercase tracking-wider text-[9px]">{spec.label}</span>
                    <span className="font-bold text-zinc-950 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Copy & Bullet Lists */}
          <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-tight mb-1">
                  {activeProduct.title}
                </h3>
                <p className="text-[11px] font-bold text-industry-accent uppercase tracking-wider mb-3">
                  {activeProduct.subtitle}
                </p>
                <p className="text-zinc-650 text-xs leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              {/* Bullet Advantages */}
              <div className="space-y-1.5">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-800">
                  {t.advLabel}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                  {activeProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-zinc-600 leading-tight">
                      <CheckCircle className="h-3.5 w-3.5 text-green-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Varieties / Material Options */}
              <div className="space-y-1.5">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-800">
                  {t.gradesLabel}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProduct.grades.map((grade, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-zinc-100 border border-zinc-200 text-[9px] font-bold text-zinc-700 uppercase tracking-wider"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Enquiry Triggers */}
            <div className="pt-5 border-t border-zinc-200 flex flex-col sm:flex-row items-center gap-3">
              <Button
                onClick={() => handleEnquiryClick(activeProduct.title)}
                className="bg-industry-accent hover:bg-industry-accent/90 text-white rounded-none font-bold uppercase tracking-wider text-[10px] px-6 py-4.5 w-full sm:w-auto transition-all"
              >
                {t.enquiryBtn}
              </Button>
              
              <button 
                onClick={() => handleEnquiryClick(activeProduct.title)}
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 flex items-center gap-1 py-1.5"
              >
                {t.drawingBtn}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
