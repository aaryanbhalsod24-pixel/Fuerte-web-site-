import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 text-primary">
                <Icon size={40} />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {service.name}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">What's Included</h3>
                <ul className="space-y-4">
                  {[
                    "Custom Strategy Development",
                    "Expert Implementation",
                    "Performance Monitoring",
                    "Dedicated Account Manager",
                    "Monthly Reporting",
                    "Scale-ready Infrastructure"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <a 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all"
                >
                  Get Started
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-border bg-muted/30 aspect-[4/3]"
            >
              <img 
                src={`https://picsum.photos/seed/${service.slug}/1000/750`} 
                alt={service.name}
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
