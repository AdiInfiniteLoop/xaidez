'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState<number  | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const policyItems = [
    {
      title: "Information We Collect",
      content: "When you get in touch with us through our website, social media, phone, or other channels, we may collect personal details such as your name, phone number, email address, and any specific information related to your query or interest in our offerings."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information you provide to respond to your inquiries, share product details, offer personalized support, and improve your overall experience with our service."
    },
    {
      title: "Information Sharing",
      content: "We do not sell or share your personal information with third parties. However, we may work with trusted partners or service providers to assist in communication or delivering requested information, and they are required to handle your data responsibly."
    },
    {
      title: "Data Security",
      content: "We use standard security measures to ensure your data is protected from unauthorized access, misuse, or disclosure. While we take appropriate steps, no method of communication or storage is 100% secure."
    },
    {
      title: "Communication Channels",
      content: "When you contact us, your information may be processed through various communication platforms such as email, messaging apps, or phone. These platforms may have their own privacy policies, which we encourage you to review."
    },
    {
      title: "Cookies",
      content: "Our website may use cookies or similar technologies to improve your browsing experience and understand how users interact with our content. You can manage cookie preferences through your browser settings."
    },
    {
      title: "Third-Party Links",
      content: "Our website may contain links to external websites for additional information or convenience. We are not responsible for the privacy practices or content of these websites. Please review their policies before sharing any information."
    },
    {
      title: "Updates to This Privacy Policy",
      content: "We may revise this Privacy Policy from time to time. Any significant changes will be posted on our website with an updated effective date."
    }
  ];

  return (
    <section className="w-full   py-16">
      <div className="max-w-7xl  mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">OUR COMMITMENT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Privacy <span className="text-xaidez-accent">Policy</span>
          </h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We value your privacy and are committed to protecting the personal information you share with us.
          </p>
        </div>

        <div className="max-w-4xl border border-xaidez-dark  mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <p className="text-gray-700 mb-8">
            At our company, we value your privacy and are committed to protecting the personal information you share with us. 
            This Privacy Policy explains how we collect, use, and safeguard your data when you contact us with inquiries about our products or services.
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
              <a href="/disclaimer" className="text-sm text-xaidez-accent hover:underline">
                Read our Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}