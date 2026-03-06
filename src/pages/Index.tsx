import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Vision from "@/components/landing/Vision";
import Products from "@/components/landing/Products";
import Services from "@/components/landing/Services";
import Team from "@/components/landing/Team";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Vision />
      <Products />
      <Services />
      <Team />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
