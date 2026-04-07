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
import { LanguageProvider } from "./contexts/LanguageContext";
import { ModalProvider } from "./contexts/ModalContext";
import ContactModal from "./components/ContactModal";

// --- Direct imports (no lazy loading = no spinner) ---
import ServiceDetail from "./pages/ServiceDetail";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import CompanyOverview from "./pages/CompanyOverview";
import CustomerStories from "./pages/CustomerStories";
import PressMedia from "./pages/PressMedia";
import BlogPage from "./pages/BlogPage";


const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Small timeout to ensure the element is rendered before scrolling
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
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
          </Layout>
        </BrowserRouter>
      </ModalProvider>
    </LanguageProvider>
  );
};

export default App;
