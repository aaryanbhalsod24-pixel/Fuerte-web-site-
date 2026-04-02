import Footer from "@/components/landing/Footer";
import Services from "@/components/landing/Services";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gradient">
              Our Expertise & Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business
              thrive in the modern landscape.
            </p>
          </motion.div>

          <Services />
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
