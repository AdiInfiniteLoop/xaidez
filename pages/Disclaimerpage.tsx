'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Disclaimer() {
    const [openSection, setOpenSection] = useState<number | null>(null);

    const toggleSection = (index: number) => {
      setOpenSection(openSection === index ? null : index);
    };
  

  const policyItems = [
    {
      title: "Limitation of Liability",
      content: "In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website."
    },
    {
      title: "External Links",
      content: "Through this website, you may be able to link to other websites that are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them."
    },
    {
      title: "Accuracy of Information",
      content: "Every effort is made to keep the website up and running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control."
    },
    {
      title: "Changes to the Website",
      content: "We reserve the right to modify, suspend, or discontinue any aspect or feature of the website at any time without prior notice."
    },
    {
      title: "Consent",
      content: "By using our website, you hereby consent to our disclaimer and agree to its terms."
    }
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">IMPORTANT NOTICE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-xaidez-accent">Disclaimer</span>
          </h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Please read this disclaimer carefully before using our website.
          </p>
        </div>

        <div className="max-w-4xl border border-xaidez-dark  mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <p className="text-gray-700 mb-8">
            The information provided on our website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>

          <div className="space-y-4">
            {policyItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => toggleSection(index)}
                >
                  <span className="font-medium text-gray-800">{item.title}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-500 transition-transform duration-300 ${openSection === index ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openSection === index ? 'max-h-40 py-4 px-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="mt-4">
              <a href="/privacy-policy" className="text-sm text-xaidez-accent hover:underline mr-4">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="text-sm text-xaidez-accent hover:underline">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}