"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { translations } from "@/lib/translations";

interface FooterProps {
  lang: "en" | "hi";
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;
  const prod = translations[lang].products;

  return (
    <footer className="bg-industry-dark border-t border-zinc-800 text-white py-16">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-zinc-900 border border-zinc-800 rounded-none flex items-center justify-center">
                <Image 
                  src="/final_logo.png" 
                  alt="Crown Carbon logo" 
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain" 
                />
              </div>
              <div>
                <span className="text-md font-bold tracking-wider uppercase block">
                  CROWN
                </span>
                <span className="text-[9px] font-bold text-industry-accent tracking-widest block -mt-1">
                  CARBON BRUSH
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              {t.desc}
            </p>
            <p className="text-zinc-500 text-[11px] italic border-l border-industry-accent pl-3">
              "{t.tagline}"
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[11px] font-bold tracking-wider uppercase text-zinc-350 mb-6 border-b border-zinc-850 pb-2">
              {t.navTitle}
            </h3>
            <ul className="space-y-3 text-xs">
              {[
                { href: "#", label: nav.home },
                { href: "#about", label: nav.about },
                { href: "#products", label: nav.products },
                { href: "#industries", label: nav.industries },
                { href: "#infrastructure", label: nav.infrastructure },
                { href: "#contact", label: nav.contact },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-industry-accent transition-colors flex items-center gap-2 group font-semibold uppercase tracking-wider text-[10px]"
                  >
                    <span className="w-1 h-1 bg-zinc-800 group-hover:bg-industry-accent rounded-full transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-[11px] font-bold tracking-wider uppercase text-zinc-350 mb-6 border-b border-zinc-850 pb-2">
              {t.catTitle}
            </h3>
            <ul className="space-y-3 text-xs">
              {[
                { href: "#products", label: prod.tabBrushes },
                { href: "#products", label: prod.tabHolders },
                { href: "#products", label: prod.tabRings },
                { href: "#products", label: prod.tabSprings },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-industry-accent transition-colors flex items-center gap-2 group font-semibold uppercase tracking-wider text-[10px]"
                  >
                    <span className="w-1 h-1 bg-zinc-800 group-hover:bg-industry-accent rounded-full transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div>
            <h3 className="text-[11px] font-bold tracking-wider uppercase text-zinc-350 mb-6 border-b border-zinc-850 pb-2">
              {t.officeTitle}
            </h3>
            <ul className="space-y-4 text-xs font-semibold text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-industry-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[11px]">{t.officeVal}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-industry-accent shrink-0" />
                <div className="font-mono">
                  <p>+91 7400202234</p>
                  <p>+91 9224245981</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-industry-accent shrink-0" />
                <span className="font-mono">crowncarbonbrush@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="border-t border-zinc-850 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
          <p>
            &copy; {new Date().getFullYear()} Crown Carbon Brush.
          </p>
          
          {/* Made in India custom badge with technical gear-lion styling */}
          <div className="flex items-center gap-2.5 border border-zinc-800/80 px-4 py-2 bg-zinc-950/80">
            <svg 
              className="w-8 h-4 text-industry-accent shrink-0" 
              viewBox="0 0 32 16" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Gear wheel outer markings */}
              <circle cx="8" cy="8" r="4" strokeDasharray="1.5,1.5" />
              <circle cx="8" cy="8" r="2" />
              {/* Mechanical lion body line art */}
              <path d="M12 8h8M20 5v6M16 8l3-3M16 10l3 3M20 8h4M24 6v4" />
            </svg>
            <span className="text-[9px] font-black tracking-[0.2em] text-zinc-300">
              {t.madeInIndia}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
