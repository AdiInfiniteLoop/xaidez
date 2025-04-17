import { Star } from "lucide-react"

interface RatingStarsProps {
  rating: string
}

export const RatingStars = ({ rating }: RatingStarsProps) => {
  const numRating = Number.parseFloat(rating)
  const fullStars = Math.floor(numRating)
  const hasHalfStar = Math.abs(numRating - fullStars) == 0.5

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < fullStars) {
          return (
            <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
          )
        } else if (i === fullStars && hasHalfStar) {
          return (
            <div key={i} className="relative w-5 h-5">
              <Star className="absolute w-5 h-5 text-gray-300" />
              <Star
                className="absolute w-5 h-5 text-amber-400 fill-amber-400"
                style={{
                  clipPath: "inset(0 50% 0 0)"
                }}
              />
            </div>
          )
        } else {
          return <Star key={i} className="w-5 h-5 text-gray-300" />
        }
      })}
      <span className="ml-1 text-base text-gray-600">{rating}</span>
    </div>
  )
}
