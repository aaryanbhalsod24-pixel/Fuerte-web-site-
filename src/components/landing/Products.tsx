import { products } from "@/data/products";
import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const hoverClasses = {
    "BillingSphere POS": "hover:bg-[#0C6B0F]",
    "Be On Time (BOT)": "hover:bg-[#820274]",
    "Smart Parking App": "hover:bg-[#FFC107]",
    "Customized CRM System": "hover:bg-[#b9adad]",
    "Hospital Appointment & Listing System": "hover:bg-[#0284c7]",
    "Spa Management System": "hover:bg-[#0F1D41]",
    "Laboratory Management System": "hover:bg-[#48549c]",
    "Delivery Management App": "hover:bg-[#3D0000]",
  };


  const ExternalURL = [
    "https://billingsphere.com/",
    "https://beontimeofficial.com/",
    "https://appka-parking-new.netlify.app/",
    "https://appka-parking-new.netlify.app/",
    "https://aapka-care-new.netlify.app/",
    "https://micasacare.com/",
    "https://micasacare.com/",
    "https://micasacare.com/",
  ];


  // White text on hover cards
  const whiteTextCards = [
    "BillingSphere POS",
    "Be On Time (BOT)",
    "Hospital Appointment & Listing System",
    "Spa Management System",
    "Laboratory Management System",
    "Delivery Management App",
  ];

  // Black text on hover cards (baaki wale)
  const blackTextCards = ["Smart Parking App", "Customized CRM System"];

  return (
    <section id="products" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Products
          </p>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              Digital Products That Drive Performance
            </h2>
            <br />
          </FadeIn>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            Powerful Digital Products Built to Automate, Manage, and Grow Your
            Business
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            const productHoverClass =
              hoverClasses[product.name] || "hover:bg-primary";

            // Check which group this card belongs to
            const isWhiteTextHover = whiteTextCards.includes(product.name);
            const isBlackTextHover = blackTextCards.includes(product.name);

            const url = ExternalURL[i];
            const cardContent = (
              <div
                className={`
                group border border-border rounded-lg p-8 transition-all duration-500 ease-in-out
                flex justify-between items-start h-full cursor-pointer bg-white/80 hover:shadow-2xl
                ${productHoverClass}
              `}
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-white/30">
                    <Icon
                      size={20}
                      className={`transition-all duration-300 text-foreground ${isWhiteTextHover
                        ? "group-hover:text-white"
                        : isBlackTextHover
                          ? "group-hover:text-black"
                          : ""
                        }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-display text-lg font-semibold mb-2 text-foreground transition-all duration-300 hover:font-bold ${isWhiteTextHover
                        ? "group-hover:text-white"
                        : isBlackTextHover
                          ? "group-hover:text-black"
                          : ""
                        }`}
                    >
                      {product.name}
                    </h3>
                    <p
                      className={`text-muted-foreground text-sm leading-relaxed max-w-sm transition-all duration-300 hover:font-semibold ${isWhiteTextHover
                        ? "group-hover:text-white"
                        : isBlackTextHover
                          ? "group-hover:text-black"
                          : ""
                        }`}
                    >
                      {product.description}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className={`text-muted-foreground transition-all duration-300 flex-shrink-0 mt-1 group-hover:scale-110 ${isWhiteTextHover
                    ? "group-hover:text-white"
                    : isBlackTextHover
                      ? "group-hover:text-black"
                      : ""
                    }`}
                />
              </div>
            );

            return (
              <FadeIn key={product.name} delay={i * 0.08} className="h-full">
                <div className="h-full">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {cardContent}
                  </a>
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
