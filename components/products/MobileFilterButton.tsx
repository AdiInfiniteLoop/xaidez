import { Filter, ChevronDown } from "lucide-react"

interface MobileFilterButtonProps {
  isOpen: boolean
  toggleOpen: () => void
}

export const MobileFilterButton = ({ isOpen, toggleOpen }: MobileFilterButtonProps) => {
  return (
    <button
      onClick={toggleOpen}
      className="sm:hidden flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
    >
      <Filter className="w-4 h-4" />
      Filters
      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </button>
  )
}