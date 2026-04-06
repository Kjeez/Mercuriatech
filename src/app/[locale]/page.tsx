import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import ProductGrid from "@/components/ProductGrid";
import Statement from "@/components/Statement";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <ProductGrid />
      <Statement />
      <Industries />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
