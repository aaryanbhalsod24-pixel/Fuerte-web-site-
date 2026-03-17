import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24">
        {/* --- Hero Section --- */}
        <section className="pt-12 pb-10 md:pt-20 md:pb-16 border-b border-border/40 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-[10px] font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              Back to All Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-5"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-wider">
                    <Icon size={10} />
                    Service Overview
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                    {service.name}
                  </h1>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-1">
                  <a 
                    href="/#contact" 
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-bold text-sm hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all group"
                  >
                    Get Started Now
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 25 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden border border-border/80 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] relative z-10 bg-muted">
                  <img 
                    src={service.image || `https://picsum.photos/seed/${service.slug}/1000/750`} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent" />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[70px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-blue-500/10 rounded-full blur-[90px] -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Detailed Content Section --- */}
        {service.fullDescription && service.fullDescription.length > 0 && (
          <section className="py-16 md:py-20 bg-muted/5">
            <div className="max-w-4xl mx-auto px-6 space-y-12">
              <div className="text-center space-y-2 mb-2">
                <h2 className="text-xl md:text-3xl font-bold tracking-tight">In-Depth Solutions</h2>
                <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full" />
              </div>
              
              <div className="space-y-10">
                {service.fullDescription.map((para, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative p-7 md:p-9 rounded-[2rem] bg-background border border-border/30 shadow-md shadow-black/5 ${
                      i % 2 === 1 ? 'md:ml-10 border-l-primary/15 border-l-4' : 'md:mr-10 border-r-primary/15 border-r-4'
                    }`}
                  >
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium tracking-tight">
                      {para}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- Key Features Grid --- */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-2 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Advanced Capabilities</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Everything you need to dominate your market with our cutting-edge {service.name.toLowerCase()} infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.features?.map((feature, i) => (
                <motion.div 
                  key={feature}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group p-6 rounded-[1.5rem] bg-background border border-border/50 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />
                  
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={20} />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 tracking-tight">{feature}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Premium {feature.toLowerCase()} management built for heavy-duty performance and global scalability.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="pb-20 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-10 md:p-12 rounded-[2.5rem] bg-primary text-primary-foreground text-center relative overflow-hidden shadow-lg"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
            <div className="relative z-10 space-y-5">
              <h2 className="text-xl md:text-3xl font-bold">Ready to elevate your {service.name.toLowerCase()}?</h2>
              <p className="text-base opacity-90 max-w-lg mx-auto">
                Join hundreds of successful businesses scaling with our specialized solutions. Let's build your future today.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-1">
                <a 
                  href="/#contact" 
                  className="px-9 py-3.5 bg-background text-primary rounded-full font-bold text-base hover:scale-105 transition-transform shadow-md"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
