import Image from "next/image"
import { Product } from "@/types/product"
import { RatingStars } from "./RatingStars"
import Link from "next/link"

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <Image
        height={400}
        width={400}
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
   <Link href={`products/${product.slug}`}>

      <div className="p-4">
        <h4 className="text-lg font-medium text-gray-900 line-clamp-1">{product.title}</h4>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.subtitle}</p>
        <div className="mt-3">
          <RatingStars rating={product.rating} />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-gray-500 capitalize">
            {product.category.replace("-", " ")}
          </span>
          <button className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors">
            View details
          </button>
        </div>
      </div>
   </Link>
    </div>
  )
}

export default ProductCard
