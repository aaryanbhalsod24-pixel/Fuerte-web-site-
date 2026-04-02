import { services } from "@/data/services";
import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/contexts/LanguageContext";

const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Helper to get translated name and description
  const getServiceTranslations = (name: string) => {
    switch (name) {
      case "Shopify Store Development":
        return { name: t.serShopify, desc: t.serShopifyDesc };
      case "Customize App Development":
        return { name: t.serAppDev, desc: t.serAppDevDesc };
      case "On/Off Page SEO":
        return { name: t.serSEO, desc: t.serSEODesc };
      case "Local SEO":
        return { name: t.serLocalSEO, desc: t.serLocalSEODesc };
      case "Social Media Marketing":
        return { name: t.serSMM, desc: t.serSMMDesc };
      case "Google / Meta Ads":
        return { name: t.serAds, desc: t.serAdsDesc };
      default:
        return { name, desc: "" };
    }
  };

  return (
    <section id="services" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {t.servicesLabel}
          </p>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              {t.servicesTitleMain}
            </h2>
            <br></br>
          </FadeIn>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            {t.servicesDescMain}
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const { name: translatedName, desc: translatedDesc } = getServiceTranslations(service.name);

            return (
              <FadeIn key={service.name} delay={i * 0.08}>
                <div
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="group border border-border rounded-lg p-8 hover:bg-secondary transition-colors duration-300 h-full cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-background transition-colors">
                      <Icon size={22} className="text-foreground" />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground group-hover:text-foreground transition-colors"
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {translatedName}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {translatedDesc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
