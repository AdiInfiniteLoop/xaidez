import Link from 'next/link';
import {  Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Xaidez</h3>
            <p className="text-gray-400 mb-4">
              Premium quality products sourced from the best regions worldwide.
            </p>
            <div className="flex space-x-4">

              <Link href="mailto:info@xaidez.com" aria-label="Email" className="text-gray-400 hover:text-pink-400">
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-pink-400">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-pink-400">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-pink-400">FAQs</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-pink-400">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/dry-fruits" className="text-gray-400 hover:text-pink-400">Dry Fruits</Link></li>
              <li><Link href="/category/saffron" className="text-gray-400 hover:text-pink-400">Saffron</Link></li>
              <li><Link href="/category/spices" className="text-gray-400 hover:text-pink-400">Spices</Link></li>
              <li><Link href="/category/skin-care" className="text-gray-400 hover:text-pink-400">Skin Care</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
            <form className="mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md mb-2 text-white"
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-amber-500 to-pink-500 text-white px-4 py-2 rounded-md w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Xaidez. All rights reserved.
          </p>
          <div className="mt-2 sm:mt-0">
            <span className="text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-pink-400">Privacy</Link>
              {' · '}
              <Link href="/shipping" className="hover:text-pink-400">Shipping</Link>
              {' · '}
              <Link href="/returns" className="hover:text-pink-400">Returns</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;