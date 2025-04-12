import HeroSection from "@/components/Hero";
import CategoriesSection from "@/components/Categories";
import { products } from "@/data/products";

export default function Home() {
  return (
  <div>
  <HeroSection/>
  <CategoriesSection items={products} />
  </div>
  );
}
