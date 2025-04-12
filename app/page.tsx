import HeroSection from "@/components/Hero";
import CategoriesSection from "@/components/Categories";
import { products } from "@/data/products";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
  <div>
  <HeroSection/>
  <CategoriesSection items={products} />
  <FeaturedProducts/>
  </div>
  );
}
