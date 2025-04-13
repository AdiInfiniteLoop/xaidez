'use client'
import Link from 'next/link'

const MoreDropdownButton = () => (
  <li className="relative group">
    {/* Trigger Button */}
    <button className="flex items-center gap-1 px-4 py-2 text-white font-medium uppercase tracking-wide transition duration-300 hover:text-xaidez-accent">
      More
      <svg
        className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    {/* Dropdown Menu */}
    <div className="absolute top-full right-0 mt-2 w-52 bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transform transition-all duration-300 origin-top-right z-50">
      <ul className="py-2">
        {[
          { label: 'Our Blog', href: '/blog' },
          { label: 'Recipes', href: '/recipes' },
          { label: 'Origins', href: '/origins' },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-xaidez-accent/10 hover:text-xaidez-accent transition-colors duration-200"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </li>
)

export default MoreDropdownButton
