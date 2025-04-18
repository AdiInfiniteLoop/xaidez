'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number | null;
  className?: string;
  itemClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
}

export default function Accordion({
  items,
  defaultOpenIndex = null,
  className = "space-y-4",
  itemClassName = "border border-gray-200 rounded-lg overflow-hidden",
  headerClassName = "flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200",
  contentClassName = "text-gray-700"
}: AccordionProps) {
  const [openSection, setOpenSection] = useState<number | null>(defaultOpenIndex);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index} className={itemClassName}>
          <button 
            className={headerClassName}
            onClick={() => toggleSection(index)}
            aria-expanded={openSection === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className="font-medium text-gray-800">{item.title}</span>
            <ChevronDown 
              size={20} 
              className={`text-gray-500 transition-transform duration-300 ${openSection === index ? 'transform rotate-180' : ''}`} 
            />
          </button>
          <div 
            id={`accordion-content-${index}`}
            className={`overflow-hidden transition-all duration-300 ${
              openSection === index ? 'max-h-40 py-4 px-4' : 'max-h-0'
            }`}
          >
            <div className={contentClassName}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}