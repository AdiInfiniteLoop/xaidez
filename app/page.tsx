import HeroSection from "@/components/Hero";
import CategoriesSection from "@/components/Categories";
import { products } from "@/data/products";
import FeaturedProducts from "@/components/FeaturedProducts";
import { WhyChooseUsSection } from "@/components/WhyChooseUs";
import { MetricsSection } from "@/components/MetricsSection";

export default function Home() {
  return (
  <div>
  <HeroSection/>
  <CategoriesSection items={products} />
  <WhyChooseUsSection/>
  <FeaturedProducts/>
  <MetricsSection/>
  </div>
  );
}
