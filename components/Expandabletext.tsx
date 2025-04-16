'use client'

import { useEffect, useRef, useState } from 'react'

interface ExpandableTextProps {
  children: React.ReactNode
  maxLines?: number
}

export default function ExpandableText({ children, maxLines = 6 }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = contentRef.current
    if (!element) return

    const checkOverflow = () => {
      const hasOverflow = element.scrollHeight > element.clientHeight
      setIsOverflowing(hasOverflow)
    }

    checkOverflow()
    //auto check the overflows , even with zoom in
    const resizeObserver = new ResizeObserver(() => checkOverflow())
    resizeObserver.observe(element)

    return () => resizeObserver.disconnect()
  }, [children])

  return (
    <div>
      <div
        ref={contentRef}
        className={`prose prose-sm max-w-none text-gray-600 transition-all duration-300 ${
          !expanded ? `line-clamp-${maxLines}` : ''
        }`}
      >
        {children}
      </div>

      {isOverflowing && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm text-blue-600 hover:underline focus:outline-none"
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  )
}
