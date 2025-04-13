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
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const intervals = metrics.map((metric, index) => {
      const steps = Math.floor(ANIMATION_DURATION / 16)
      const stepValue = metric.finalNumber / steps
      let currentCount = 0

      const interval = setInterval(() => {
        currentCount += stepValue
        if (currentCount >= metric.finalNumber) {
          currentCount = metric.finalNumber
          clearInterval(interval)
        }

        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(currentCount)
          return newCounts
        })
      }, 16)

      return interval
    })

    return () => intervals.forEach(clearInterval)
  }, [isVisible])

  const formatNumber = (num: number, withPlus = true) => {
    return num.toLocaleString() + (withPlus ? "+" : "")
  }

  return (
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto px-3 py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 relative inline-block pb-2 mb-2">
          Our Impact
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-xaidez-accent"></span>
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          We&apos;re proud of the journey so far — helping customers, delivering orders, and expanding across the country.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-xaidez-light p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 flex flex-col items-center text-center transform hover:-translate-y-1"
          >
            <div className="text-xaidez-accent mb-4">{metric.icon}</div>
            <h3 className="text-2xl font-bold text-xaidez-secondary mb-1">
              {isVisible ? formatNumber(counts[index]) : "0"}
            </h3>
            <p className="text-sm text-gray-600 font-medium">{metric.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
