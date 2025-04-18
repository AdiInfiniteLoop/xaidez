export const dynamic = 'force-dynamic';

import ProductsPage from "@/components/products/Productspage"
import { routeMetadata } from "@/lib/metadata";
import { getData } from "@/lib/getData";

interface PageProps {
  searchParams: Record<string, string>
}

export async function generateMetadata() {
  return routeMetadata["/products"]
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
