'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {  Menu, X, Mail, Info, Camera, Video, Award, Shield, FileText, TruckIcon, RefreshCcw, FileQuestion, ShoppingBasketIcon } from 'lucide-react';
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
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <button 
              className="xl:hidden text-white mr-3 xl:hover:text-purple-200 transition-colors"
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

            <nav className="hidden xl:flex ml-8">
              <ul className="flex items-center space-x-1">
                <NavItem href='/about' label='About'/>
                <NavItem href='/products' label='Products'/>
                <NavItem href='/photos' label='Photos'/>
                <NavItem href='/videos' label='Videos'/>
                <MoreDropdownButton />
              </ul>
            </nav>
          </div>


          <div className="hidden md:flex items-center">
          <Link 
            href="/contact" 
            className="flex items-center px-4 py-2 rounded-full bg-xaidez-dark bg-opacity-20 hover:bg-xaidez-hoveraccent text-white hover:bg-opacity-30 transition-all border border-white/40"
          >
            <Mail size={18} className="mr-2" />
            <span>Contact Us</span>
          </Link>
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
                <span className="px-2 py-1 rounded-md text-white">Xaidez</span>
              </span>
            </Link>
            <button onClick={toggleMobileMenu} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-1">
            <MobileMenuItem 
              href="/about" 
              label="About" 
              onClick={toggleMobileMenu} 
              icon={<Info size={20} className="mr-3" />}
            />
            <MobileMenuItem 
              href="/products" 
              label="Products" 
              onClick={toggleMobileMenu} 
              icon={<ShoppingBasketIcon size={20} className="mr-3" />}
            />
            <MobileMenuItem 
              href="/photos" 
              label="Photos" 
              onClick={toggleMobileMenu} 
              icon={<Camera size={20} className="mr-3" />}
            />
              <MobileMenuItem 
                href="/videos" 
                label="Videos" 
                onClick={toggleMobileMenu} 
                icon={<Video size={20} className="mr-3" />}
              />
            <MobileMenuItem 
              href="/contact" 
              label="Contact" 
              onClick={toggleMobileMenu} 
              icon={<Mail size={20} className="mr-3" />}
            />
            <MobileMenuItem 
              href="/certificates" 
              label="Certificates" 
              onClick={toggleMobileMenu} 
              icon={<Award size={20} className="mr-3" />}
            />
            <MobileMenuItem 
              href="/privacy-policy" 
              label="Privacy Policy" 
              onClick={toggleMobileMenu} 
              icon={<Shield size={20} className="mr-3" />}
            />
            <MobileMenuItem 
              href="/disclaimer" 
              label="Disclaimer" 
              onClick={toggleMobileMenu} 
              icon={<FileText size={20} className="mr-3" />}
            />
            <MobileMenuItem 
              href="/terms-conditions" 
              label="Terms & Conditions" 
              onClick={toggleMobileMenu} 
              icon={<FileQuestion size={20} className="mr-3" />}
            />
            <MobileMenuItem 
              href="/refund-policy" 
              label="Refund Policy" 
              onClick={toggleMobileMenu} 
              icon={<RefreshCcw size={20} className="mr-3" />}
            />
            <MobileMenuItem 
              href="/shipping-policy" 
              label="Shipping Policy" 
              onClick={toggleMobileMenu} 
              icon={<TruckIcon size={20} className="mr-3" />}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;