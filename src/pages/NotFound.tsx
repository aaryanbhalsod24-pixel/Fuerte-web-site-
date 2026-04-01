import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-[30%] h-[30%] bg-purple-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary/20 via-primary/5 to-transparent select-none">
              {t.error404}
            </h1>
            
            <div className="-mt-12 md:-mt-24 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                {t.pageNotFound}
              </h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
                {t.pageNotFoundDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:scale-95 group"
                >
                  <Home size={18} />
                  {t.returnHome}
                </Link>
                
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-foreground border border-border rounded-xl font-bold text-sm hover:bg-secondary/80 hover:-translate-y-0.5 transition-all active:scale-95"
                >
                  <ArrowLeft size={18} />
                  Go Back
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
