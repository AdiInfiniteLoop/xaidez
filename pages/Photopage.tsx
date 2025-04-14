'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'


interface RawGalleryItem {
  title: string;  
  cover: string;
}

interface GalleryItem extends RawGalleryItem {
  decodedTitle: string;
}

export default function ImageGallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true)
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/photos`)
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        
        const result = await response.json()
        
        if (result.status !== 'success' || !Array.isArray(result.data)) {
          throw new Error('Invalid response format')
        }
        console.log(result)
        const processedData: GalleryItem[] = result.data.map((item: RawGalleryItem ) => ({
          ...item,
          decodedTitle: decodeBase64(item.title),
        }))
        
        setGallery(processedData)
        setError(null)
      } catch (err: unknown) {
        console.error('Error fetching gallery:', err)
        setError('Failed to load gallery. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    
    fetchGallery()
  }, [])
  
  const decodeBase64 = (base64String: string): string => {
    try {
      return atob(base64String)
    } catch (err) {
      console.error('Error decoding base64:', err)
      return 'Untitled'
    }
  }
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl font-semibold text-gray-600">Loading gallery...</div> {/* Loader here */}
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 p-4">
        <div className="text-xl font-semibold text-red-600 mb-2">Error</div>
        <div className="text-gray-700">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Retry
        </button>
      </div>
    )
  }
  
  if (gallery.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl font-semibold text-gray-600">No images found</div>
      </div>
    )
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-center mb-8">Image Gallery</h1>
  
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {gallery.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={item.cover}
              alt={item.decodedTitle}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover rounded-t-lg"
              onError={() => {
                const fallbackImage = '/pomogrenate.webp';
                const imgElement = document.querySelector(`[alt="${item.decodedTitle}"]`) as HTMLImageElement;
                if (imgElement) {
                  imgElement.src = fallbackImage;
                  imgElement.alt = 'Image failed to load';
                }
              }}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{item.decodedTitle}</h2>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}