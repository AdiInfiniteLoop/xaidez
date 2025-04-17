'use client'

import type React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import HotButton from "./HotButton1";

interface Slide {
  title: string;
  subtitle: string;
  image: string;
  action_title: string;
  action_link: string;
}

interface HeroSectionProps {
  slides: Slide[];
}

export default function HeroSection({ slides }: HeroSectionProps) {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroSliderRef = useRef<HTMLDivElement>(null);

  const handleHeroDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    setStartX("touches" in e ? e.touches[0].clientX : e.clientX);
  };

  const handleHeroDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || isAnimating) return;
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeHeroIndex < slides.length - 1) {
        changeSlide(activeHeroIndex + 1);
      } else if (diff < 0 && activeHeroIndex > 0) {
        changeSlide(activeHeroIndex - 1);
      }
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const changeSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveHeroIndex(index);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const nextHeroSlide = useCallback(() => {
    if (isAnimating) return;
    const nextIndex = activeHeroIndex === slides.length - 1 ? 0 : activeHeroIndex + 1;
    changeSlide(nextIndex);
  }, [isAnimating, activeHeroIndex, slides.length, changeSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && !isAnimating) nextHeroSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isDragging, isAnimating, activeHeroIndex, nextHeroSlide]);

  if (!slides || slides.length === 0) {
    return (
      <div className="h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gradient-to-b from-amber-50 to-white text-gray-500 rounded-xl">
        <p>Oops! Something happened.</p>
      </div>
    );
  }

  return (
    <div className="p-5 bg-amber-50  w-[10/11] mx-auto ">
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
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-800 ease-in-out ${
                activeHeroIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image || "/pomogrenate.webp"}
                  alt={slide.title}
                  fill
                  className={`object-cover transition-transform duration-10000 ease-out ${
                    activeHeroIndex === index ? "scale-105" : "scale-100"
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 md:px-6">
                <div
                className={`max-w-xl text-white transition-all duration-800 ease-out ${
                  activeHeroIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-base md:text-lg italic font-semibold tracking-wide text-amber-200 drop-shadow mb-2">
                  {slide.title}
                </h3>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md mb-6">
                  {slide.subtitle}
                </h2>
                <HotButton
                  href={slide.action_link || "/products"}
                  text={slide.action_title || "Shop Now"}
                />
              </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
