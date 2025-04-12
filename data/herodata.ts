interface HeroSlide {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
  link: string
}

export const heroSlides: HeroSlide[] = [
    {
      id: "1",
      title: "Pure & Natural",
      subtitle: "Organic Honey",
      description: "Harvested from pristine mountain flowers, our honey is 100% pure and unprocessed",
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=2000&auto=format&fit=crop",
      cta: "Shop Now",
      link: "/products/honey",
    },
    {
        id: "2",
        title: "Premium Quality",
        subtitle: "Organic Nuts",
        description: "Carefully selected and packed to preserve freshness and nutritional value",
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2000&auto=format&fit=crop",
        cta: "Explore",
        link: "/products/dry-fruits",
      },      
    {
      id: "3",
      title: "Natural Care",
      subtitle: "Skin Care Essentials",
      description: "Handcrafted skincare products made with natural ingredients for healthy skin",
      image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=2000&auto=format&fit=crop",
      cta: "Discover",
      link: "/products/skin-care",
    },
  ]
