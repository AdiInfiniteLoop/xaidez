'use client'
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HotButton = ({ href = '/products', text = 'Shop Now' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link href={href}>
      <button
        className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-xaidez-secondary hover:bg-xaidez-hoveraccent transition-all duration-300 shadow hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
        <ArrowRight 
          size={20} 
          className={`ml-2 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}
        />
      </button>
    </Link>
  );
};

export default HotButton;