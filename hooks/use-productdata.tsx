import { useState, useEffect, useCallback, useMemo } from "react"
import { Product, Category, FilterParams, ProductResponse } from "@/types/product"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import axiosInstance from "@/lib/axios"

interface UseProductDataProps {
  initialProducts: Product[]
  categories: Category[]
  searchParams: Record<string, string>
  router: AppRouterInstance
}

export const useProductData = ({ initialProducts, categories, searchParams, router }: UseProductDataProps) => {
  const [products, setProducts] = useState<Product[]>(initialProducts || [])
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.category || "")
  const [selectedCollection, setSelectedCollection] = useState<string>(searchParams.collection || "")
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.query || "")
  const [page, setPage] = useState<number>(Number.parseInt(searchParams.page || "1", 10))
  const [totalPages, setTotalPages] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const filteredCollections = useMemo(() => {
    if (selectedCategory) {
      return categories.find((cat) => cat.slug === selectedCategory)?.children || []
    }
    return categories.flatMap((category) => category.children)
  }, [categories, selectedCategory])

  const selectedCategoryTitle = useMemo(() => {
    return categories.find((c) => c.slug === selectedCategory)?.title
  }, [categories, selectedCategory])

  const selectedCollectionTitle = useMemo(() => {
    return filteredCollections.find((col: { slug: string }) => col.slug === selectedCollection)?.title
  }, [filteredCollections, selectedCollection])

  const updateFilters = useCallback((newParams: FilterParams): void => {
    const urlParams = new URLSearchParams(window.location.search)
    
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        urlParams.set(key, String(value))
      } else {
        urlParams.delete(key)
      }
    })

    router.push(`/products?${urlParams.toString()}`)
  }, [router])

  const fetchProducts = useCallback(async (): Promise<void> => {
    setIsLoading(true)
    try {
      const { data } = await axiosInstance.get<ProductResponse>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
        params: {
          page,
          limit: 12,
          category: selectedCategory,
          collection: selectedCollection,
          query: searchQuery,
        },
      })

      if (data?.data?.products) {
        setProducts(data.data.products)
        setTotalPages(data.data.totalPages)
      } else {
        setProducts([])
      }
    } catch (error) {
      console.error("Error fetching products:", error)
      setProducts([])
    } finally {
      setIsLoading(false)
    }
  }, [page, selectedCategory, selectedCollection, searchQuery])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleCategorySelect = useCallback((categorySlug: string): void => {
    if (selectedCategory === categorySlug) {
      setSelectedCategory("")
      setPage(1) 
      updateFilters({ category: "", page: 1 })
    } else {
      setSelectedCategory(categorySlug)
      setSelectedCollection("") 
      setPage(1) 
      updateFilters({ category: categorySlug, collection: "", page: 1 })
    }
  }, [selectedCategory, updateFilters])
  
  const handleCollectionSelect = useCallback((collectionSlug: string): void => {
    if (selectedCollection === collectionSlug) {
      setSelectedCollection("")
      setPage(1) 
      updateFilters({ collection: "", page: 1 })
    } else {
      setSelectedCollection(collectionSlug)
      setPage(1) 
      updateFilters({ collection: collectionSlug, page: 1 })
    }
  }, [selectedCollection, updateFilters])

  const handleSearch = useCallback((e: React.FormEvent): void => {
    e.preventDefault()
    updateFilters({ query: searchQuery, page: 1 })
  }, [searchQuery, updateFilters])

  const handlePagination = useCallback((newPage: number): void => {
    setPage(newPage)
    updateFilters({ page: newPage })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [updateFilters])

  const clearFilters = useCallback((): void => {
    setSelectedCategory("")
    setSelectedCollection("")
    setSearchQuery("")
    setPage(1)
    updateFilters({ category: "", collection: "", query: "", page: 1 })
  }, [updateFilters])

  return {
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
    setSearchQuery,
    handleCategorySelect,
    handleCollectionSelect,
    handleSearch,
    handlePagination,
    clearFilters,
    updateFilters
  }
}
