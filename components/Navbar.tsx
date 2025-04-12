'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import NavItem from './navbutton';
import CategoryDropdownButton from './navbar/CategoryDropdownButton';
import MoreDropdownButton from './navbar/MoreDropdownButton';
import MobileMenuItem from './navbar/MobileMenuItem';
import CategoryMobileDropdown from './navbar/CategoryMobileDropdown';

export type Category = {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const newState = !prev;
      if (!newState) setIsCategoryMenuOpen(false);
      return newState;
    });
  };
  

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
              className="lg:hidden text-white mr-3 lg:hover:text-purple-200 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">
                <span className="px-3 py-1 rounded-md">Xaidez</span>
              </span>
            </Link>

            {/* Desktop navigation items */}
            <nav className="hidden lg:flex ml-8">
              <ul className="flex items-center space-x-1">
              <CategoryDropdownButton categories={categories} />                  
                <NavItem href='/about' label='About'/>
                <NavItem href='/specials' label='Specials'/>
                <NavItem href='/contact' label='Contact'/>

                <MoreDropdownButton />

              </ul>
            </nav>
          </div>

          {/* Center - Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 px-4 pl-10 rounded-full border-0 bg-black bg-opacity-20 text-white placeholder-gray-400 focus:bg-black focus:bg-opacity-30 focus:ring-2 focus:ring-xaidez-accent focus:outline-none transition-all"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>


        </div>

        <div className="md:hidden py-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 pl-10 rounded-full border-0 bg-black bg-opacity-20 text-white placeholder-gray-400 focus:bg-black focus:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-xaidez-accent transition-all"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

      </div>

      {/*overlay*/}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMobileMenu}
      />
      
      <div 
        className={`fixed top-0 left-0 h-full w-72 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">
                <span className=" px-2 py-1 rounded-md text-white">Xaidez</span>
              </span>
            </Link>
            <button onClick={toggleMobileMenu} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-1">
            
            <CategoryMobileDropdown
            categories={categories}
            isOpen={isCategoryMenuOpen}
            onToggle={toggleCategoryMenu}
            onItemClick={toggleMobileMenu}
          />
            <MobileMenuItem href="/specials" label="Specials" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/about" label="About" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/contact" label="Contact" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/affiliate" label="Affiliate" onClick={toggleMobileMenu} />


          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;