export const dynamic = 'force-dynamic';

import ProductsPage from "@/components/products/Productspage"
import { routeMetadata } from "@/lib/metadata";
import { ProductResponse, Category } from "@/types/product"
import axios from 'axios';

interface PageProps {
  searchParams: Record<string, string>
}

interface CategoryResponse {
  status: string
  message: string
  data: Category[]
}
export async function generateMetadata() {
  return routeMetadata["/products"]
}


async function getData(searchParams: Record<string, string>): Promise<{
  products: ProductResponse | null;
  categories: CategoryResponse | null;
}> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const [productsRes, categoriesRes] = await Promise.all([
      axios.get(`${baseUrl}/products`, { params: searchParams }),
      axios.get(`${baseUrl}/categories`),
    ]);

    const products: ProductResponse = productsRes.data;
    const categories: CategoryResponse = categoriesRes.data;

    return {
      products: productsRes.status === 200 ? products : null,
      categories: categoriesRes.status === 200 ? categories : null,
    };
  } catch (error) {
    console.error("Failed to fetch products or categories:", error);
    return {
      products: null,
      categories: null,
    };
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
