import Link from "next/link"
import { notFound } from "next/navigation"
import parse from 'html-react-parser'
import ProductImageGallery from "@/components/ProductImage"
import ProductActions from "@/components/ProductAction"
import ExpandableText from "@/components/Expandabletext"
import axios from 'axios';
import { RatingStars } from "@/components/products/RatingStars"

interface ProductResponse {
  status: string
  message: string
  data: ProductData
}

interface ProductData {
  product_id: string
  slug: string
  title: string 
  subtitle: string 
  sku: string
  rating: string
  description: string 
  cover: string
  images: string[]
  category: Category
  collection: Collection
}

interface Category {
  title: string
  slug: string
}

interface Collection {
  title: string
  slug: string
}

function decodeBase64(str: string): string {
  try {
    return Buffer.from(str, "base64").toString("utf-8")
  } catch (error) {
    console.error("Error decoding base64:", error)
    return str
  }
}


async function getProduct(slug: string): Promise<ProductData> {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${slug}`);

    const data: ProductResponse = response.data;

    if (data.status !== "success") {
      throw new Error(data.message || "Failed to fetch product data");
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    notFound(); 
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  return {
    title: `${decodeBase64(product.title)} | Xaidez `,
    description: decodeBase64(product.subtitle),
    openGraph: {
      images: [product.cover],
    },
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  const title = decodeBase64(product.title)
  const subtitle = decodeBase64(product.subtitle)
  const decodedDescription = decodeBase64(product.description)

  const allImages = [product.cover, ...product.images.filter((img) => img !== product.cover)]

  return (
    <main className="flex flex-col bg-amber-50">
      <div className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="mb-6">
            <nav className="flex text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700 transition">
                Home
              </Link>
              <span className="mx-2">/</span>
              {product.category.title}
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{title}</span>
            </nav>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
            <div>
              <ProductImageGallery images={allImages} title={title} />
              
              <div className="mt-4">
                <ProductActions productName={title}/>
              </div>
            </div>
  
            <div className="space-y-8">
              {product.collection && (
                <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {product.collection.title}
                </div>
              )}
  
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
                <p className="text-xl text-gray-600">{subtitle}</p>
              </div>
  
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {<RatingStars rating={product.rating}/>}
                </div>
                <span className="ml-2 text-gray-600 font-medium"></span>
              </div>
  
              <div className="text-sm text-gray-500">
                SKU: <span className="font-medium">{product.sku}</span>
              </div>
  
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Product Description</h2>
                <ExpandableText maxLines={6}>
                  {parse(decodedDescription)}
                </ExpandableText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}