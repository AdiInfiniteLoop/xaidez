import HeroSection from "@/components/Hero";
import CategoriesSection from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import { WhyChooseUsSection } from "@/components/WhyChooseUs";
import { MetricsSection } from "@/components/MetricsSection";

export default async function Homepage() {
  let sliders = [];
  let categories = [];
  let products = [];

  try {
    const res = await fetch("http://api.snowbankkashmir.com/api/v1/home", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    const json = await res.json();
    sliders = json?.data?.sliders || [];
    categories = json?.data?.categories || [];
    products = json?.data?.products || [];
  } catch (error) {
    console.error("Homepage data fetch failed:", error);
  }

  return (
    <div>
      <HeroSection slides={sliders} />
      {/* <CategoriesSection items={categories} />
      <div className="hidden md:block">
        <WhyChooseUsSection />
        <FeaturedProducts products={products} />
      </div>
      <div className="block md:hidden">
        <FeaturedProducts products={products} />
        <WhyChooseUsSection />
      </div>
      <MetricsSection /> */}
    </div>
  );
}
