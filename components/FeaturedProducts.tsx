import Image from "next/image"
import { products } from "@/data/featured-product"

export default function FeaturedProducts() {
  return (
    <div className="w-full max-w-7xl mx-auto px-3 py-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 relative inline-block pb-2 mb-2">
          Featured Products
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-xaidez-accent"></span>
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
        Handpicked Kashmiri favorites—where tradition meets trending.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-xaidez-light rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden transform hover:-translate-y-1"
          >
            <div className="relative w-full aspect-square bg-gray-50">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                className="object-contain transition-transform duration-300 hover:scale-105"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority
              />
            </div>
            
            <div className="p-2">
              <h3 className="text-xs md:text-sm font-medium text-xaidez-secondary mb-1 line-clamp-2 h-8">{product.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs md:text-sm font-bold text-xaidez-accent">₹{product.price.toFixed(2)}</span>
              </div>
              <button className="w-full py-1 px-2 md:py-2 md:px-4  bg-green-500 text-white text-xs md:text-sm font-medium rounded-md hover:bg-xaidez-accent transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-md active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-3 w-3 fill-current">
                  <path d="M16.001 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.817.743 5.435 2.034 7.725L2 30l6.462-2.123A13.271 13.271 0 0016 29.334c7.364 0 13.333-5.969 13.333-13.334S23.365 2.667 16.001 2.667zm0 24a10.594 10.594 0 01-5.366-1.464l-.383-.228-3.835 1.26 1.262-3.729-.25-.395A10.605 10.605 0 015.333 16c0-5.89 4.777-10.667 10.667-10.667 5.889 0 10.667 4.777 10.667 10.667S21.89 26.667 16 26.667zm5.883-7.982c-.323-.161-1.914-.942-2.21-1.05-.296-.108-.511-.161-.727.161-.215.323-.834 1.05-1.023 1.267-.188.215-.376.242-.7.081-.323-.162-1.364-.502-2.599-1.599-.96-.855-1.609-1.91-1.797-2.234-.188-.323-.02-.498.143-.659.147-.146.323-.38.485-.57.162-.188.215-.323.323-.538.108-.215.054-.404-.027-.57-.08-.161-.727-1.751-.996-2.41-.262-.629-.529-.544-.727-.554-.188-.008-.404-.01-.62-.01a1.197 1.197 0 00-.863.404c-.296.322-1.128 1.102-1.128 2.685s1.155 3.116 1.317 3.33c.162.215 2.274 3.474 5.508 4.873.769.33 1.368.526 1.834.672.771.246 1.472.211 2.027.128.618-.092 1.914-.78 2.184-1.534.269-.754.269-1.401.188-1.535-.08-.134-.296-.215-.62-.377z" />
                </svg>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}