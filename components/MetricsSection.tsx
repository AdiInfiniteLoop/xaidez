"use client"

import { useEffect, useRef, useState } from "react"
import { Package, Users, Truck, Store } from "lucide-react"

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const metrics = [
    {
      finalNumber: 10000,
      displayNumber: "10,000+",
      title: "Products",
      icon: <Package className="h-10 w-10" />,
    },
    {
      finalNumber: 50000,
      displayNumber: "50,000+",
      title: "Happy Customers",
      icon: <Users className="h-10 w-10" />,
    },
    {
      finalNumber: 100000,
      displayNumber: "100,000+",
      title: "Orders Delivered",
      icon: <Truck className="h-10 w-10" />,
    },
    {
      finalNumber: 25,
      displayNumber: "25+",
      title: "Outlets Nationwide",
      icon: <Store className="h-10 w-10" />,
    },
  ]

  // Animation duration in milliseconds
  const ANIMATION_DURATION = 2000
  const [counts, setCounts] = useState(metrics.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const intervals = metrics.map((metric, index) => {
      const steps = Math.floor(ANIMATION_DURATION / 16) // ~60fps
      const stepValue = metric.finalNumber / steps
      let currentCount = 0

      const interval = setInterval(() => {
        currentCount += stepValue
        if (currentCount >= metric.finalNumber) {
          currentCount = metric.finalNumber
          clearInterval(interval)
        }

        setCounts((prevCounts) => {
          const newCounts = [...prevCounts]
          newCounts[index] = Math.floor(currentCount)
          return newCounts
        })
      }, 16)

      return interval
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [isVisible, metrics])

  // Format the number with commas and a plus sign
  const formatNumber = (num: number, withPlus = true) => {
    return num.toLocaleString() + (withPlus ? "+" : "")
  }

  return (
    <section ref={sectionRef} className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-xl bg-gray-800 p-8 shadow-xl ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-lg bg-gray-700 transform transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                isVisible ? `animate-fade-in-up animate-delay-${index * 100}` : "opacity-0"
              }`}
            >
              <div className=" text-xaidez-accent mb-4 transform transition-all duration-500 hover:rotate-6">{metric.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-xaidez-light mb-2">
                {isVisible ? formatNumber(counts[index]) : "0"}
              </h3>
              <p className="text-xaidez-light font-medium">{metric.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
