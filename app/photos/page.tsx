import { routeMetadata } from '@/lib/metadata';
import axios from 'axios';
import { Metadata } from 'next';
import Image from 'next/image';

interface RawGalleryItem {
  title: string;
  cover: string;
}

interface GalleryItem extends RawGalleryItem {
  decodedTitle: string;
}


export const metadata : Metadata = routeMetadata["/photos"]

const decodeBase64 = (base64String: string): string => {
  try {
    return Buffer.from(base64String, 'base64').toString('utf-8');
  } catch {
    return 'Untitled';
  }
};

export default async function ImageGalleryPage() {
  let gallery: GalleryItem[] = [];

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/photos`);
  
    const result = response.data;
  
    if (result.status !== 'success' || !Array.isArray(result.data)) {
      throw new Error('Invalid data');
    }
  
    gallery = result.data.map((item: RawGalleryItem) => ({
      ...item,
      decodedTitle: decodeBase64(item.title),
    }));
  } catch (err) {
    console.error('Gallery fetch error:', err);
  }
  
  if (!gallery.length) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 font-medium">
          No images available at the moment. Please check back later!
        </p>
      </div>
    );
  }

  return (
    <section className="w-full  py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">OUR COLLECTION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Image  
        <span className='pl-2 text-xaidez-accent'>
       Gallery
       </span>

          </h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-6" />
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautiful images showcasing the finest moments captured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={item.cover}
                  alt={item.decodedTitle}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 line-clamp-2 h-10 lg:h-6">
                  {item.decodedTitle}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
