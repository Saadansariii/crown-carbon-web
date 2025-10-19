"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function RevealInit() {
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduce) return

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    els.forEach((el) => {
      gsap.set(el, { autoAlpha: 0, y: 24 })
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", overwrite: true })
        },
        onLeaveBack: () => {
          gsap.to(el, { autoAlpha: 0, y: 24, duration: 0.4, ease: "power1.out", overwrite: true })
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}
