export default function Loading() {
    return (
      <div className="bg-gray-50 min-h-screen pb-12">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          {/* Breadcrumb placeholder */}
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-4 animate-pulse"></div>
  
          {/* Main content */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0">
              {/* Product Images placeholder */}
              <div className="lg:col-span-5 bg-white p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="animate-pulse">
                  <div className="aspect-square bg-gray-200 rounded-lg"></div>
                  <div className="flex space-x-2 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-[70px] h-[70px] bg-gray-200 rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
  
              {/* Product Details placeholder */}
              <div className="lg:col-span-7 p-4 md:p-6">
                <div className="space-y-5 animate-pulse">
                  <div>
                    <div className="h-7 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/2 mt-2"></div>
                  </div>
  
                  <div className="flex items-center">
                    <div className="h-6 w-12 bg-gray-200 rounded"></div>
                    <div className="h-4 w-40 bg-gray-200 rounded ml-2"></div>
                  </div>
  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/4 mt-2"></div>
                  </div>
  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="h-6 bg-gray-200 rounded w-1/3 mb-3"></div>
                    <div className="space-y-2">
                      <div className="flex">
                        <div className="h-5 w-5 bg-gray-200 rounded-full mr-2"></div>
                        <div className="h-5 bg-gray-200 rounded w-full"></div>
                      </div>
                      <div className="flex">
                        <div className="h-5 w-5 bg-gray-200 rounded-full mr-2"></div>
                        <div className="h-5 bg-gray-200 rounded w-full"></div>
                      </div>
                    </div>
                  </div>
  
                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  </div>
  
                  <div className="flex flex-col sm:flex-row gap-3 pt-6">
                    <div className="flex-1 h-12 bg-gray-200 rounded"></div>
                    <div className="flex-1 h-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Description placeholder */}
          <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  