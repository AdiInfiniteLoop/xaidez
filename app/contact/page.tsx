import { Metadata } from 'next';
import ContactForm from '@/components/Forms';
import ContactInfo from '@/components/ContactInfo';
import { SITE_INFO } from '@/config';
import { routeMetadata } from '@/lib/metadata';

export const metadata: Metadata = routeMetadata["/contact-us"]

export default function ContactPage() {
  const phoneNumber = SITE_INFO.mobile[0];
  const emails = [SITE_INFO.email[0], SITE_INFO.email[1]];
  const address = SITE_INFO.address;
  const businessHours = `Open Daily: ${SITE_INFO.timing[0]}`;

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
    <div className="md:col-span-1 flex flex-col">
      <ContactInfo 
        address={address}
        phoneNumber={phoneNumber}
        emails={emails}
        businessHours={businessHours}
      />
    </div>
    
    <div className="md:col-span-2 flex flex-col bg-white rounded-lg shadow-sm p-6 md:p-8 border border-xaidez-dark">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Send us a message</h3>
      <ContactForm/> {/* This will make the form expand to fill available space */}
    </div>
  </div>
</div>
      </div>
    </section>
  );
}