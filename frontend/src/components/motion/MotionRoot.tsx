"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function MotionRoot() {
	const pathname = usePathname()
	const search = useSearchParams()
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
		const animations: Animation[] = []
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue
				const element = entry.target as HTMLElement
				const type = element.dataset.motion
				const from = type === "image" ? "scale(1.045)" : type === "side" ? "translateX(28px)" : "translateY(26px)"
				animations.push(element.animate([{ opacity: 0, transform: from }, { opacity: 1, transform: "none" }], {
					duration: type === "image" ? 1100 : 760,
					delay: Number(element.dataset.delay ?? 0), easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards",
				}))
				observer.unobserve(element)
			}
		}, { threshold: 0.1 })
		document.querySelectorAll("[data-motion]").forEach((element) => observer.observe(element))
		return () => { observer.disconnect(); animations.forEach((animation) => animation.cancel()) }
	}, [pathname, search])
	return null
}
