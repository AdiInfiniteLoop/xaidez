"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  animation: "fade-up" | "fade-in" | "slide-left" | "slide-right"
  delay?: number
  threshold?: number
  className?: string
}

export default function ScrollAnimation({
  children,
  animation,
  delay = 0,
  threshold = 0.1,
  className = "",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, threshold])

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return "opacity-0 translate-y-10 transition-all duration-700 ease-out animate:opacity-100 animate:translate-y-0"
      case "fade-in":
        return "opacity-0 transition-opacity duration-700 ease-out animate:opacity-100"
      case "slide-left":
        return "opacity-0 -translate-x-10 transition-all duration-700 ease-out animate:opacity-100 animate:translate-x-0"
      case "slide-right":
        return "opacity-0 translate-x-10 transition-all duration-700 ease-out animate:opacity-100 animate:translate-x-0"
      default:
        return "opacity-0 transition-opacity duration-700 ease-out animate:opacity-100"
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
