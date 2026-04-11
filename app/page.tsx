import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import FreshDrops from "@/components/FreshDrops";
import Categories from "@/components/Categories";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <FreshDrops />
      <Categories />
      <WhyUs />
      <Reviews />
      <Newsletter />
      <Footer />
    </main>
  );
}
