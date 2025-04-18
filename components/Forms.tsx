'use client'

import { useState, useEffect } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';

interface FormProps {
  initialFormData?: {
    name: string;
    mobile: string;
    email: string;
    message: string;
  };
}

export default function ContactForm({ initialFormData }: FormProps) {
  const [formData, setFormData] = useState({
    name: initialFormData?.name || '',
    mobile: initialFormData?.mobile || '',
    email: initialFormData?.email || '',
    message: initialFormData?.message || ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [validation, setValidation] = useState({
    name: true,
    mobile: true,
    email: true,
    message: true
  });

  // Form is valid when all fields are valid
  const [formIsValid, setFormIsValid] = useState(false);

  // Character count for message
  const [messageCharCount, setMessageCharCount] = useState(0);

  // Validate the entire form whenever formData changes
  useEffect(() => {
    validateForm();
    // Update message character count
    setMessageCharCount(formData.message.length);
  }, [formData]);

  // Validation rules
  const validateForm = () => {
    // Name validation - at least 2 characters, no special characters except space, hyphen, and apostrophe
    const nameValid = formData.name.trim().length >= 2 && /^[a-zA-Z\s\-']+$/.test(formData.name);
    
    // Mobile validation - only numbers, check length (10-15 digits)
    const digitsOnly = formData.mobile.replace(/[^0-9]/g, '');
    const mobileValid = 
      /^[0-9\+\(\)\s\-]+$/.test(formData.mobile) && 
      digitsOnly.length >= 10 && 
      digitsOnly.length <= 15;
    
    // Email validation - standard email format
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    
    // Message validation - at least 5 characters and max 500
    const messageValid = 
      formData.message.trim().length >= 5 && 
      formData.message.length <= 500;
    
    // Update validation state (but don't show errors yet)
    setValidation({
      name: nameValid,
      mobile: mobileValid,
      email: emailValid,
      message: messageValid
    });
    
    // Overall form validity
    setFormIsValid(nameValid && mobileValid && emailValid && messageValid);
  };

  // Handle input changes with silent validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Specific validation for different fields
    let cleanedValue = value;
    
    // For mobile field - only allow numbers, +, (), spaces, and hyphens
    if (name === 'mobile') {
      if (!/^[0-9\+\(\)\s\-]*$/.test(value)) {
        // If invalid characters, don't update state (silently reject)
        return;
      }
      
      // Ensure the digits-only version doesn't exceed 15 characters
      const digitsOnly = value.replace(/[^0-9]/g, '');
      if (digitsOnly.length > 15) {
        return;
      }
    }
    
    // For name field - only allow letters, spaces, hyphens and apostrophes
    if (name === 'name') {
      if (!/^[a-zA-Z\s\-']*$/.test(value)) {
        // If invalid characters, don't update state (silently reject)
        return;
      }
    }
    
    // For message field - limit to 500 characters
    if (name === 'message' && value.length > 500) {
      cleanedValue = value.substring(0, 500);
    }
    
    // Update form data
    setFormData(prevState => ({
      ...prevState,
      [name]: cleanedValue
    }));
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Additional validation right before submission
    validateForm();
    
    // Only proceed if all fields are valid
    if (!formIsValid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Prepare the request body according to the required format
    const requestBody = {
      name: formData.name,
      mobile: formData.mobile.replace(/[^0-9]/g, ''), // Send only digits for mobile
      email: formData.email,
      message: formData.message
    };
  
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`,
        requestBody
      );
      
      // Always show success message to user regardless of backend response
      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
  
      // Reset form
      setFormData({
        name: '',
        mobile: '',
        email: '',
        message: '',
      });
  
      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          success: false,
          message: '',
        });
      }, 5000);
      
    } catch  {
      setStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
        <div className="grid grid-cols-1 flex-grow md:grid-cols-2 gap-6 mb-6">
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
              className={`w-full px-4 py-2 border ${!validation.name && formData.name !== '' ? 'border-red-300' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-xaidez-accent focus:border-xaidez-accent outline-none transition-colors`}
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
              className={`w-full px-4 py-2 border ${!validation.mobile && formData.mobile !== '' ? 'border-red-300' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-xaidez-accent focus:border-xaidez-accent outline-none transition-colors`}
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
            className={`w-full px-4 py-2 border ${!validation.email && formData.email !== '' ? 'border-red-300' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-xaidez-accent focus:border-xaidez-accent outline-none transition-colors`}
            placeholder="Your email address"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message * <span className="text-xs text-gray-500">({messageCharCount}/500 characters)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`w-full px-4 py-2 border ${!validation.message && formData.message !== '' ? 'border-red-300' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-xaidez-accent focus:border-xaidez-accent outline-none transition-colors resize-none`}
            placeholder="How can we help you?"
            maxLength={500}
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || !formIsValid}
          className={`flex items-center justify-center px-6 py-3 bg-xaidez-accent text-white font-medium rounded-md transition-colors ${(isSubmitting || !formIsValid) ? 'opacity-70 cursor-not-allowed' : 'hover:bg-xaidez-dark'}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          {!isSubmitting && <Send size={16} className="ml-2" />}
        </button>
      </form>
    </>
  );
}