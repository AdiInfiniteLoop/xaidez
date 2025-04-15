import { X } from "lucide-react"
import { FilterParams } from "@/types/product"

interface ActiveFiltersProps {
  selectedCategory: string
  selectedCollection: string
  searchQuery: string
  selectedCategoryTitle: string | undefined
  selectedCollectionTitle: string | undefined
  updateFilters: (params: FilterParams) => void
  setSearchQuery: (query: string) => void
  setSelectedCategory: (category: string) => void
  setSelectedCollection: (collection: string) => void
}

const ActiveFilters = ({
  selectedCategory,
  selectedCollection,
  searchQuery,
  selectedCategoryTitle,
  selectedCollectionTitle,
  updateFilters,
  setSearchQuery,
  setSelectedCategory,
  setSelectedCollection
}: ActiveFiltersProps) => {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {selectedCategory && (
        <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
          <span className="mr-1 text-gray-500">Category:</span>
          <span className="font-medium mr-1">{selectedCategoryTitle}</span>
          <button
            onClick={() => {
              setSelectedCategory("")
              updateFilters({ category: "", page: 1 })
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {selectedCollection && (
        <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
          <span className="mr-1 text-gray-500">Collection:</span>
          <span className="font-medium mr-1">{selectedCollectionTitle}</span>
          <button
            onClick={() => {
              setSelectedCollection("")
              updateFilters({ collection: "", page: 1 })
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {searchQuery && (
        <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
          <span className="mr-1 text-gray-500">Search:</span>
          <span className="font-medium mr-1 line-clamp-1">{searchQuery}</span>
          <button
            onClick={() => {
              setSearchQuery("")
              updateFilters({ query: "", page: 1 })
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}

export default ActiveFilters