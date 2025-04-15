import { Search, X } from "lucide-react"
import { FilterParams } from "@/types/product"
import { useState } from "react"

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  handleSearch: (e: React.FormEvent) => void
  updateFilters: (params: FilterParams) => void
}

const SearchBar = ({ searchQuery, setSearchQuery, updateFilters }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(searchQuery)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(inputValue) 
    updateFilters({ query: inputValue, page: 1 })
  }

  const clearSearch = () => {
    setInputValue("")
    setSearchQuery("")
    updateFilters({ query: "", page: 1 })
  }

  return (
    <form onSubmit={onSubmit} className="w-full sm:max-w-md relative">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-transparent transition-all outline-none"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      {inputValue && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
      )}
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-700 transition-colors"
      >
        <Search className="w-4 h-4" />
      </button>
    </form>
  )
}

export default SearchBar