"use client";
import Link from "next/link";
import { Crown, Mail, Phone, MapPin, ShieldCheck, Factory } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-industry-dark border-t border-zinc-800 text-white py-16">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-md">
                <img 
                  src="logofinal1.svg" 
                  alt="Crown Carbon logo" 
                  className="h-8 w-8 object-contain" 
                />
              </div>
              <div>
                <span className="text-lg font-bold tracking-wider uppercase block">
                  CROWN
                </span>
                <span className="text-[10px] font-semibold text-industry-accent tracking-widest block -mt-1">
                  CARBON BRUSH
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Precision engineering and manufacturing of heavy-duty carbon brushes, holders, and slip rings. Serving original equipment manufacturers across India since 2006.
            </p>
            <p className="text-zinc-500 text-xs italic border-l-2 border-industry-accent pl-3">
              "We care for your armatures, fulfilling the highest quality standards"
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#products", label: "Products" },
                { href: "#industries", label: "Industries Served" },
                { href: "#infrastructure", label: "Infrastructure" },
                { href: "#contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-industry-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-industry-accent rounded-full transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products & Capabilities */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
              Product Categories
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#products", label: "Carbon Brushes" },
                { href: "#products", label: "Brush Holders" },
                { href: "#products", label: "Slip Rings" },
                { href: "#infrastructure", label: "Custom Machining" },
                { href: "#infrastructure", label: "Material Grades Selection" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-industry-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-industry-accent rounded-full transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
              Corporate Office
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-industry-accent shrink-0 mt-0.5" />
                <span className="text-zinc-400 leading-relaxed">
                  Malad West, Mumbai, 400095, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-industry-accent shrink-0" />
                <div className="text-zinc-400">
                  <p>+91 7400202234</p>
                  <p>+91 9224245981</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-industry-accent shrink-0" />
                <span className="text-zinc-400">crowncarbonbrush@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-zinc-850 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Crown Carbon Brush. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-green-500" /> ISO Compliant Materials
            </span>
            <span className="flex items-center gap-1">
              <Factory className="h-4 w-4 text-zinc-400" /> Indian Manufacturing Excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

