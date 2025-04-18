import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function WebTeamPage() {
  const teamMembers = [
    {
      name: 'Aditya Pradhan',
      position: 'Web Developer',
      phone: '+91 81599-88129',
      linkedin: 'https://www.linkedin.com/in/aditya-pradhan10/',
      portfolio: 'https://personal-portfolio-eta-ebon.vercel.app/',
      bio: 'Experienced in building modern web apps with React, Next.js, and Node.js.'
    },
    {
      name: 'Tahir Amaan',
      position: 'Web Developer',
      phone: '+91 919086-509853',
      linkedin: 'https://www.linkedin.com/in/tahiramaan/',
      bio: 'Skilled in building responsive and user-friendly interfaces with React and CSS.'
    }
  ];

  return (
    <section className="w-full py-16 bg-amber-50">
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-xaidez-accent">Web Team</span>
          </h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know our expert developers and how to connect with them.
          </p>
        </div>

        {teamMembers.map((teamMember, index) => (
          <div key={index} className="border border-xaidez-dark bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{teamMember.name}</h3>
                <p className="text-gray-600 mt-1">{teamMember.position}</p>
              </div>

            </div>

            <div className="mb-6">
              <p className="text-gray-700 mb-2"><strong>Bio:</strong> {teamMember.bio}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Contact</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <Phone size={18} className="text-xaidez-accent" />
                    <span className="text-gray-900">{teamMember.phone}</span>
                  </li>

                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href={teamMember.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      LinkedIn Profile
                    </Link>
                  </li>
                  {teamMember.portfolio && (
                      <li>
                      <Link href={teamMember.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Personal Portfolio
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
