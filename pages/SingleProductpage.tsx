import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Define the interfaces for the API response
interface ProductResponse {
  status: string
  message: string
  data: ProductData
}

interface ProductData {
  product_id: string
  slug: string
  title: string // base64-encoded
  subtitle: string // base64-encoded
  sku: string
  rating: string
  description: string // contains HTML
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

// Helper function to decode base64 strings
function decodeBase64(str: string): string {
  try {
    return Buffer.from(str, "base64").toString("utf-8")
  } catch (error) {
    console.error("Error decoding base64:", error)
    return str
  }
}

// Fetch product data
async function getProduct(slug: string): Promise<ProductData> {
  try {
    const response = await fetch(`${process.env.API_URL}/products/${slug}`, {
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.status}`)
    }

    const data: ProductResponse = await response.json()

    if (data.status !== "success") {
      throw new Error(data.message || "Failed to fetch product data")
    }

    return data.data
  } catch (error) {
    console.error("Error fetching product:", error)
    notFound()
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  return {
    title: `${decodeBase64(product.title)} | Your Store Name`,
    description: decodeBase64(product.subtitle),
    openGraph: {
      images: [product.cover],
    },
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  // Decode base64 fields
  const title = decodeBase64(product.title)
  const subtitle = decodeBase64(product.subtitle)

  // Convert string rating to number for rendering stars
  const ratingValue = Number.parseFloat(product.rating)

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-4">
        <nav className="flex text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/categories/${product.category.slug}`} className="hover:text-gray-700">
            {product.category.title}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{title}</span>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200">
            <Image src={product.cover || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
          </div>

          {/* Thumbnails */}
          {product.images.length > 0 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-md border border-gray-200 cursor-pointer"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="mt-1 text-xl text-gray-500">{subtitle}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={star <= ratingValue ? "currentColor" : "none"}
                  stroke={star <= ratingValue ? "none" : "currentColor"}
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-500">{product.rating} out of 5</span>
          </div>

          {/* SKU */}
          <div className="text-sm text-gray-500">
            SKU: <span className="font-medium">{product.sku}</span>
          </div>

          {/* Collection */}
          {product.collection && (
            <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
              <Link href={`/collections/${product.collection.slug}`} className="text-gray-700 hover:text-gray-900">
                {product.collection.title}
              </Link>
            </div>
          )}

          {/* Description */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Product Description</h2>
            <div
              className="prose prose-sm max-w-none text-gray-500"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>

          {/* Add to Cart Button */}
          <div className="mt-8">
            <button
              type="button"
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
