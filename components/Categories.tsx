import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  categoryName: string;
  imageUrl: string;
}

interface Props {
  items: Product[];
}

const CategoriesSection: React.FC<Props> = ({ items }) => {
  return (
    <div className="py-10 px-4  max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 relative pb-2">
          Categories
          <span className="absolute bottom-0 left-0 w-24 h-1 bg-xaidez-accent"></span>
        </h2>
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {items.map((item) => (
          <div
            key={item.id}
            className="m-4 w-52 h-[17rem] flex-shrink-0 rounded-2xl bg-xaidez-light shadow-lg p-4 hover:shadow-xl transition-all duration-300 flex flex-col items-center"
          >
            <div className="relative w-32 h-32 rounded-lg overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>

            <div className="mt-4 flex flex-col items-center text-center space-y-1">
              <p className="text-base font-semibold text-xaidez-secondary leading-tight">
                {item.name}
              </p>
              <p className="text-sm text-gray-500">{item.categoryName}</p>
              <p className="text-base text-xaidez-accent font-bold">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CategoriesSection;
