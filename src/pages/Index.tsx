import { Helmet } from "react-helmet-async";
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
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://fuertedevelopers.com";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fuerte Developers | Real Estate & Property Development</title>
        <meta property="og:title" content="Fuerte Developers – Building Your Dreams" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={`${baseUrl}/preview.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content="Fuerte Developers – Premium real estate development company offering residential and commercial properties with quality and trust." />
        <meta property="og:site_name" content="Fuerte Developers" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fuerte Developers – Building Your Dreams" />
        <meta name="twitter:description" content="Premium real estate development company offering residential and commercial properties." />
        <meta name="twitter:image" content={`${baseUrl}/preview.png`} />
      </Helmet>
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
