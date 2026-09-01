"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Flame, ShieldAlert, Cpu } from "lucide-react";
import { translations } from "@/lib/translations";

interface HeroSectionProps {
  lang: "en" | "hi";
}

const heroImages = [
  "/assets/carbon_image/carbonheader.jpeg",
  "/assets/carbon_image/carbon2.jpeg",
  "/assets/carbon_image/carbon3.jpeg",
];

export function HeroSection({ lang }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const t = translations[lang].hero;

  const highlights = [
    { icon: Flame, text: t.h1 },
    { icon: Cpu, text: t.h2 },
    { icon: ShieldAlert, text: t.h3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[75vh] min-h-[500px] w-full bg-zinc-950 overflow-hidden flex items-center">
      {/* Background Images with Ken Burns zoom effect */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-35 scale-105" : "opacity-0 scale-100"
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
        {/* Modern dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
        
        {/* Technical Grid Overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_0%_0%,#000_70%,transparent_100%)] opacity-25 z-10 pointer-events-none" 
          aria-hidden="true" 
        />
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 max-w-7xl">
        <div className="max-w-2xl">
          {/* Engineering Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/90 border border-zinc-800 rounded-none mb-6">
            <span className="w-2 h-2 rounded-full bg-industry-accent animate-pulse" />
            <span className="text-[9px] font-bold text-industry-silver uppercase tracking-widest">
              {t.badge}
            </span>
          </div> */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 uppercase">
            {t.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-250 to-industry-accent">
              {t.subtitle}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 mb-4 font-normal leading-relaxed max-w-xl">
            {t.desc}
          </p>

          <p className="text-xs sm:text-sm text-industry-silver italic mb-8 border-l-2 border-industry-accent pl-4 max-w-xl font-light">
            "{t.tagline}"
          </p>

          {/* Call to Actions - Single OTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              asChild
              className="bg-industry-accent hover:bg-industry-accent/90 text-white rounded-none font-bold uppercase tracking-widest text-[11px] px-8 py-6 group transition-all shadow-lg"
            >
              <a href="#contact">
                {t.ctaQuote}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Highlights Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5 border-t border-zinc-800/80 max-w-xl">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="p-1 bg-zinc-900 border border-zinc-800 text-industry-accent rounded-none">
                  <item.icon className="h-3.5 w-3.5" />
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-6 right-8 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 h-1 ${
              index === currentSlide ? "w-6 bg-industry-accent" : "w-2 bg-zinc-700 hover:bg-zinc-650"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
