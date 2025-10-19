// "use client"

// import Image from "next/image"
// import { useEffect, useRef } from "react"
// import { Button } from "@/components/ui/button"

// // GSAP imports (auto-inferred dependency)
// import gsap from "gsap"........
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// // const heroImages = [
// //   "/assets/carbon_image/carbonheader.jpg",
// //   "/assets/carbon_image/carbon2.jpg",
// //   "/assets/carbon_image/carbon3.jpg",
// // ]

// const heroImages = [
//   "/assets/carbon_image/carbonheader.jpg",
//   "/assets/carbon_image/carbon2.jpg",
//   "/assets/carbon_image/carbon3.jpg",
// ]


// export function HeroSection() {
//   const rootRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     if (!rootRef.current) return

//     // Respect reduced motion
//     const reduce =
//       typeof window !== "undefined" &&
//       window.matchMedia &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches
//     const ctx = gsap.context(() => {
//       if (reduce) return

//       const images = gsap.utils.toArray<HTMLDivElement>("[data-hero-image]")
//       const content = rootRef.current!.querySelector<HTMLElement>("[data-hero-content]")

//       // Initial states
//       gsap.set(images, { opacity: 0, scale: 1.05 })
//       gsap.set(images[0], { opacity: 1, scale: 1 })

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: rootRef.current,
//           start: "top top",
//           end: "+=200%",
//           scrub: 0.6,
//           pin: true,
//           anticipatePin: 1,
//         },
//         defaults: { ease: "power2.out" },
//       })

//       // Parallax the content slightly
//       if (content) {
//         tl.fromTo(content, { yPercent: 10, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6 }, 0)
//       }

//       // Crossfade + subtle scale transitions between images
//       images.forEach((panel, i) => {
//         if (i === 0) return
//         tl.to(images[i - 1], { opacity: 0, scale: 1.05, duration: 0.8 }, i * 0.8 + 0.1)
//         tl.to(panel, { opacity: 1, scale: 1, duration: 0.9 }, i * 0.8 + 0.1)
//       })

//       // Slight move to give depth across the whole scroll
//       images.forEach((panel, i) => {
//         tl.to(panel, { yPercent: -6 }, i * 0.8 + 0.2)
//       })

//       // Fade content at the end to reveal next section
//       if (content) {
//         tl.to(content, { opacity: 0.85, yPercent: -6, duration: 0.5 }, "+=0.2")
//       }
//     }, rootRef)

//     return () => {
//       ctx.revert()
//       // Also kill any stray triggers
//       ScrollTrigger.getAll().forEach((st) => st.kill())
//     }
//   }, [])

//   return (
//     <section ref={rootRef} className="relative h-[150vh]">
//       {/* Sticky viewport for the animation */}
//       <div className="sticky top-0 h-[100svh] overflow-hidden">
//         {/* Stacked images */}
//         <div className="absolute inset-0">
//           {heroImages.map((src, index) => (
//             <div key={index} data-hero-image className="absolute inset-0">
//               <Image
//                 src={src || "/placeholder.svg?height=800&width=1440&query=industrial%20manufacturing%20facility"}
//                 alt={`Manufacturing facility ${index + 1}`}
//                 fill
//                 className="object-cover"
//                 priority={index === 0}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Foreground overlay using tokens (avoid raw black) */}
//         <div className="absolute inset-0 bg-foreground/30" aria-hidden="true" />

//         {/* Center content */}
//         <div data-hero-content className="relative z-10 h-full flex items-center justify-center">
//           <div className="container px-4 md:px-6 text-center text-primary-foreground">
//             <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">Crown Carbon Brush</h1>
//             <p className="mt-4 text-lg md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed text-pretty">
//               Premium carbon brush solutions for industrial applications
//             </p>
//             <p className="mt-3 text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto italic">
//               {"We care for your armatures, fulfilling the highest quality standards"}
//             </p>

//             <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Button className="rounded-full px-8 py-6 text-base">Our Solutions</Button>
//               <Button
//                 variant="outline"
//                 className="rounded-full px-8 py-6 text-base border-border bg-card/40 hover:bg-card/60"
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Progress dots (optional, non-interactive in scroll mode) */}
//         <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
//           {heroImages.map((_, i) => (
//             <span key={i} className="w-2.5 h-2.5 rounded-full bg-primary/40" aria-hidden="true" />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import Image from "next/image"
// import { useEffect, useRef } from "react"
// import { Button } from "@/components/ui/button"

// // GSAP imports (auto-inferred dependency)
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// const heroImages = [
//   "/assets/carbon_image/carbonheader.jpg",
//   "/assets/carbon_image/carbon2.jpg",
//   "/assets/carbon_image/carbon3.jpg",
// ]

// export function HeroSection() {
//   const rootRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     if (!rootRef.current) return

//     // Respect reduced motion
//     const reduce =
//       typeof window !== "undefined" &&
//       window.matchMedia &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches
//     const ctx = gsap.context(() => {
//       if (reduce) return

//       const images = gsap.utils.toArray<HTMLDivElement>("[data-hero-image]")
//       const content = rootRef.current!.querySelector<HTMLElement>("[data-hero-content]")

//       // Initial states
//       gsap.set(images, { opacity: 0, scale: 1.05 })
//       gsap.set(images[0], { opacity: 1, scale: 1 })

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: rootRef.current,
//           start: "top top",
//           end: "+=200%",
//           scrub: 0.6,
//           pin: true,
//           anticipatePin: 1,
//         },
//         defaults: { ease: "power2.out" },
//       })

//       // Parallax the content slightly
//       if (content) {
//         tl.fromTo(content, { yPercent: 10, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6 }, 0)
//       }

//       // Crossfade + subtle scale transitions between images
//       images.forEach((panel, i) => {
//         if (i === 0) return
//         tl.to(images[i - 1], { opacity: 0, scale: 1.05, duration: 0.8 }, i * 0.8 + 0.1)
//         tl.to(panel, { opacity: 1, scale: 1, duration: 0.9 }, i * 0.8 + 0.1)
//       })

//       // Slight move to give depth across the whole scroll
//       images.forEach((panel, i) => {
//         tl.to(panel, { yPercent: -6 }, i * 0.8 + 0.2)
//       })

//       // Fade content at the end to reveal next section
//       if (content) {
//         tl.to(content, { opacity: 0.85, yPercent: -6, duration: 0.5 }, "+=0.2")
//       }
//     }, rootRef)

//     return () => {
//       ctx.revert()
//       // Also kill any stray triggers
//       ScrollTrigger.getAll().forEach((st) => st.kill())
//     }
//   }, [])

//   return (
//     <section ref={rootRef} className="relative h-[150vh]">
//       {/* Sticky viewport for the animation */}
//       <div className="sticky top-0 h-[100svh] overflow-hidden">
//         {/* Stacked images */}
//         <div className="absolute inset-0">
//           {heroImages.map((src, index) => (
//             <div key={index} data-hero-image className="absolute inset-0">
//               <Image
//                 src={src || "/placeholder.svg?height=800&width=1440&query=industrial%20manufacturing%20facility"}
//                 alt={`Manufacturing facility ${index + 1}`}
//                 fill
//                 className="object-cover"
//                 priority={index === 0}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Foreground overlay using tokens (avoid raw black) */}
//         <div className="absolute inset-0 bg-foreground/30" aria-hidden="true" />

//         {/* Center content */}
//         <div data-hero-content className="relative z-10 h-full flex items-center justify-center">
//           <div className="container px-4 md:px-6 text-center text-primary-foreground">
//             <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">Crown Carbon Brush</h1>
//             <p className="mt-4 text-lg md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed text-pretty">
//               Premium carbon brush solutions for industrial applications
//             </p>
//             <p className="mt-3 text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto italic">
//               {"We care for your armatures, fulfilling the highest quality standards"}
//             </p>

//             <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Button className="rounded-full px-8 py-6 text-base">Our Solutions</Button>
//               <Button
//                 variant="outline"
//                 className="rounded-full px-8 py-6 text-base border-border bg-card/40 hover:bg-card/60"
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Progress dots (optional, non-interactive in scroll mode) */}
//         <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
//           {heroImages.map((_, i) => (
//             <span key={i} className="w-2.5 h-2.5 rounded-full bg-primary/40" aria-hidden="true" />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import Image from "next/image";
import { Crown } from "lucide-react";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button"

import { Button } from "../ui/button";

// const heroImages = [

// ]

const heroImages: any = [
  "/assets/carbon_image/carbonheader.jpeg",
  "/assets/carbon_image/carbon2.jpeg",
  "/assets/carbon_image/carbon3.jpeg",
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      {/* this is the ocmment */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative h-[600px] overflow-hidden">
        {heroImages.length > 0 &&
          heroImages.map((image: any, index: any) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Manufacturing facility ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
      </div>
      <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
      
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Crown Carbon Brush
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-2xl">
          Premium carbon brush solutions for industrial applications
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl italic">
          "We care for your armatures, fulfilling the highest quality standards"
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
            Our Solutions
          </Button>
          <Button
            variant="outline"
            className="border-white bg-slate-600 text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {heroImages.length > 0 &&
          heroImages.map((_: any, index: any) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-blue-500" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
      </div>
    </section>
  );
}
