"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Download, CheckCircle, ArrowUpRight, HelpCircle, FileSpreadsheet } from "lucide-react";

interface SpecItem {
  label: string;
  value: string;
}

interface ProductInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  specs: SpecItem[];
  applications: string[];
  grades?: string[];
}

const productCategories: ProductInfo[] = [
  {
    id: "carbon-brushes",
    title: "Industrial Carbon Brushes",
    subtitle: "High-grade carbon contacts optimized for commmutation and conductivity",
    description: "Engineered to deliver optimal electrical contact, low friction, and extended commutator wear life. We produce custom-cut carbon brushes from audited grades of electrographitic, copper-graphitic, and silver-graphitic raw materials.",
    image: "/assets/carbon_image/product-1.jpeg",
    features: [
      "Low wear rate under extreme mechanical and thermal vibration",
      "Consistent current transfer with low electromagnetic interference",
      "Pre-bevelling and custom groove profiling options",
      "High-conductivity copper shunts with special insulation sleeves",
    ],
    specs: [
      { label: "Material Grades", value: "Electrographite (EG), Metal-Graphite (MC), Silver-Graphite (SG)" },
      { label: "Current Density", value: "8 to 30 A/cm² (depending on alloy grade)" },
      { label: "Linear Speed Limit", value: "Up to 85 m/s" },
      { label: "Electrical Resistivity", value: "10 - 75 µΩ·m" },
      { label: "Typical Friction Coeff.", value: "0.10 - 0.18" },
    ],
    applications: ["Steel Rolling Mills", "Cement Kilns & Crushers", "Power Gen Turbines", "Railway Traction Motors", "Paper/Printing Machinery", "Mining Excavators"],
    grades: ["EG236 / EG251", "MC79 / MC88", "SG30 / SG50", "BG412 (Resin-Bonded)"],
  },
  {
    id: "brush-holders",
    title: "Heavy-Duty Brush Holders",
    subtitle: "Precision spring-loaded assemblies ensuring constant contact pressure",
    description: "Designed to hold brushes in correct alignment while ensuring stable physical contact with commutators. Our holders feature corrosion-resistant bronze/brass castings and constant-force spring cartridges to prevent brush bounce.",
    image: "/assets/carbon_image/product-2.jpeg",
    features: [
      "Corrosion-resistant cast brass / bronze alloys",
      "Constant-force spring coils for uniform pressure during wear lifecycle",
      "Double-pocket and multi-compartment assemblies",
      "High insulation ratings with fiber-reinforced composites",
    ],
    specs: [
      { label: "Pocket Tolerance", value: "Within +0.02mm to +0.08mm (DIN standards)" },
      { label: "Spring Tension Range", value: "1.8 N to 3.8 N (adjustable calibration)" },
      { label: "Primary Material", value: "Leaded Bronze / High-Tensile Cast Brass" },
      { label: "Spring Material", value: "Stainless Steel (SUS301 / Sandvik)" },
      { label: "Insulation Level", value: "Class H / Up to 1000V AC/DC" },
    ],
    applications: ["AC/DC Industrial Motors", "Port Container Cranes", "Wind Turbine Generators", "Metro & Railway Engines", "Heavy Construction Winches"],
    grades: ["Single Pocket Box", "Tandem Spring Pocket", "Constant Pressure Type", "Custom Cast Type"],
  },
  {
    id: "slip-rings",
    title: "Precision Slip Rings",
    subtitle: "Continuous electrical power and signal transfer across rotating hubs",
    description: "Molded or machined rotary joints enabling seamless transfer of current, data signals, or fields from stationary cables to rotating structures. Built with high mechanical strength to resist radial deformation.",
    image: "/assets/carbon_image/product-3.jpeg",
    features: [
      "Machined copper alloys or phosphor bronze slip tracks",
      "High-pressure molded insulation cores (epoxy/phenolic)",
      "Split or solid ring layouts for easy installation and maintenance",
      "Hybrid configurations combining power feeds and digital control signals",
    ],
    specs: [
      { label: "Voltage Rating", value: "24V DC up to 11,000V AC (11kV)" },
      { label: "Circuit Counts", value: "2 to 48 separate tracks / poles" },
      { label: "Ring Surface Finish", value: "Polished Mirror Ra < 0.4 µm" },
      { label: "Dielectric Strength", value: "2.5 kV at 50Hz / 1 min" },
      { label: "Insulation Resistance", value: "> 500 MΩ at 1000V DC" },
    ],
    applications: ["Packaging Machinery", "Hose / Cable Reels", "Excavator Cabins", "Alternators & Slip Ring Motors", "Marine Winch Systems"],
    grades: ["Molded Assemblies", "Machined Shaft Assembly", "Split Ring Configuration", "Gold/Silver Contact Signals"],
  },
];

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState<string>("carbon-brushes");

  const activeProduct = productCategories.find((p) => p.id === activeTab) || productCategories[0];

  const handleEnquiryClick = (productName: string) => {
    // Smooth scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      
      // Auto-fill requirements text box in contact form if present
      const messageInput = document.getElementById("message") as HTMLTextAreaElement | null;
      if (messageInput) {
        messageInput.value = `Dear Crown Carbon Team,\n\nWe are looking for technical specifications and a commercial quote for: ${productName}.\n\n[Please specify quantity, drawings, or material grade if known]`;
      }
      
      // Optionally preselect category dropdown if available
      const categorySelect = document.getElementById("category") as HTMLSelectElement | null;
      if (categorySelect) {
        if (productName.includes("Brush")) {
          categorySelect.value = "brushes";
        } else if (productName.includes("Holder")) {
          categorySelect.value = "holders";
        } else if (productName.includes("Ring")) {
          categorySelect.value = "rings";
        }
      }
    }
  };

  return (
    <section id="products" className="py-24 bg-zinc-50 relative">
      {/* Decorative ruler line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-200" />
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-industry-accent tracking-widest uppercase block">
              02 / Product Catalogue
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 uppercase">
              Precision Engineered Components
            </h2>
            <p className="text-zinc-500 max-w-xl text-sm leading-relaxed">
              Explore our core product lines. Every component is engineered to fit precise dimensions and operate under specific mechanical tolerances.
            </p>
          </div>
          
          <div className="shrink-0">
            <Button className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-none flex items-center gap-2 px-6 py-5 font-bold uppercase tracking-wider text-xs">
              <Download className="h-4 w-4" />
              Download Full Catalog
            </Button>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap border-b border-zinc-200 mb-12">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all border-b-2 -mb-px ${
                activeTab === cat.id
                  ? "border-industry-accent text-zinc-900 bg-white shadow-sm"
                  : "border-transparent text-zinc-500 hover:text-zinc-800"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Product Detailed View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-zinc-200 p-6 md:p-10 shadow-sm animate-scale-in">
          {/* Product Left: Image and specs sheet */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative h-64 md:h-80 w-full bg-zinc-100 border border-zinc-200 p-2 overflow-hidden">
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

            {/* Specifications Sheet Component */}
            <div className="border border-zinc-200">
              <div className="bg-zinc-50 px-4 py-3 border-b border-zinc-200 flex items-center justify-between">
                <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest flex items-center gap-1.5">
                  <FileSpreadsheet className="h-3.5 w-3.5 text-industry-accent" />
                  Technical Datasheet
                </span>
                <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-wider">
                  DIN Standards
                </span>
              </div>
              <div className="divide-y divide-zinc-150">
                {activeProduct.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between px-4 py-2.5 text-xs">
                    <span className="font-semibold text-zinc-500 uppercase tracking-wider text-[10px]">{spec.label}</span>
                    <span className="font-bold text-zinc-900 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Right: Description, features, applications */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 uppercase tracking-tight mb-2">
                  {activeProduct.title}
                </h3>
                <p className="text-sm font-semibold text-industry-accent uppercase tracking-wider mb-4">
                  {activeProduct.subtitle}
                </p>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                  Engineering Advantages
                </h4>
                <ul className="space-y-2">
                  {activeProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-650">
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material Grades or Special Highlights */}
              {activeProduct.grades && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                    Common Alloy / Carbon Grades Available
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProduct.grades.map((grade, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-zinc-100 border border-zinc-200 text-[10px] font-bold text-zinc-700 uppercase tracking-wider"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications Area */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                  Operational Environments
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProduct.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA for Enquiry */}
            <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center gap-4">
              <Button
                onClick={() => handleEnquiryClick(activeProduct.title)}
                className="bg-industry-accent hover:bg-industry-accent/90 text-white rounded-none font-bold uppercase tracking-wider text-xs px-8 py-5 w-full sm:w-auto"
              >
                Send Specifications Inquiry
              </Button>
              
              <button 
                onClick={() => handleEnquiryClick(activeProduct.title)}
                className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 flex items-center gap-1 py-2"
              >
                Request Dimensional Drawing
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
