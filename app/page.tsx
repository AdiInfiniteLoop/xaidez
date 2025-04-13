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
    <div className="hidden md:block">
    <WhyChooseUsSection/>
    <FeaturedProducts/>
    </div>
    <div className="block md:hidden">
    <FeaturedProducts/>
    <WhyChooseUsSection/>
    </div>
  <MetricsSection/>
  </div>
  );
}
