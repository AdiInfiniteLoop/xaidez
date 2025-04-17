'use client'

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { SITE_INFO } from '@/config'
import axios from 'axios';

const phoneNumber = SITE_INFO.mobile[0]
const email = SITE_INFO.email[0]
const address1 = SITE_INFO.address
const bhrs1 = `Open Daily: ${SITE_INFO.timing[0]}`

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`,
        formData // axios automatically handles JSON body
      );

      console.log(response)
  
      if (response.status === 200 || response.status === 201  || response.data.status === 'success') {
        setStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
        });
  
        setFormData({
          name: '',
          mobile: '',
          email: '',
          message: '',
        });
  
        setTimeout(() => {
          setStatus({
            submitted: false,
            success: false,
            message: '',
          });
        }, 5000);
      } else {
        setStatus({
          submitted: true,
          success: false,
          message: 'Something went wrong. Please try again later.',
        });
      }
    } catch  {
      setStatus({
        submitted: true,
        success: false,
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">REACH OUT TO US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact <span className="text-xaidez-accent">Us</span>
          </h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 bg-white rounded-lg shadow-sm p-6 md:p-8 border border-xaidez-dark">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={20} className="text-xaidez-accent mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-700">Phone</p>
                    <p className="text-gray-600">{phoneNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="text-xaidez-accent mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-700">Email</p>
                    <p className="text-gray-600">{email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={20} className="text-xaidez-accent mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-700">Address</p>
                    <p className="text-gray-600">{address1}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-800 mb-3">Business Hours</h4>
                <p className="text-gray-600 mb-1">{bhrs1}</p>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-6 md:p-8 border border-xaidez-dark">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send us a message</h3>
              
              {status.submitted && (
                <div className={`mb-6 p-4 rounded-lg flex items-center ${status.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {status.success ? 
                    <CheckCircle size={20} className="mr-2 text-green-500" /> : 
                    <XCircle size={20} className="mr-2 text-red-500" />
                  }
                  <p>{status.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-xaidez-accent focus:border-xaidez-accent outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-xaidez-accent focus:border-xaidez-accent outline-none transition-colors"
                      placeholder="Your mobile number"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-xaidez-accent focus:border-xaidez-accent outline-none transition-colors"
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-xaidez-accent focus:border-xaidez-accent outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center px-6 py-3 bg-xaidez-accent text-white font-medium rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-xaidez-dark'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send size={16} className="ml-2" />}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <div className="mt-4">
            <a href="/refund-policy" className="text-sm text-xaidez-accent hover:underline mr-4">
              Refund Policy
            </a>
            <a href="/shipping-policy" className="text-sm text-xaidez-accent hover:underline mr-4">
              Shipping Policy
            </a>
            <a href="/terms-conditions" className="text-sm text-xaidez-accent hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}