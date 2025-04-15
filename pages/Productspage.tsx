"use client"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import ProductFilters from "@/components/products/ProductFilters"
import ProductGrid from "@/components/products/ProductGrid"
import SearchBar from "@/components/products/SearchBar"
import ActiveFilters from "@/components/products/ActiveFilters"
import Pagination from "@/components/ui/Pagination"
import { useProductData } from "@/hooks/use-productdata"
import { MobileFilterButton } from "@/components/products/MobileFilterButton"
import { Product, Category } from "@/types/product"

interface ProductsPageProps {
  initialProducts: Product[]
  categories: Category[]
  searchParams: Record<string, string>
}

const ProductsPage = ({ initialProducts, categories, searchParams }: ProductsPageProps) => {
  const router = useRouter()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false)

  const {
    products,
    isLoading,
    totalPages,
    page,
    selectedCategory,
    selectedCollection,
    searchQuery,
    filteredCollections,
    selectedCategoryTitle,
    selectedCollectionTitle,
    handleCategorySelect,
    handleCollectionSelect,
    handleSearch,
    handlePagination,
    clearFilters,
    updateFilters,
    setSearchQuery
  } = useProductData({
    initialProducts,
    categories,
    searchParams,
    router
  })

  const hasActiveFilters = selectedCategory || selectedCollection || searchQuery

  const toggleMobileFilters = useCallback(() => {
    setMobileFiltersOpen(!mobileFiltersOpen)
  }, [mobileFiltersOpen])

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          updateFilters={updateFilters}
        />

        <MobileFilterButton 
          isOpen={mobileFiltersOpen}
          toggleOpen={toggleMobileFilters}
        />
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row gap-8">
          <ProductFilters 
            categories={categories}
            filteredCollections={filteredCollections}
            selectedCategory={selectedCategory}
            selectedCollection={selectedCollection}
            handleCategorySelect={handleCategorySelect}
            handleCollectionSelect={handleCollectionSelect}
            hasActiveFilters={hasActiveFilters}
            clearFilters={clearFilters}
            isMobile={false}
          />

          {mobileFiltersOpen && (
            <ProductFilters 
              categories={categories}
              filteredCollections={filteredCollections}
              selectedCategory={selectedCategory}
              selectedCollection={selectedCollection}
              handleCategorySelect={handleCategorySelect}
              handleCollectionSelect={handleCollectionSelect}
              hasActiveFilters={hasActiveFilters}
              clearFilters={clearFilters}
              isMobile={true}
            />
          )}

          <div className="flex-1">
            {hasActiveFilters && (
              <ActiveFilters 
                selectedCategory={selectedCategory}
                selectedCollection={selectedCollection}
                searchQuery={searchQuery}
                selectedCategoryTitle={selectedCategoryTitle}
                selectedCollectionTitle={selectedCollectionTitle}
                updateFilters={updateFilters}
                setSearchQuery={setSearchQuery}
                setSelectedCategory={(val: string) => handleCategorySelect(val)}
                setSelectedCollection={(val: string) => handleCollectionSelect(val)}
              />
            )}

            <ProductGrid 
              products={products}
              isLoading={isLoading}
              clearFilters={clearFilters}
            />

            {totalPages > 1 && (
              <Pagination 
                page={page}
                totalPages={totalPages}
                handlePagination={handlePagination}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage