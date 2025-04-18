import { notFound } from "next/navigation";

interface ProductResponse {
  status: string;
  message: string;
  data: ProductData;
}

export interface ProductData {
  product_id: string;
  slug: string;
  title: string;
  subtitle: string;
  sku: string;
  rating: string;
  description: string;
  cover: string;
  images: string[];
  category: Category;
  collection: Collection;
}

interface Category {
  title: string;
  slug: string;
}

interface Collection {
  title: string;
  slug: string;
}

function decodeBase64(str: string): string {
  try {
    return Buffer.from(str, "base64").toString("utf-8");
  } catch (error) {
    console.error("Error decoding base64:", error);
    return str;
  }
}

export async function getProduct(slug: string): Promise<ProductData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${slug}`, {
    cache: 'no-store',
    headers: {
      'Authorization': `${process.env.TOKEN}`,
    },
  });
  
  if (!res.ok) {
    console.error("Failed to fetch product:", res.statusText);
    notFound();
  }

  const data: ProductResponse = await res.json();

  if (data.status !== "success") {
    console.error("Error from API:", data.message);
    notFound();
  }

  return data.data;
}

export function decodeTitle(str: string) {
  return decodeBase64(str);
}
