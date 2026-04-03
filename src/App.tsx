import { Suspense, lazy, useEffect } from "react";
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
import { LanguageProvider } from "./contexts/LanguageContext";
import { ModalProvider } from "./contexts/ModalContext";
import ContactModal from "./components/ContactModal";

// --- Lazy Load Pages for performance ---
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const CompanyOverview = lazy(() => import("./pages/CompanyOverview"));
const CustomerStories = lazy(() => import("./pages/CustomerStories"));
const PressMedia = lazy(() => import("./pages/PressMedia"));
const BlogPage = lazy(() => import("./pages/BlogPage"));


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
      <ContactModal />
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
      <ModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/company-overview" element={<CompanyOverview />} />
                <Route path="/customer-stories" element={<CustomerStories />} />
                <Route path="/press-media" element={<PressMedia />} />
                <Route path="/blog" element={<BlogPage />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </ModalProvider>
    </LanguageProvider>
  );
};

export default App;
