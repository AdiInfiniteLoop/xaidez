import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactInfoProps {
  address: string;
  phoneNumber: string;
  emails: string[];
  businessHours: string;
}

export default function ContactInfo({ 
  address, 
  phoneNumber, 
  emails, 
  businessHours 
}: ContactInfoProps) {
  return (
    <div className="bg-white rounded-lg h-full shadow-sm p-6 md:p-8 border border-xaidez-dark">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin size={20} className="text-xaidez-accent mr-3 mt-1" />
          <div>
            <p className="font-medium text-gray-700">Address</p>
            <p className="text-gray-600">{address}</p>
          </div>
        </div>
        
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
            {emails.map((email, index) => (
              <p key={index} className="text-gray-600">{email}</p>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-800 mb-3">Business Hours</h4>
        <p className="text-gray-600 mb-1">{businessHours}</p>
      </div>
    </div>
  );
}