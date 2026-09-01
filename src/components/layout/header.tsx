"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { translations } from "@/lib/translations";

interface HeaderProps {
  lang: "en" | "hi";
  setLang: (lang: "en" | "hi") => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const t = translations[lang].nav;

  const NAV = [ 
    { href: "#", label: t.home },
    { href: "#about", label: t.about },
    { href: "#products", label: t.products },
    { href: "#industries", label: t.industries },
    { href: "#infrastructure", label: t.infrastructure },
    { href: "#contact", label: t.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const item of NAV) {
        if (item.href === "#") continue;
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
      if (window.scrollY < 80) {
        setActiveSection("#");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lang]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-305 border-t-2 border-t-industry-accent border-b bg-zinc-950/95 backdrop-blur-md border-zinc-800 shadow-xl py-3.5">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 max-w-7xl">
        
        {/* Brand Logo & Name */}
        <Link href="#" className="flex items-center gap-3 focus-visible:outline-none group">
          <div className="relative h-9 w-9 md:h-10 md:w-10 flex items-center justify-center shrink-0">
            <Image
              src="/final_logo.svg"
              alt="Crown Carbon Logo"
              width={40}
              height={40}
              className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-black tracking-widest text-white uppercase group-hover:text-industry-accent transition-colors leading-none mb-0.5">
              CROWN
            </span>
            <span className="text-[8px] md:text-[9px] font-bold text-zinc-400 uppercase tracking-[0.25em] leading-none">
              CARBON BRUSH
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "relative text-[9.5px] font-bold uppercase tracking-[0.18em] transition-all py-1.5",
                activeSection === item.href
                  ? "text-industry-accent font-extrabold"
                  : "text-zinc-400 hover:text-white",
              ].join(" ")}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={[
                  "absolute inset-x-0 -bottom-0.5 h-0.5 bg-industry-accent origin-left transition-transform duration-300",
                  activeSection === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                ].join(" ")}
              />
            </Link>
          ))}
        </nav>

        {/* Action Panel & Language Switch */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Tactile language toggle */}
          <div className="flex items-center gap-1.5 border border-zinc-800 px-2 py-0.5 bg-zinc-900/60 font-mono text-[9px] font-bold">
            <Globe className="h-3 w-3 text-zinc-550" />
            <button
              onClick={() => setLang("en")}
              className={`transition-colors ${
                lang === "en" ? "text-industry-accent" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              EN
            </button>
            <span className="text-zinc-850">|</span>
            <button
              onClick={() => setLang("hi")}
              className={`transition-colors ${
                lang === "hi" ? "text-industry-accent" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              हिंदी
            </button>
          </div>

          <Button 
            asChild
            className="bg-transparent hover:bg-zinc-800 text-white border border-zinc-850 hover:border-zinc-500 rounded-none px-4 py-3.5 font-bold uppercase tracking-widest text-[9px] transition-all"
          >
            <Link href="#contact">{t.techQuote}</Link>
          </Button>
        </div>

        {/* Mobile toggles */}
        <div className="lg:hidden flex items-center gap-2.5">
          <div className="flex items-center gap-1 border border-zinc-850 px-1.5 py-0.5 bg-zinc-900 font-mono text-[8px] font-bold">
            <button
              onClick={() => setLang("en")}
              className={`${lang === "en" ? "text-industry-accent" : "text-zinc-500"}`}
            >
              EN
            </button>
            <span className="text-zinc-800">|</span>
            <button
              onClick={() => setLang("hi")}
              className={`${lang === "hi" ? "text-industry-accent" : "text-zinc-500"}`}
            >
              हिंदी
            </button>
          </div>

          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-none border border-zinc-850 bg-zinc-900 text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer with solid light-grey background & high contrast readable text */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute inset-x-0 top-full bg-zinc-100 border-b-2 border-industry-accent shadow-2xl z-50 py-6 px-6 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col gap-4">
            {/* Primary Nav Links */}
            <nav className="flex flex-col divide-y divide-zinc-250">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "py-3 text-xs font-extrabold uppercase tracking-widest transition-colors flex items-center justify-between",
                    activeSection === item.href ? "text-industry-accent" : "text-zinc-900 hover:text-industry-accent",
                  ].join(" ")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="text-zinc-400 text-xs font-mono">→</span>
                </Link>
              ))}
            </nav>

            {/* Direct Categories Quick Links */}
            <div className="pt-3 border-t border-zinc-300">
              <span className="text-[9.5px] font-black uppercase tracking-widest text-zinc-600 block mb-2.5">
                {translations[lang].footer.catTitle}
              </span>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="#products"
                  className="px-3 py-2.5 bg-white border border-zinc-300 text-[10px] font-extrabold text-zinc-900 hover:border-industry-accent hover:text-industry-accent uppercase transition-all text-center shadow-xs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {translations[lang].products.tabBrushes}
                </Link>
                <Link
                  href="#products"
                  className="px-3 py-2.5 bg-white border border-zinc-300 text-[10px] font-extrabold text-zinc-900 hover:border-industry-accent hover:text-industry-accent uppercase transition-all text-center shadow-xs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {translations[lang].products.tabHolders}
                </Link>
                <Link
                  href="#products"
                  className="px-3 py-2.5 bg-white border border-zinc-300 text-[10px] font-extrabold text-zinc-900 hover:border-industry-accent hover:text-industry-accent uppercase transition-all text-center shadow-xs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {translations[lang].products.tabRings}
                </Link>
                <Link
                  href="#products"
                  className="px-3 py-2.5 bg-white border border-zinc-300 text-[10px] font-extrabold text-zinc-900 hover:border-industry-accent hover:text-industry-accent uppercase transition-all text-center shadow-xs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {translations[lang].products.tabSprings}
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              asChild
              className="mt-2 bg-industry-accent hover:bg-industry-accent/90 text-white rounded-none w-full py-5 font-extrabold uppercase tracking-widest text-xs shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="#contact">{t.quote}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
