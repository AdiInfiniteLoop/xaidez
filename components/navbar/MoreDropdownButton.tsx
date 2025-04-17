import Link from 'next/link';
import { ChevronDown, Award, Shield, FileText, FileQuestion, RefreshCcw, TruckIcon } from 'lucide-react';

const MoreDropdownButton = () => {
  const menuItems = [
    { label: 'Certificates', href: '/certificates', icon: <Award size={16} /> },
    { label: 'Privacy Policy', href: '/privacy-policy', icon: <Shield size={16} /> },
    { label: 'Disclaimer', href: '/disclaimer', icon: <FileText size={16} /> },
    { label: 'Terms & Conditions', href: '/terms-conditions', icon: <FileQuestion size={16} /> },
    { label: 'Refund Policy', href: '/refund-policy', icon: <RefreshCcw size={16} /> },
    { label: 'Shipping Policy', href: '/shipping-policy', icon: <TruckIcon size={16} /> },
  ];

  return (
    <li className="relative group">
      {/* Trigger Button */}
      <button className="flex items-center gap-1 px-5 py-2 text-base font-medium tracking-wide text-gray-200 relative transition-all duration-300 rounded-md hover:bg-gray-800/50 group-hover:text-xaidez-accent">
        More
        <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
        
        <span className="absolute inset-0 bg-gradient-to-r from-xaidez-accent/10 to-blue-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out -z-10" />
        
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-xaidez-accent to-xaidez-error group-hover:w-full transition-all duration-300 ease-out" />
      </button>
      
      <div className="absolute top-full right-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-800/50 rounded-lg shadow-lg shadow-black/30 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transition-all duration-300 origin-top-right z-50 overflow-hidden">
        <ul className="py-1">
          {menuItems.map((item, i) => (
            <li
              key={item.href}
              className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Link
                href={item.href}
                className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-xaidez-accent transition-colors"
              >
                <span className="mr-2 text-xaidez-accent">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default MoreDropdownButton;