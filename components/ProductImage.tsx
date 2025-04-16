'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductImageGalleryProps {
  images: string[]
  title: string
}

export default function ProductImageGallery({ images, title }: ProductImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const [fade, setFade] = useState(false)

  const visibleCount = 3
  const maxIndex = Math.max(0, images.length - visibleCount)

  const handlePrev = () => setStartIndex(Math.max(0, startIndex - 1))
  const handleNext = () => setStartIndex(Math.min(maxIndex, startIndex + 1))

  const handleImageClick = (index: number) => {
    if (index !== activeImage) {
      setFade(true)
      setTimeout(() => {
        setActiveImage(index)
        setFade(false)
      }, 150)
    }
  }

  return (
    <div className="relative">
      <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 relative">
        <Image
          src={images[activeImage]}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover object-center transition-opacity duration-500 ${
            fade ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-1 active:scale-90 transition-transform duration-150 disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="relative w-full overflow-hidden">
          <div
            className="grid grid-cols-8 gap-2 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              width: `${(images.length / visibleCount) * 100}%`,
            }}
          >
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageClick(index)}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-transform duration-300 ease-in-out active:scale-95 ${
                  activeImage === index ? 'border-black' : 'border-transparent'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover object-center"
                  />
                  {activeImage !== index && (
                    <div className="absolute inset-0 bg-black/50"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex >= maxIndex}
          className="p-1 active:scale-90 transition-transform duration-150 disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
