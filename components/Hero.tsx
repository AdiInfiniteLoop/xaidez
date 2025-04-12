"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { heroSlides } from "@/data/herodata"


export default function HeroSection() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const heroSliderRef = useRef<HTMLDivElement>(null)


 
  const handleHeroDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isAnimating) return
    setIsDragging(true)
    if ("touches" in e) {
      setStartX(e.touches[0].clientX)
    } else {
      setStartX(e.clientX)
    }
  }

  const handleHeroDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || isAnimating) return

    let currentX = 0
    if ("touches" in e) {
      currentX = e.touches[0].clientX
    } else {
      currentX = e.clientX
    }

    const diff = startX - currentX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeHeroIndex < heroSlides.length - 1) {
        changeSlide(activeHeroIndex + 1)
      } else if (diff < 0 && activeHeroIndex > 0) {
        changeSlide(activeHeroIndex - 1)
      }
      setIsDragging(false)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }


  const changeSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveHeroIndex(index);
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating]);
  
  const nextHeroSlide = useCallback(() => {
    if (isAnimating) return;
    const nextIndex = activeHeroIndex === heroSlides.length - 1 ? 0 : activeHeroIndex + 1;
    changeSlide(nextIndex);
  }, [activeHeroIndex, isAnimating, changeSlide]);
  


  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && !isAnimating) {
        nextHeroSlide()
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [isDragging, isAnimating, activeHeroIndex, nextHeroSlide])

  return (
    <div className="p-5 w-[10/11]">
      {/* Hero Slider */}
      <div
        ref={heroSliderRef}
        className="relative w-full overflow-hidden rounded-xl"
        onMouseDown={handleHeroDragStart}
        onMouseMove={handleHeroDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleHeroDragStart}
        onTouchMove={handleHeroDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-800 ease-in-out ${
                activeHeroIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className={`object-cover transition-transform duration-10000 ease-out ${
                    activeHeroIndex === index ? "scale-105" : "scale-100"
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content with Fade-in Effect */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 md:px-6">
                  <div
                    className={`max-w-lg text-white transition-all duration-800 ease-out ${
                      activeHeroIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  >
                    <h3 className="text-lg md:text-xl font-medium mb-2">{slide.title}</h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.subtitle}</h2>
                    <p className="text-sm md:text-base mb-6 max-w-md">{slide.description}</p>
                    <Link
                      href={slide.link}
                      className="inline-block px-6 py-3 bg-xaidez-accent  hover:bg-xaidez-hoveraccent  text-white font-medium rounded-md transition-colors duration-300"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>


      </div>

    </div>
  )
}
