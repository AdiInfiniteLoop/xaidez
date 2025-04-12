'use client'
import Link from 'next/link';

const MoreDropdownButton = () => (
  <li className="relative group">
    <button className="flex items-center py-2 px-4 text-white hover:bg-black hover:bg-opacity-20 rounded-md transition-colors">
      More
      <svg
        className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div className="absolute top-full right-0 w-48 bg-white shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
      <ul>
        {[
          { label: 'Our Blog', href: '/blog' },
          { label: 'Recipes', href: '/recipes' },
          { label: 'Origins', href: '/origins' },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block px-4 py-2 hover:bg-indigo-50 transition-colors text-gray-700"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </li>
);

export default MoreDropdownButton;
