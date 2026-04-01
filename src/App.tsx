import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Vision from "./components/landing/Vision";
import Products from "./components/landing/Products";
import Services from "./components/landing/Services";
import Team from "./components/landing/Team";
import Testimonials from "./components/landing/Testimonials";
import CTASection from "./components/landing/CTASection";
import Footer from "./components/landing/Footer";
import ServiceDetail from "./pages/ServiceDetail";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import CompanyOverview from "./pages/CompanyOverview";
import CustomerStories from "./pages/CustomerStories";
import { LanguageProvider } from "./contexts/LanguageContext";

// ─── ScrollToTop Helper ──────────────────────────────────────────────────────
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ─── Shared Layout ───────────────────────────────────────────────────────────
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Products />
      <Services />
      <Team />
      <Testimonials />
      <CTASection />
    </>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/company-overview" element={<CompanyOverview />} />
            <Route path="/customer-stories" element={<CustomerStories />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
