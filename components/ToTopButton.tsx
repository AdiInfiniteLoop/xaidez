'use client'
export default function ToTopButton() {
    return (
        <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="z-50  fixed bottom-6 right-6 p-3 rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    )
}