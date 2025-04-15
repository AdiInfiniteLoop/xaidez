import ProductsPage from "@/pages/Productspage"
import { ProductResponse, Category } from "@/types/product"

interface PageProps {
  searchParams: Record<string, string>
}

interface CategoryResponse {
  status: string
  message: string
  data: Category[]
}

async function getData(searchParams: Record<string, string>): Promise<{
  products: ProductResponse | null
  categories: CategoryResponse | null
}> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL

  try {
    const [productsRes, categoriesRes] = await Promise.all([
      fetch(`${baseUrl}/products?${new URLSearchParams(searchParams)}`, {
        cache: "no-store",
      }),
      fetch(`${baseUrl}/categories`, { cache: "no-store" }),
    ])

    const products: ProductResponse = await productsRes.json()
    const categories: CategoryResponse = await categoriesRes.json()

    return {
      products: productsRes.ok ? products : null,
      categories: categoriesRes.ok ? categories : null,
    }
  } catch (error) {
    console.error("Failed to fetch products or categories:", error)
    return {
      products: null,
      categories: null,
    }
  }
}

export default async function Page({ searchParams }: PageProps) {
  const { products, categories } = await getData(searchParams)

  return (
    <ProductsPage
      initialProducts={products?.data?.products || []}
      categories={categories?.data || []}
      searchParams={searchParams}
    />
  )
}
