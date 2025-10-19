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
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const NAV = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Us" },
  { href: "#ongoing-work", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b border-border transition-all",
        "bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40",
        isScrolled ? "shadow-sm bg-background/80 supports-[backdrop-filter]:bg-background/60" : "",
      ].join(" ")}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6 gap-4">
        {/* Brand */}
        <Link
          href="#"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
        >
          <img src="logofinal1.svg" alt="Company logo" className="h-10 w-10 md:h-20 md:w-20 object-cover rounded-md" />
     
          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative group px-1 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" className="rounded-full">
            Request Quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/80 hover:bg-accent text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
          className="md:hidden border-t border-border bg-background/95 backdrop-blur animate-in fade-in slide-in-from-top-1"
        >
          <nav className="flex flex-col px-4 py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-foreground/90 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-2 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
              Request Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

