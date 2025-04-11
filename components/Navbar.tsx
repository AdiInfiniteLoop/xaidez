'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Heart, Search, Menu, X } from 'lucide-react';
import NavItem from './navbutton';

type Category = {
  id: number;
  name: string;
  itemCount: number;
  path: string;
};

const categories: Category[] = [
  { id: 1, name: 'Dry Fruits', itemCount: 12, path: '/category/dry-fruits' },
  { id: 2, name: 'Saffron', itemCount: 5, path: '/category/saffron' },
  { id: 3, name: 'Spices', itemCount: 8, path: '/category/spices' },
  { id: 4, name: 'SkinCare', itemCount: 6, path: '/category/skin-care' },
  { id: 5, name: 'Shop All', itemCount: 31, path: '/shop-all' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsCategoryMenuOpen(false);
    }
  };

  // Toggle category menu (for mobile only)
  const toggleCategoryMenu = () => {
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-gray-900 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-black/30' : ''}`}>
      <div className="container mx-auto px-4 flex flex-col">
        {/* Main navbar content */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-white mr-3 hover:text-purple-200 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">
                <span className="bg-gradient-to-r from-amber-500 to-pink-500 px-3 py-1 rounded-md">Xaidez</span>
              </span>
            </Link>

            {/* Desktop navigation items */}
            <nav className="hidden lg:flex ml-8">
              <ul className="flex items-center space-x-1">
                <li className="relative group">
                  <button
                    className="group flex items-center space-x-2 py-2 px-4 bg-black bg-opacity-20 hover:bg-opacity-30 text-white rounded-md transition-all"
                  >
                    <Menu
                      size={18}
                      className="transform transition-transform duration-300 group-hover:rotate-180"
                    />
                    <span className="font-medium">CATEGORIES</span>
                  </button>
                  
                  {/* Category dropdown - appears on hover */}
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-md overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 -translate-y-2">
                    <ul>
                      {categories.map((category) => (
                        <li key={category.id}>
                          <Link href={category.path} className="flex items-center justify-between px-4 py-3 hover:bg-indigo-50 transition-colors text-gray-700">
                            <span>{category.name}</span>
                            <span className="text-sm text-indigo-500 font-medium">{category.itemCount}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                          
                <NavItem href='/about' label='About'/>
                <NavItem href='/specials' label='Specials'/>
                <NavItem href='/contact' label='Contact'/>

                <li className="relative group">
                  <button className="flex items-center py-2 px-4 text-white hover:bg-black hover:bg-opacity-20 rounded-md transition-colors">
                    More
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  <div className="absolute top-full right-0 w-48 bg-white shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <ul>
                      <li>
                        <Link href="/blog" className="block px-4 py-2 hover:bg-indigo-50 transition-colors text-gray-700">
                          Our Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/recipes" className="block px-4 py-2 hover:bg-indigo-50 transition-colors text-gray-700">
                          Recipes
                        </Link>
                      </li>
                      <li>
                        <Link href="/origins" className="block px-4 py-2 hover:bg-indigo-50 transition-colors text-gray-700">
                          Origins
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          {/* Center - Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 px-4 pl-10 rounded-full border-0 bg-black bg-opacity-20 text-white placeholder-gray-400 focus:bg-black focus:bg-opacity-30 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Right - User actions */}
          <div className="flex items-center space-x-5">
            {/* Mobile search button */}
            <button className="md:hidden text-white hover:text-pink-300 transition-colors">
              <Search size={22} />
            </button>
            
            {/* Wishlist */}
            <Link href="/wishlist" className="text-white hover:text-pink-300 transition-colors hidden sm:block">
              <Heart size={22} />
            </Link>
            
            {/* User account */}
            <Link href="/account" className="text-white hover:text-pink-300 transition-colors">
              <User size={22} />
            </Link>
            
            {/* Shopping cart */}
            <Link href="/cart" className="text-white hover:text-pink-300 transition-colors relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-pink-500 text-xs text-white font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden py-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 pl-10 rounded-full border-0 bg-black bg-opacity-20 text-white placeholder-gray-400 focus:bg-black focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMobileMenu}
      />
      
      {/* Mobile menu sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-72 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">
                <span className="bg-gradient-to-r from-amber-500 to-pink-500 px-2 py-1 rounded-md text-white">Xaidez</span>
              </span>
            </Link>
            <button onClick={toggleMobileMenu} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <button
                className="flex items-center justify-between w-full px-3 py-3 bg-black bg-opacity-30 rounded-md text-white font-medium"
                onClick={toggleCategoryMenu}
              >
                <span>Shop By Categories</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isCategoryMenuOpen ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {/* Category submenu */}
              <div className={`mt-1 ml-4 overflow-hidden transition-all duration-300 ${isCategoryMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <ul className="space-y-1 py-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link 
                        href={category.path}
                        className="flex items-center justify-between py-2 px-3 text-gray-300 hover:text-white hover:bg-black hover:bg-opacity-20 rounded-md transition-colors"
                        onClick={toggleMobileMenu}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-pink-400 font-medium">{category.itemCount}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            
            <li>
              <Link 
                href="/specials" 
                className="flex items-center px-3 py-3 text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white rounded-md transition-colors"
                onClick={toggleMobileMenu}
              >
                Specials
              </Link>
            </li>
            
            <li>
              <Link 
                href="/about" 
                className="flex items-center px-3 py-3 text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white rounded-md transition-colors"
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
            </li>
            
            <li>
              <Link 
                href="/contact" 
                className="flex items-center px-3 py-3 text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white rounded-md transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            
            <li>
              <Link 
                href="/affiliate" 
                className="flex items-center px-3 py-3 text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white rounded-md transition-colors"
                onClick={toggleMobileMenu}
              >
                Affiliate
              </Link>
            </li>
            
            <li className="border-t border-gray-800 mt-2 pt-2">
              <Link 
                href="/account" 
                className="flex items-center px-3 py-3 text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white rounded-md transition-colors"
                onClick={toggleMobileMenu}
              >
                <User size={18} className="mr-2 text-pink-400" />
                My Account
              </Link>
            </li>
            
            <li>
              <Link 
                href="/wishlist" 
                className="flex items-center px-3 py-3 text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white rounded-md transition-colors"
                onClick={toggleMobileMenu}
              >
                <Heart size={18} className="mr-2 text-pink-400" />
                Wishlist
              </Link>
            </li>
            
            <li>
              <Link 
                href="/cart" 
                className="flex items-center px-3 py-3 text-gray-300 hover:bg-black hover:bg-opacity-20 hover:text-white rounded-md transition-colors"
                onClick={toggleMobileMenu}
              >
                <ShoppingCart size={18} className="mr-2 text-pink-400" />
                Shopping Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;