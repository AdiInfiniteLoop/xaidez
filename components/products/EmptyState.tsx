interface EmptyStateProps {
    clearFilters: () => void
  }
  
  const EmptyState = ({ clearFilters }: EmptyStateProps) => {
    return (
      <div className="bg-white rounded-lg p-8 text-center shadow-sm border border-gray-100">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        <button
          onClick={clearFilters}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Clear all filters
        </button>
      </div>
    )
  }
  
  export default EmptyState