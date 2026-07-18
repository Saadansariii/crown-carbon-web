// "use client"

// import Link from "next/link"
// import { Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { useEffect, useState } from "react"

// const NAV = [
//   { href: "#about", label: "About" },
//   { href: "#products", label: "Products" },
//   { href: "#why-us", label: "Why Us" },
//   { href: "#ongoing-work", label: "Projects" },
//   { href: "#contact", label: "Contact" },
// ]

// export function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 8)
//     onScroll()
//     window.addEventListener("scroll", onScroll, { passive: true })
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

//   return (
//     <header
//       className={[
//         "sticky top-0 z-50 w-full border-b border-border transition-all",
//         "bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40",
//         isScrolled ? "shadow-sm bg-background/80 supports-[backdrop-filter]:bg-background/60" : "",
//       ].join(" ")}
//     >
//       <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6 gap-4">
//         {/* Brand */}
//         <Link
//           href="#"
//           className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
//         >
//           <img src="logofinal1.svg" alt="Company logo"
//           //  className="h-50 w-50 md:h-12 md:w-12 object-cover rounded-md"
//            className="h-12 w-12 md:h-20 md:w-20 object-cover rounded-md"
//             />
//           {/* <span className="hidden sm:inline text-base md:text-lg font-semibold tracking-tight text-foreground">
            
//           </span> */}
//           <span className="sr-only">Home</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           {NAV.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="relative group px-1 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
//             >
//               {item.label}
//               <span
//                 aria-hidden="true"
//                 className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
//               />
//             </Link>
//           ))}
//         </nav>

//         {/* CTA */}
//         <div className="hidden md:flex items-center gap-3">
//           <Button size="sm" className="rounded-full">
//             Request Quote
//           </Button>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/80 hover:bg-accent text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
//           onClick={() => setIsMobileMenuOpen((v) => !v)}
//           aria-label="Toggle mobile menu"
//           aria-expanded={isMobileMenuOpen}
//           aria-controls="mobile-menu"
//         >
//           {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div
//           id="mobile-menu"
//           className="md:hidden border-t border-border bg-background/95 backdrop-blur animate-in fade-in slide-in-from-top-1"
//         >
//           <nav className="flex flex-col px-4 py-3">
//             {NAV.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="py-2 text-sm font-medium text-foreground/90 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Button className="mt-2 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
//               Request Quote
//             </Button>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }

"use client"

import Link from "next/link"
import { Menu, X, Crown, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const NAV = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Industries" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Basic active section tracking
      const scrollPos = window.scrollY + 200
      for (const item of NAV) {
        if (item.href === "#") continue
        const el = document.getElementById(item.href.replace("#", ""))
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.href)
            break
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection("#")
      }
    }
    
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-industry-dark/90 backdrop-blur-md border-zinc-800 shadow-lg py-3"
          : "bg-transparent border-transparent py-5",
      ].join(" ")}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 max-w-7xl">
        {/* Brand/Logo */}
        <Link
          href="#"
          className="flex items-center gap-3 focus-visible:outline-none group"
        >
          <div className="relative flex items-center justify-center p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-industry-accent transition-colors">
            <img 
              src="logofinal1.svg" 
              alt="Crown Carbon logo" 
              className="h-9 w-9 object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-md font-bold tracking-wider text-white uppercase group-hover:text-industry-accent transition-colors">
              CROWN
            </span>
            <span className="text-[9px] font-semibold text-industry-silver uppercase tracking-widest -mt-1">
              CARBON BRUSH
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "relative text-[13px] font-semibold uppercase tracking-wider transition-colors py-2",
                activeSection === item.href
                  ? "text-industry-accent"
                  : "text-industry-silver hover:text-white",
              ].join(" ")}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={[
                  "absolute inset-x-0 -bottom-1 h-0.5 bg-industry-accent origin-left transition-transform duration-300",
                  activeSection === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                ].join(" ")}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            asChild
            className="bg-transparent hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500 rounded-none px-6 font-semibold uppercase tracking-wider text-xs transition-all"
          >
            <Link href="#contact">Request Tech Quote</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-industry-silver hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-industry-accent"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-[65px] border-b border-zinc-800 bg-industry-dark/95 backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col px-6 py-6 gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "py-2 text-sm font-semibold uppercase tracking-wider transition-colors",
                  activeSection === item.href ? "text-industry-accent" : "text-industry-silver hover:text-white",
                ].join(" ")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild
              className="mt-4 bg-industry-accent hover:bg-industry-accent/90 text-white rounded-none w-full py-5 font-bold uppercase tracking-wider text-xs"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="#contact">Request Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}


