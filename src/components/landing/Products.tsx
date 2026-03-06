import { products } from "@/data/siteData";
import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";

const Products = () => {
  return (
    <section id="products" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Our Products</p>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              Digital Products That Drive Performance
            </h2>
                            <br></br>

          </FadeIn>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            Powerful Digital Products Built to Automate, Manage, and Grow Your Business
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <FadeIn key={product.name} delay={i * 0.08}>
                <div className="group border border-border rounded-lg p-8 hover:bg-secondary transition-colors duration-300 flex justify-between items-start h-full cursor-pointer">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-background transition-colors">
                      <Icon size={20} className="text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{product.description}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
