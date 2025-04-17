'use client'

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function RefundPolicy() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const policyItems = [
    {
      title: "Refund Eligibility",
      content: "Refunds may be considered in cases where the product is damaged, spoiled, or significantly different from what was described. Requests must be made within 24–48 hours of receiving the product, along with valid proof such as photos or video evidence."
    },
    {
      title: "Non-Refundable Situations",
      content: "Products that have been used, tampered with, or are not in their original condition will not be eligible for a refund. We do not entertain refund requests based on change of mind or preferences after purchase."
    },
    {
      title: "Refund Process",
      content: "To request a refund, please contact our team with details of the issue and your order reference. Our team will review your request and get back to you with the next steps after verifying the situation."
    },
    {
      title: "Refund Approval",
      content: "We reserve the right to approve or deny refund requests based on the provided information and the condition of the product. All decisions will be made keeping quality assurance and customer satisfaction in mind."
    }
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">OUR POLICY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Refund <span className="text-xaidez-accent">Policy</span>
          </h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to maintaining the quality and satisfaction of our customers.
          </p>
        </div>

        <div className="max-w-4xl border border-xaidez-dark  mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <p className="text-gray-700 mb-8">
            At our company, we are committed to maintaining the quality and satisfaction of our customers. 
            Our refund policy is designed to ensure fairness while considering the nature of the products we provide.
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
        </div>
      </div>
    </section>
  );
}