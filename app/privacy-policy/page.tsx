import Accordion from '@/components/Accordion';
import { routeMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = routeMetadata["/privacy-policy"]

export default function PrivacyPolicy() {
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
          <Accordion items={policyItems}/>
        </div>
      </div>
    </section>
  );
}