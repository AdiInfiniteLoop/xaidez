'use client'
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Category } from '../Navbar';

type Props = {
  categories: Category[];
};

const CategoryDropdownButton = ({ categories }: Props) => (
  <li className="relative group">
    <button className="group flex items-center space-x-2 py-2 px-4 bg-xaidez-accent/90 text-white rounded-md transition-all">
      <Menu
        size={18}
        className="transform transition-transform duration-300 group-hover:rotate-180"
      />
      <span className="font-medium">CATEGORIES</span>
    </button>

    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-md overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 -translate-y-2">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={category.path}
              className="flex items-center justify-between px-4 py-3 hover:bg-indigo-50 transition-colors text-gray-700"
            >
              <span>{category.name}</span>
              <span className="text-sm text-indigo-500 font-medium">{category.itemCount}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </li>
);

export default CategoryDropdownButton;
