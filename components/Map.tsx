import Link from "next/link";
import { SITE_INFO } from "../config";

export default function ContactSection() {
  return (
    <div className="bg-amber-50 pb-16">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Our place</p>

          <h2 className="text-3xl font-bold  mb-2">
            Get in <span className="text-xaidez-accent underline">Touch</span>
          </h2>
          <p className="text-gray-600">
            Have questions? Reach out to us directly or visit our center.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 flex-1">
            <div className="flex items-center mb-6">
              <div className="bg-xaidez-dark p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold ml-3">Contact Information</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-xaidez-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 5l9 7 9-7M3 19h18V5H3v14z" />
                </svg>

                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Reach us at</p>
                  <p className="font-medium">{SITE_INFO.email[0]}</p>
                  <p className="font-medium">{SITE_INFO.email[1]}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-xaidez-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="font-medium">{SITE_INFO.mobile}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-xaidez-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Our Location</p>
                  <p className="font-medium">{SITE_INFO.address}</p>
                </div>
              </div>
            </div>
            
            <Link href='/contact'>
            <button className="mt-6 w-full bg-xaidez-dark hover:bg-xaidez-hoveraccent text-white py-3 px-4 rounded flex items-center justify-center transition-colors">
              Contact Us
            </button>
            </Link>
          </div>
          
          <div className="flex-1">
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={SITE_INFO.map_url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}