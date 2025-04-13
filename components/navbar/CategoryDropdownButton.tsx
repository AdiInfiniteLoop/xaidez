'use client'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Category } from '../Navbar'

type Props = {
  categories: Category[]
}

const CategoryDropdownButton = ({ categories }: Props) => (
  <li className="relative group z-50">
    {/* Trigger */}
    <button className="flex items-center gap-2 px-4 py-2 text-white font-semibold uppercase tracking-wide bg-xaidez-accent  rounded-lg shadow-md transition-all hover:brightness-110">
      <Menu
        size={18}
        className="transform transition-transform duration-300 group-hover:rotate-180"
      />
      <span>Categories</span>
    </button>

    {/* Dropdown */}
    <div className="absolute top-full left-0 mt-2 w-72 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-2xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transition-all duration-300 origin-top-left">
      <ul className="divide-y divide-gray-100">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={category.path}
              className="flex justify-between items-center px-5 py-3 text-sm text-gray-800 hover:bg-xaidez-accent/10 hover:text-xaidez-accent transition-colors"
            >
              <span className="font-medium">{category.name}</span>
              <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                {category.itemCount}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </li>
)

export default CategoryDropdownButton
