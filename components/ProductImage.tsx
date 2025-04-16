'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductImageGalleryProps {
  images: string[]
  title: string
}

export default function ProductImageGallery({ images, title }: ProductImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="relative">
      <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 relative">
        <Image
          src={images[activeImage]}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-opacity duration-500 ease-in-out opacity-100"
        />
      </div>

      <div className="mt-4 grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-transform duration-300 ease-in-out transform hover:scale-105 ${
              activeImage === index ? 'border-black' : 'border-transparent'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="object-cover object-center transition-all duration-300 ease-in-out"
              />
              {activeImage !== index && (
                <div className="absolute inset-0 bg-black/50"></div>
              )}

            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
