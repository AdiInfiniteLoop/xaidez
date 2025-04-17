import React from 'react';
import HotButton from './HotButton1';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Premium Quality",
      description: "Every product undergoes strict quality checks to ensure you receive only the best."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      title: "Fast Delivery",
      description: "Enjoy quick and reliable delivery services across the nation for your convenience."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Our customer service team is available round the clock to assist with your queries."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
      ),
      title: "Best Price Guarantee",
      description: "We offer competitive prices on our extensive range of products with regular discounts."
    }
  ];

  return (
    <section className="w-full bg-amber-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">WHY CHOOSE US</p>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
            Why <span className="text-xaidez-accent">Xaidez</span> is The Right Choice for You
          </h2>
          <div className="w-16 h-1 bg-xaidez-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-1 flex flex-col h-full">
            <div className="relative flex-grow bg-gray-50 rounded-lg border border-gray-100 shadow-sm p-6">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 lg:left-10 lg:translate-x-0 bg-xaidez-accent text-white px-4 py-2 rounded-full text-sm font-medium">
              Xaidez Perks
              </div>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-4 mt-4 text-gray-900">Exceptional Value & Service</h3>
                  <p className="text-base text-gray-700 mb-6 italic">
                    Join thousands of satisfied customers who trust Xaidez for quality products, exceptional service, and an unmatched shopping experience.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Industry-leading customer satisfaction",
                      "Comprehensive product warranty",
                      "Flexible payment options"
                    ].map((text, i) => (
                      <li className="flex items-start" key={i}>
                        <svg className="h-5 w-5 text-xaidez-accent mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              <HotButton href='/products' text='Shop Now'/>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-2 h-full">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-red-50 text-xaidez-accent">
                    {React.cloneElement(reason.icon, {
                      className: "h-8 w-8 text-xaidez-accent"
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {reason.title}
                  </h3>
                  <p className="text-base text-gray-600">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
