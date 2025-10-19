"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Slide = {
  src: string
  title: string
  subtitle: string
  body: string
}

const slides: Slide[] = [
  {
    src: "/assets/carbon_image/carbonheader.jpg",
    title: "Crown Carbon Brush",
    subtitle: "Premium Carbon Solutions",
    body: "Industrial-grade carbon brushes engineered for performance and longevity.",
  },
  {
    src: "/assets/carbon_image/carbon2.jpg",
    title: "Precision Manufacturing",
    subtitle: "Built For Demanding Loads",
    body: "Consistent conductivity, reduced wear, and stable operation across cycles.",
  },
  {
    src: "/assets/carbon_image/carbon3.jpg",
    title: "Tailored To Your Needs",
    subtitle: "Custom Applications",
    body: "From mining to generators, we deliver precisely matched grades and forms.",
  },
]

export function HeroHorizontal() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const leftRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const detailRef = useRef<HTMLDivElement | null>(null)
  const currentIndexRef = useRef<number>(0)

  useEffect(() => {
    if (!rootRef.current || !leftRef.current || !trackRef.current || !detailRef.current) return

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = gsap.context(() => {
      const leftEl = leftRef.current!
      const track = trackRef.current!
      const details = Array.from(detailRef.current!.querySelectorAll<HTMLElement>("[data-detail-panel]"))

      // initial states
      gsap.set(details, { autoAlpha: 0, yPercent: 8 })
      if (details[0]) gsap.set(details[0], { autoAlpha: 1, yPercent: 0 })

      const calcDistance = () => Math.max(0, track.scrollWidth - leftEl.clientWidth)

      if (!reduce) {
        const st = ScrollTrigger.create({
          trigger: rootRef.current!,
          start: "top top",
          end: () => `+=${calcDistance()}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (slides.length - 1))
            if (idx !== currentIndexRef.current) {
              const prev = currentIndexRef.current
              currentIndexRef.current = idx
              const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.45 } })
              if (details[prev]) tl.to(details[prev], { autoAlpha: 0, yPercent: -6 }, 0)
              if (details[idx]) tl.to(details[idx], { autoAlpha: 1, yPercent: 0 }, 0.05)
            }
          },
        })

        gsap.to(track, {
          x: () => -calcDistance(),
          ease: "none",
          scrollTrigger: st,
        })

        const onResize = () => st.refresh()
        window.addEventListener("resize", onResize)
        return () => {
          window.removeEventListener("resize", onResize)
          st.kill()
        }
      }
    }, rootRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((s) => s.kill())
    }
  }, [])

  return (
    <section ref={rootRef} className="relative bg-background">
      <div className="sticky top-0 h-[100svh]">
        <div className="h-full grid grid-cols-1 md:grid-cols-12">
          {/* LEFT: Horizontal image track */}
          <div ref={leftRef} className="relative md:col-span-7 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-foreground/15" aria-hidden="true" />
            <div ref={trackRef} className="h-full flex" style={{ width: `calc(60vw * ${slides.length})` }}>
              {slides.map((s, i) => (
                <div key={i} className="relative h-full w-[100vw] md:w-[60vw] shrink-0">
                  <Image
                    src={s.src || "/placeholder.svg?height=900&width=1600&query=industrial%20manufacturing%20hero"}
                    alt={`${s.title} image ${i + 1}`}
                    fill
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Detail panels */}
          <div className="relative md:col-span-5 bg-background/80 border-l border-border">
            <div className="absolute inset-0 overflow-hidden">
              <div ref={detailRef} className="relative h-full">
                {slides.map((s, i) => (
                  <article
                    key={i}
                    data-detail-panel
                    className="absolute inset-0 px-6 md:px-10 py-10 md:py-16 flex flex-col justify-center"
                  >
                    <div className="max-w-md">
                      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance text-foreground">
                        {s.title}
                      </h2>
                      <p className="mt-3 text-lg md:text-xl text-muted-foreground">{s.subtitle}</p>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground/90">{s.body}</p>
                      <div className="mt-8 h-px w-24 bg-border" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
