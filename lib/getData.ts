import { Category, ProductResponse } from "@/types/product";
import axiosInstance from "./axios";



interface CategoryResponse {
  status: string
  message: string
  data: Category[]
}

export async function getData(searchParams: Record<string, string>): Promise<{
    products: ProductResponse | null;
    categories: CategoryResponse | null;
  }> {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        axiosInstance.get(`${baseUrl}/products`, { params: searchParams }),
        axiosInstance.get(`${baseUrl}/categories`),
      ]);
  
      const products: ProductResponse = productsRes.data;
      const categories: CategoryResponse = categoriesRes.data;
      await new Promise((resolve) => setTimeout(resolve, 2000));
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