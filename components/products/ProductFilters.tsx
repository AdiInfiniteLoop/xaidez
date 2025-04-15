import { X } from "lucide-react"
import { Category, CategoryChild } from "@/types/product"

interface ProductFiltersProps {
  categories: Category[]
  filteredCollections: CategoryChild[]
  selectedCategory: string
  selectedCollection: string
  handleCategorySelect: (category: string) => void
  handleCollectionSelect: (collection: string) => void
  hasActiveFilters: boolean | string
  clearFilters: () => void
  isMobile: boolean
}

const ProductFilters = ({
  categories,
  filteredCollections,
  selectedCategory,
  selectedCollection,
  handleCategorySelect,
  handleCollectionSelect,
  hasActiveFilters,
  clearFilters,
  isMobile
}: ProductFiltersProps) => {
  if (isMobile) {
    return (
      <div className="sm:hidden w-full space-y-4 bg-white p-4 rounded-lg shadow-lg mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Filters</h2>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1"
            >
              <X className="w-4 h-4" /> Clear all
            </button>
          )}
        </div>
        <div className="space-y-2">
          <h3 className="font-medium text-gray-900">Categories</h3>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategorySelect(category.slug)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  category.slug === selectedCategory
                    ? "bg-gray-800 text-white font-medium"
                    : "bg-white border border-gray-200 hover:border-gray-300"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium text-gray-900">Collections</h3>
          <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
            {filteredCollections.map((collection) => (
              <button
                key={collection.slug}
                onClick={() => handleCollectionSelect(collection.slug)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  collection.slug === selectedCollection
                    ? "bg-gray-800 text-white font-medium"
                    : "bg-white border border-gray-200 hover:border-gray-300"
                }`}
              >
                {collection.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="hidden sm:block w-full sm:w-64 space-y-6 flex-shrink-0">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1"
          >
            <X className="w-4 h-4" /> Clear all
          </button>
        )}
      </div>
      
      <div className="space-y-3">
        <h3 className="font-medium text-gray-900">Categories</h3>
        <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleCategorySelect(category.slug)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                category.slug === selectedCategory
                  ? "bg-gray-800 text-white font-medium"
                  : "bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-gray-900">Collections</h3>
        <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
          {filteredCollections.map((collection) => (
            <button
              key={collection.slug}
              onClick={() => handleCollectionSelect(collection.slug)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                collection.slug === selectedCollection
                  ? "bg-gray-800 text-white font-medium"
                  : "bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {collection.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductFilters