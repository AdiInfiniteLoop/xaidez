'use client'

import { useState } from 'react';
import { ChevronDown, Truck, Box, Clock, FileSearch, Globe, AlertTriangle } from 'lucide-react';

export default function ShippingPolicy() {
    const [openSection, setOpenSection] = useState<number | null>(null);

    const toggleSection = (index: number) => {
      setOpenSection(openSection === index ? null : index);
    };
  
  const policyItems = [
    {
      title: "Order Processing",
      content: "All orders are processed within 1–2 business days. Orders placed on weekends or public holidays will be processed on the next working day. Once your order is processed, you will receive a confirmation along with tracking details, if applicable.",
      icon: <Clock size={20} className="text-xaidez-accent mr-2" />
    },
    {
      title: "Delivery Time",
      content: "Delivery times may vary based on your location and the chosen delivery method. Typically, domestic deliveries take between 3–7 business days. Delays may occur due to unforeseen circumstances or high demand periods.",
      icon: <Truck size={20} className="text-xaidez-accent mr-2" />
    },
    {
      title: "Shipping Charges",
      content: "Shipping costs, if applicable, will be calculated at checkout and communicated clearly before the final payment. Free shipping may be offered on select products or during special promotions.",
      icon: <FileSearch size={20} className="text-xaidez-accent mr-2" />
    },
    {
      title: "Packaging",
      content: "All products are securely packed to preserve freshness and ensure safe delivery. We use hygienic and tamper-proof packaging to maintain product quality.",
      icon: <Box size={20} className="text-xaidez-accent mr-2" />
    },
    {
      title: "Tracking Orders",
      content: "Once your order is dispatched, we will share tracking details via SMS, email, or WhatsApp, depending on the contact information provided. You can use the tracking link to stay updated on the shipment status.",
      icon: <FileSearch size={20} className="text-xaidez-accent mr-2" />
    },
    {
      title: "Delivery Partners",
      content: "We work with trusted courier services and logistics partners to ensure timely and reliable delivery of your products across the country.",
      icon: <Truck size={20} className="text-xaidez-accent mr-2" />
    },
    {
      title: "Incorrect Address or Non-Availability",
      content: "Please ensure that your shipping details are accurate while placing the order. In case of incorrect address or failed delivery attempts due to unavailability, additional charges may apply for re-delivery.",
      icon: <AlertTriangle size={20} className="text-xaidez-accent mr-2" />
    },
    {
      title: "International Shipping",
      content: "Currently, we do not support international shipping. We only deliver within India.",
      icon: <Globe size={20} className="text-xaidez-accent mr-2" />
    }
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">DELIVERY INFORMATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Shipping <span className="text-xaidez-accent">Policy</span>
          </h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We take great care in ensuring your products are packaged securely and shipped promptly.
          </p>
        </div>

        <div className="max-w-4xl border border-xaidez-dark  mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <p className="text-gray-700 mb-8">
            At our company, we take great care in ensuring your products are packaged securely and shipped promptly. 
            This Shipping Policy outlines our delivery process, timelines, and related information.
          </p>

          <div className="space-y-4">
            {policyItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => toggleSection(index)}
                >
                  <span className="font-medium text-gray-800 flex items-center">
                    {item.icon}
                    {item.title}
                  </span>
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