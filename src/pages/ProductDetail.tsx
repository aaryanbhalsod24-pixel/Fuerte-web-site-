import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useModal } from "@/contexts/ModalContext";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { openModal } = useModal();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/#products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 text-primary">
                <Icon size={40} />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Included Solutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(
                    product.subItems || [
                      {
                        name: "User-friendly Interface",
                        description: "Intuitive and easy-to-use design.",
                      },
                      {
                        name: "Real-time Analytics",
                        description: "Live data tracking and reporting.",
                      },
                      {
                        name: "Secure Data Management",
                        description: "Enterprise-grade security protocols.",
                      },
                      {
                        name: "Cloud Synchronization",
                        description: "Access your data from anywhere.",
                      },
                    ]
                  ).map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-1 p-4 rounded-xl bg-muted/30 border border-border/50"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-primary flex-shrink-0"
                        />
                        <span className="font-bold text-sm">{item.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground ml-6 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                >
                  Request Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl"
            >
              <img
                src={`https://picsum.photos/seed/${product.slug}/1200/800`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
