import Link from "next/link";
// import Image from "next/image";
import ToTopButton from "./ToTopButton";
import { SITE_INFO } from "../config";
import { 
  Facebook, 
  Instagram, 
  AtSign, 
  Youtube, 
  Twitter, 
  MapPin, 
  Phone, 
  Clock, 
  Heart, 
  ArrowRight 
} from "lucide-react";

export default function DarkFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-xaidez-secondary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative  h-8 -mt-16 mb-8">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L60 10C120 20 240 40 360 46.7C480 53.3 600 46.7 720 40C840 33.3 960 26.7 1080 33.3C1200 40 1320 60 1380 70L1440 80V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="#1F2937"/>
          </svg>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              {/* <div className="relative h-12 w-12 mr-3">
                <Image
                  src="/images/logo-light.png"
                  alt="Company Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div> */}
              <span className="text-white text-2xl font-bold tracking-tight">{SITE_INFO.sitename}</span>
            </div>
            
            <i className="text-gray-400">
              {SITE_INFO.slogan}
            </i>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-xaidez-accent flex-shrink-0" />
                <p className="text-gray-300">{SITE_INFO.address}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-xaidez-accent flex-shrink-0" />
                <p className="text-gray-300">{SITE_INFO.mobile[0]}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-xaidez-accent flex-shrink-0" />
                <p className="text-gray-300">{SITE_INFO.timing[0]}</p>
              </div>
            </div>
            
            <div className="flex space-x-4 pt-2">
              <a
                href={SITE_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-gray-800 p-2 rounded-full hover:bg-xaidez-hoveraccent transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SITE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gray-800 p-2 rounded-full hover:bg-xaidez-hoveraccent transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SITE_INFO.social.threads}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="bg-gray-800 p-2 rounded-full hover:bg-xaidez-hoveraccent transition-colors duration-300"
              >
                <AtSign size={20} />
              </a>
              <a
                href={SITE_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="bg-gray-800 p-2 rounded-full hover:bg-xaidez-hoveraccent transition-colors duration-300"
              >
                <Youtube size={20} />
              </a>
              <a
                href={SITE_INFO.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="bg-gray-800 p-2 rounded-full hover:bg-xaidez-hoveraccent transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-6 flex items-center">
              <span className="border-b-2 border-xaidez-accent pb-1">Main Navigation</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
                { href: "/photos", label: "Photos" },
                { href: "/videos", label: "Videos" },
                { href: "/certificates", label: "Certificates" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors duration-300"
                  >
                    <ArrowRight size={16} className="opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Information */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 flex items-center">
              <span className="border-b-2 border-xaidez-accent pb-1">Policies & Information</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/disclaimer", label: "Disclaimer" },
                { href: "/terms-conditions", label: "Terms & Conditions" },
                { href: "/refund-policy", label: "Refund Policy" },
                { href: "/shipping-policy", label: "Shipping Policy" }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors duration-300"
                  >
                    <ArrowRight size={16} className="opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0 flex items-center">
              <Heart size={14} className="text-red-500 mr-1" />
              &copy; {currentYear} {SITE_INFO.sitename}. All rights reserved.
            </div>
            <div className="text-sm text-gray-500">
              Designed and developed by{" "}
              <Link href={SITE_INFO.developer.link} className="text-xaidez-accent hover:text-white transition-colors">
                {SITE_INFO.developer.name}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <ToTopButton />
    </footer>
  );
}