'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HotButton from './HotButton1';

interface Product {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  rating: number;
  category: string;
  price: number;
  originalPrice?: number;
}

interface Props {
  products: Product[];
}

const FeaturedProducts: React.FC<Props> = ({ products }) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  if (products.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 font-medium">No featured products available at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">FEATURED PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Finest Kashmiri Delicacies
          </h2>
          <div className="w-24 h-1 bg-xaidez-accent mx-auto mb-6"></div>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked Kashmiri favorites—where tradition meets exceptional taste, delivered fresh to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              onMouseEnter={() => setHoveredProduct(product.slug)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className={`object-cover w-full h-full transform transition-transform duration-500 ${
                    hoveredProduct === product.slug ? 'scale-110' : 'scale-100'
                  }`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority
                />
                {product.originalPrice && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                )}

                <div className="hidden lg:flex absolute inset-0 items-end bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300">
                  <p className="text-white text-base p-4 w-full line-clamp-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                    {product.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-medium uppercase text-xaidez-hoveraccent">{product.category}</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-xaidez-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-xs ml-1 text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-gray-800  line-clamp-2 h-10 lg:h-6">{product.title}</h3>

                <p className="text-sm text-gray-600 mb-2 line-clamp-2 lg:hidden">{product.subtitle}</p>
              </div>

              <div className="px-4 pb-4">
              <Link href={`/products/${product.slug}`}>
                <button className="w-full py-3 bg-white border border-xaidez-accent text-xaidez-hoveraccent font-medium rounded-md hover:bg-xaidez-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
                  <span>See More</span>
                </button>
              </Link>
            </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-12">
        <HotButton text='View All Products' href='/products'/>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
