'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import NavItem from './navbar/navbutton';
import MoreDropdownButton from './navbar/MoreDropdownButton';
import MobileMenuItem from './navbar/MobileMenuItem';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
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

            <nav className="hidden lg:flex ml-8">
              <ul className="flex items-center space-x-1">
                <NavItem href='/about' label='About'/>
                <NavItem href='/contact' label='Contact'/>
                <NavItem href='/photos' label='Photos'/>
                <NavItem href='/videos' label='Videos'/>
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
            <MobileMenuItem href="/about" label="About" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/contact" label="Contact" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/photos" label="Photos" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/videos" label="Videos" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/certificates" label="Certificates" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/privacy-policy" label="Privacy Policy" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/disclaimer" label="Disclaimer" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/terms-conditions" label="Terms & Conditions" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/refund-policy" label="Refund Policy" onClick={toggleMobileMenu} />
            <MobileMenuItem href="/shipping-policy" label="Shipping Policy" onClick={toggleMobileMenu} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;