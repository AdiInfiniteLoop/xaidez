import HeroSection from "@/components/Hero";
import CategoriesSection from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUsSection  from "@/components/WhyChooseUs";
import { MetricsSection } from "@/components/MetricsSection";


//Async = SSC(Not the graphs one)
export default async function Homepage() {
  let sliders = [];
  let categories = [];
  let products = [];
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/home`);

    if (!res.ok) throw new Error("Failed to fetch");

    const json = await res.json();
    sliders = json?.data?.sliders || [];
    categories = json?.data?.categories || [];
    products = json?.data?.products || [];
  } catch (error) {
    console.error("Homepage data fetch failed:", error);
  }

  return (

    <div className=" ">
      <div className="bg-amber-50 ">
      <HeroSection slides={sliders} />
      </div>
      <div className="bg-amber-50 ">
      <CategoriesSection items={categories} />
      </div>
      <div className="bg-amber-50  hidden md:block">
        <WhyChooseUsSection />
        <FeaturedProducts products={products} />
      </div>
      <div className="bg-amber-50  block md:hidden">
        <FeaturedProducts products={products} />
        <WhyChooseUsSection />
      </div>
      <div className="bg-amber-50 ">
      <MetricsSection />
      </div>
    </div>
  );
}
