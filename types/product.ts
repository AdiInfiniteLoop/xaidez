export interface CategoryChild {
    slug: string
    title: string
  }
  
  export interface Category {
    slug: string
    title: string
    children: CategoryChild[]
  }
  
  export interface Product {
    slug: string
    title: string
    subtitle: string
    rating: string
    image: string
    category: string
    collection: string
  }
  
  export interface ProductData {
    totalPages: number
    currentPage: number
    limit: number
    products: Product[]
  }
  
  export interface ProductResponse {
    status: string
    message: string
    data: ProductData
  }
  
  export interface FilterParams {
    category?: string
    collection?: string
    query?: string
    page?: number
  }