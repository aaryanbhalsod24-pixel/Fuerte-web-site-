import { products } from "@/data/products";
import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/LanguageContext";

const Products = () => {
  const { t } = useTranslation();

  const hoverClasses: Record<string, string> = {
    "Inventory & Billing": "hover:bg-[#0C6B0F]",
    HRMS: "hover:bg-[#820274]",
    "Smart Parking": "hover:bg-[#FFC107]",
    "Customize CRM": "hover:bg-[#0F1D41]",
    "Aapka Care": "hover:bg-[#0284c7]",
  };

  // White text on hover cards
  const whiteTextCards = [
    "Inventory & Billing",
    "HRMS",
    "Aapka Care",
    "Customize CRM",
  ];

  // Black text on hover cards
  const blackTextCards = ["Smart Parking"];

  // Helper to get translated name and description
  const getProductTranslations = (name: string) => {
    switch (name) {
      case "Inventory & Billing":
        return { name: t.prodInventory, desc: t.prodInventoryDesc };
      case "Aapka Care":
        return { name: t.prodHealthcare, desc: t.prodHealthcareDesc };
      case "Customize CRM":
        return { name: t.prodCRM, desc: t.prodCRMDesc };
      case "HRMS":
        return { name: t.prodHRMS, desc: t.prodHRMSDesc };
      case "Smart Parking":
        return { name: t.prodParking, desc: t.prodParkingDesc };
      default:
        return { name, desc: "" };
    }
  };

  return (
    <section id="products" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {t.productsLabel}
          </p>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              {t.productsTitle}
            </h2>
            <br />
          </FadeIn>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            {t.productsDesc}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((group, i) => {
            const Icon = group.icon;
            const productHoverClass =
              hoverClasses[group.name] || "hover:bg-primary";

            const isWhiteTextHover = whiteTextCards.includes(group.name);
            const isBlackTextHover = blackTextCards.includes(group.name);

            const { name: translatedName } = getProductTranslations(group.name);

            const CardContent = (
              <div
                className={`
                  border border-border rounded-xl p-8 transition-all duration-500 ease-in-out
                  flex flex-col h-full cursor-pointer bg-white/80 hover:shadow-2xl hover:-translate-y-1
                  ${productHoverClass}
                `}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-white/30">
                    <Icon
                      size={24}
                      className={`transition-all duration-300 text-foreground ${
                        isWhiteTextHover
                          ? "group-hover:text-white"
                          : isBlackTextHover
                          ? "group-hover:text-black"
                          : ""
                      }`}
                    />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className={`text-muted-foreground transition-all duration-300 group-hover:scale-110 ${
                      isWhiteTextHover
                        ? "group-hover:text-white"
                        : isBlackTextHover
                        ? "group-hover:text-black"
                        : ""
                    }`}
                  />
                </div>

                <div className="space-y-6">
                  <h3
                    className={`font-display text-2xl font-bold text-foreground transition-all duration-300 ${
                      isWhiteTextHover
                        ? "group-hover:text-white"
                        : isBlackTextHover
                        ? "group-hover:text-black"
                        : ""
                    }`}
                  >
                    {translatedName}
                  </h3>

                  <div className="space-y-4">
                    {group.subItems.map((item, index) => (
                      <div key={item.name} className="space-y-1">
                        {index !== 0 && (
                          <div
                            className={`h-[1px] w-full mb-4 opacity-10 ${
                              isWhiteTextHover ? "bg-white" : "bg-foreground"
                            }`}
                          />
                        )}
                        <div className="flex items-start gap-2">
                          <div
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              isWhiteTextHover ? "bg-white/60" : "bg-primary"
                            } transition-colors group-hover:bg-current`}
                          />
                          <div>
                            <h4
                              className={`text-sm font-bold leading-none ${
                                isWhiteTextHover
                                  ? "group-hover:text-white"
                                  : "group-hover:text-black"
                              } transition-colors mb-1`}
                            >
                              {item.name}
                            </h4>
                            <p
                              className={`text-xs ${
                                isWhiteTextHover
                                  ? "text-muted-foreground group-hover:text-white/80"
                                  : "text-muted-foreground group-hover:text-black/70"
                              } transition-colors leading-relaxed`}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );

            return (
              <FadeIn key={group.name} delay={i * 0.08} className="h-full">
                {group.externalUrl ? (
                  <a
                    href={group.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <Link
                    to={`/product/${group.slug}`}
                    className="block h-full group"
                  >
                    {CardContent}
                  </Link>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
