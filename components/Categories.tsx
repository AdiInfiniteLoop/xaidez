import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Category {
  slug: string;
  title: string;
  image: string;
}

interface Props {
  items: Category[];
}

const CategoriesSection: React.FC<Props> = ({ items }) => {
  if (items.length > 0) 
  {

    return (
      <section className="w-full bg-amber-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">EXPLORE</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Discover by <span className="text-xaidez-accent">Category</span>
          </h2>
          <div className="w-16 h-1 bg-xaidez-accent mx-auto mt-4"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Explore a world of Kashmiri treasures—curated just for you, across every category.
          </p>
        </div>

        <div className="overflow-hidden">
          <Marquee pauseOnHover speed={70} gradient  gradientWidth={60}>
            {items.map((item) => (
              <Link
              href={`/products?category=${item.slug}`}
              key={item.slug}
              className="m-4 w-64 h-64 flex-shrink-0 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center p-5 cursor-pointer group"
              >
                <div className="relative  w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-amber-100 group-hover:border-amber-200 transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.title || 'Category Image'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 200px"
                    />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:text-xaidez-accent transition-colors duration-300">
                  {item.title || 'Category Name'}
                </h3>
                <div className="mt-1 flex items-center text-sm text-xaidez-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Browse collection</span>
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
}
};

export default CategoriesSection;