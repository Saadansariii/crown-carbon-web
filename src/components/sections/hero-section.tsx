"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Flame, ShieldAlert, Cpu } from "lucide-react";

const heroImages = [
  "/assets/carbon_image/carbonheader.jpeg",
  "/assets/carbon_image/carbon2.jpeg",
  "/assets/carbon_image/carbon3.jpeg",
];

const highlights = [
  { icon: Flame, text: "High Thermal Tolerance" },
  { icon: Cpu, text: "OEM-Calibrated Specs" },
  { icon: ShieldAlert, text: "Anti-Spark Tech" },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-zinc-950 overflow-hidden flex items-center">
      {/* Background Images with Ken Burns zoom effect */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-45 scale-105" : "opacity-0 scale-100"
            } transform duration-[6000ms]`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Industrial Manufacturing Facility ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Modern dark gradient vignette for readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
        
        {/* Technical Grid Overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_0%_0%,#000_70%,transparent_100%)] opacity-35 z-10 pointer-events-none" 
          aria-hidden="true" 
        />
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 max-w-7xl">
        <div className="max-w-3xl">
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/90 border border-zinc-800 rounded-none mb-6">
            <span className="w-2 h-2 rounded-full bg-industry-accent animate-pulse" />
            <span className="text-[10px] font-bold text-industry-silver uppercase tracking-widest">
              Established 2006 | Industrial Grade
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
            Precision Engineered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-250 to-industry-accent">
              Carbon Components
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 mb-4 font-normal leading-relaxed max-w-2xl">
            Crown Carbon Brush manufactures high-performance carbon brushes, brush holders, and slip rings tailored to withstand demanding industrial electrical loads.
          </p>

          <p className="text-md md:text-lg text-industry-silver italic mb-8 border-l-2 border-industry-accent pl-4 max-w-2xl font-light">
            "We care for your armatures, fulfilling the highest quality standards."
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              className="bg-industry-accent hover:bg-industry-accent/90 text-white rounded-none font-bold uppercase tracking-wider text-xs px-8 py-6 group transition-all"
            >
              <a href="#products">
                Our Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-zinc-700 bg-transparent text-white hover:bg-white/10 hover:border-zinc-500 rounded-none font-bold uppercase tracking-wider text-xs px-8 py-6 transition-all"
            >
              <a href="#contact">Contact Engineering</a>
            </Button>
          </div>

          {/* Highlights Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-800/80 max-w-xl">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="p-1.5 bg-zinc-900 border border-zinc-800 text-industry-accent rounded-none">
                  <item.icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2.5">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 h-1.5 ${
              index === currentSlide ? "w-8 bg-industry-accent" : "w-2.5 bg-zinc-750 hover:bg-zinc-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
