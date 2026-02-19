import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VideoShowcase } from "@/components/VideoShowcase";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CraftmanshipShowcase } from "@/components/CraftmanshipShowcase";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VideoShowcase />
        <FeaturedProducts />
        <CraftmanshipShowcase />
        <About />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
