import Image from "next/image"
import { Product } from "@/types/product"
import { RatingStars } from "./RatingStars"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      <Link href={`products/${product.slug}`}>
        <div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-4">
            <h4 className="text-lg font-medium text-gray-900 line-clamp-1">{product.title}</h4>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.subtitle}</p>
            <div className="mt-3">
              <RatingStars rating={product.rating} />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500 capitalize">
                {product.category.replace("-", " ")}
              </span>
              <div className="text-sm flex items-center gap-1 font-medium text-gray-800 group-hover:text-gray-600 transition-colors">
                View details <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition duration-300"/>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
