import { BrowserRouter, Routes, Route } from "react-router-dom";
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



const Home = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/team" element={<TeamPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
