"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Package, Users, Truck, Store } from "lucide-react"

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const metrics = useMemo(() => [
    {
      finalNumber: 10000,
      displayNumber: "10,000+",
      title: "Products",
      icon: <Package className="h-8 w-8" />,
      color: "bg-blue-500",
    },
    {
      finalNumber: 50000,
      displayNumber: "50,000+",
      title: "Happy Customers",
      icon: <Users className="h-8 w-8" />,
      color: "bg-green-500",
    },
    {
      finalNumber: 100000,
      displayNumber: "100,000+",
      title: "Orders Delivered",
      icon: <Truck className="h-8 w-8" />,
      color: "bg-purple-500",
    },
    {
      finalNumber: 25,
      displayNumber: "25+",
      title: "Outlets ",
      icon: <Store className="h-8 w-8" />,
      color: "bg-orange-500",
    },
  ], [])

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
    const section = sectionRef.current
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
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
  }, [isVisible, metrics])

  const formatNumber = (num: number) => {
    return num.toLocaleString() + "+"
  }

  return (
    <section ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 py-16 rounded-3xl">
      <div className="text-center mb-12">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">value delivered</p>
        <h2 className="text-3xl font-bold text-gray-800 relative inline-block pb-3 mb-4">
          Our Impact
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full bg-xaidez-accent"></div>
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          We&apos;re proud of the journey so far — helping customers, delivering orders, and expanding across the country.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center">
                <div className={`w-24 h-24 ${metric.color} bg-opacity-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                  <div className={`text-${metric.color.split('-')[1]}-600`}>
                    {metric.icon}
                  </div>
                </div>
              </div>
              
              {/* Counter positioned at the bottom of the circle */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-md border border-gray-100">
                <p className="text-xl font-bold text-gray-800">
                  {isVisible ? formatNumber(counts[index]) : "0+"}
                </p>
              </div>
            </div>
            
            <h3 className="mt-6 text-lg font-medium text-gray-800">
              {metric.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}