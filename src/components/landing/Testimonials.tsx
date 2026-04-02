import FadeIn from "./FadeIn";
import { testimonials } from "@/data/siteData";
import { Quote } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useTranslation();

  // Helper to get translated testimonial data
  const getTestimonialTranslations = (name: string) => {
    switch (name) {
      case "Rahul Sharma":
        return { name: t.test1Name, company: t.test1Company, quote: t.test1Quote };
      case "Priya Mehta":
        return { name: t.test2Name, company: t.test2Company, quote: t.test2Quote };
      case "Amit Patel":
        return { name: t.test3Name, company: t.test3Company, quote: t.test3Quote };
      case "Sneha Reddy":
        return { name: t.test4Name, company: t.test4Company, quote: t.test4Quote };
      default:
        return { name, company: "", quote: "" };
    }
  };

  return (
    <section id="testimonials" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {t.testimonialsLabel}
          </p>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              {t.testimonialsTitle}
            </h2>
            <br></br>
          </FadeIn>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            {t.testimonialsDesc}
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((test, i) => {
            const { name, company, quote } = getTestimonialTranslations(test.name);
            return (
              <FadeIn key={test.name} delay={i * 0.1}>
                <div className="border border-border rounded-2xl p-8 hover:bg-secondary transition-colors duration-300 h-full flex flex-col">
                  <Quote size={24} className="text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed italic flex-1">
                    "{quote}"
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="font-semibold text-sm">{name}</p>
                    <p className="text-xs text-muted-foreground">{company}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
