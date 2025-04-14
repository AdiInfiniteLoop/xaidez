import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Certificates',
  description: 'Browse through our collection of professional certifications and achievements.',
};

interface Certificate {
  title: string;
  cover: string;
}

interface CertificatesResponse {
  status: string;
  message: string;
  data: Certificate[];
}

const decodeTitle = (title: string) => {
  try {
    return Buffer.from(title, 'base64').toString('utf-8');
  } catch  {
    return title;
  }
};

async function getCertificates(): Promise<Certificate[] | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const response = await fetch(`${apiUrl}/certificates`, {
      cache: 'no-store',
    });

    if (!response.ok) throw new Error('Failed to fetch certificates');
    
    const data: CertificatesResponse = await response.json();
    if (data.status !== 'success') throw new Error(data.message);
    
    return data.data;
  } catch (err) {
    console.error('Error fetching certificates:', err);
    return null;
  }
}

export default async function CertificatesPage() {
  const certificates = await getCertificates();

  if (!certificates) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-red-600 font-medium mb-4">Error loading certificates</p>
        <a
          href=""
          className="px-6 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md"
        >
          Retry
        </a>
      </div>
    );
  }

  if (certificates.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 font-medium">No certificates available at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">OUR ACHIEVEMENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className='text-xaidez-accent'>  
            Certificates
            </span>
          </h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of professional certifications and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((certificate, index) => {
            const decoded = decodeTitle(certificate.title);

            return (
                <div
                key={`${certificate.title}-${index}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={certificate.cover}
                    alt={decoded}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority
                  />
                </div>
              
                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-800 line-clamp-2 h-10 lg:h-6">
                    {decoded}
                  </h3>
                </div>
              </div>
              
            );
          })}
        </div>

      </div>
    </section>
  );
}
