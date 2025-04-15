import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  page: number
  totalPages: number
  handlePagination: (page: number) => void
}

const Pagination = ({ page, totalPages, handlePagination }: PaginationProps) => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white shadow-sm">
        <button
          onClick={() => handlePagination(page - 1)}
          disabled={page <= 1}
          className="inline-flex h-10 w-10 items-center justify-center rounded-l-lg border-r border-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed text-gray-600 hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center px-4">
          <span className="text-sm font-medium">
            Page {page} of {totalPages}
          </span>
        </div>

        <button
          onClick={() => handlePagination(page + 1)}
          disabled={page >= totalPages}
          className="inline-flex h-10 w-10 items-center justify-center rounded-r-lg border-l border-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed text-gray-600 hover:bg-gray-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default Pagination