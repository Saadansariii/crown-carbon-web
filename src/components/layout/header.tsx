"use client";

import Link from "next/link";
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
        
        {/* Brand Logo Grid */}
        <Link href="#" className="flex items-center gap-2.5 focus-visible:outline-none group">
          <div className="relative flex items-center justify-center p-2 rounded-none bg-zinc-900 border border-zinc-800 group-hover:border-industry-accent transition-all duration-300">
            <img 
              src="logofinal1.svg" 
              alt="Crown Carbon logo" 
              className="h-8 w-8 object-contain transition-transform group-hover:rotate-6" 
            />
            {/* Design dot */}
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-industry-accent border border-zinc-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-widest text-white uppercase group-hover:text-industry-accent transition-colors leading-none mb-0.5">
              CROWN
            </span>
            <span className="text-[7.5px] font-bold text-zinc-500 uppercase tracking-[0.22em] leading-none">
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

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-[70px] border-b border-zinc-850 bg-zinc-950/98 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <nav className="flex flex-col px-6 py-6 gap-3.5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "py-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors",
                  activeSection === item.href ? "text-industry-accent" : "text-zinc-400 hover:text-white",
                ].join(" ")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild
              className="mt-2 bg-industry-accent hover:bg-industry-accent/90 text-white rounded-none w-full py-4.5 font-bold uppercase tracking-widest text-[9px]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="#contact">{t.quote}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
