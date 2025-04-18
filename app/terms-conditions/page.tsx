import Accordion from "@/components/Accordion";
import { routeMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = routeMetadata["/terms-and-conditions"]

export default function TermsConditions() {

  
  const policyItems = [
    {
      title: "Website Usage",
      content: "This website is intended for informational purposes only. By using our site, you agree not to misuse any information, images, or content provided on it."
    },
    {
      title: "Information Accuracy",
      content: "We strive to keep all information on our website accurate and up to date. However, we do not guarantee the completeness or accuracy of any content, and we reserve the right to make changes at any time without prior notice."
    },
    {
      title: "Third-Party Links",
      content: "Our website may include links to third-party websites for your convenience. We are not responsible for the content, accuracy, or privacy practices of these external sites."
    },
    {
      title: "Intellectual Property",
      content: "All content on this site, including text, images, logos, and branding, is our property unless otherwise stated. Unauthorized use, reproduction, or distribution of any material from this website is strictly prohibited."
    },
    {
      title: "Limitation of Liability",
      content: "We shall not be held liable for any direct or indirect damages arising from the use of our website or reliance on the information provided herein."
    },
    {
      title: "Governing Law",
      content: "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of the jurisdiction in which our business is registered."
    },
    {
      title: "Changes to These Terms",
      content: "We reserve the right to update these Terms & Conditions at any time. Continued use of the website following changes constitutes your acceptance of the updated terms."
    }
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">LEGAL AGREEMENT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Terms & <span className="text-xaidez-accent">Conditions</span>
          </h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            By accessing or using our website, you agree to be bound by the following terms.
          </p>
        </div>

        <div className="max-w-4xl border border-xaidez-dark  mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <p className="text-gray-700 mb-8">
            Welcome to our website. By accessing or using our website, you agree to be bound by the following Terms & Conditions. 
            Please read them carefully before continuing to use our site.
          </p>
          <Accordion items={policyItems}/>
          
        </div>
      </div>
    </section>
  );
}