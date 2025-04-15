import ProductsPage from "@/pages/Productspage";

async function getData(searchParams: any) {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [productsRes, categoriesRes] = await Promise.all([
    fetch(`${baseUrl}/products?${new URLSearchParams(searchParams)}`, {
      cache: "no-store",
    }),
    fetch(`${baseUrl}/categories`, { cache: "no-store" }),
  ]);

  const products = await productsRes.json();
  const categories = await categoriesRes.json();

  return { products, categories };
}

export default async function Page({ searchParams }: { searchParams: any }) {
  const { products, categories } = await getData(searchParams);

  return (
    <ProductsPage
      initialProducts={products.data}
      categories={categories.data}
      searchParams={searchParams}
    />
  );
}


/* 
        const { data } = await axios.get<ProductResponse>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {

*/