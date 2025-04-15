import { Product } from "@/types/product"
import ProductCard from "./ProductCard"
import EmptyState from "./EmptyState"
import LoadingSkeleton from "@/loaders/productsSkeleton"

interface ProductGridProps {
  products: Product[]
  isLoading: boolean
  clearFilters: () => void
}

const ProductGrid = ({ products, isLoading, clearFilters }: ProductGridProps) => {
  if (isLoading) {
    return <LoadingSkeleton />
  }

  // Ensure products is an array
  const productArray = Array.isArray(products) ? products : []

  if (productArray.length === 0) {
    return <EmptyState clearFilters={clearFilters} />
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {productArray.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid