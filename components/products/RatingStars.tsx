import { Star } from "lucide-react"

interface RatingStarsProps {
  rating: string
}

export const RatingStars = ({ rating }: RatingStarsProps) => {
  const numRating = Number.parseFloat(rating)
  const fullStars = Math.floor(numRating)
  const hasHalfStar = numRating - fullStars >= 0.5

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < fullStars
              ? "text-amber-400 fill-amber-400"
              : i === fullStars && hasHalfStar
                ? "text-amber-400 fill-amber-400"
                : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating}</span>
    </div>
  )
}