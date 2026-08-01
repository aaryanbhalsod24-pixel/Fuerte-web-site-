import FadeIn from "./FadeIn";
import { Quote, Star } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: "static-1",
      name: t.test1Name,
      company: t.test1Company,
      quote: t.test1Quote,
      rating: 5,
    },
    {
      id: "static-2",
      name: t.test2Name,
      company: t.test2Company,
      quote: t.test2Quote,
      rating: 5,
    },
    {
      id: "static-3",
      name: t.test3Name,
      company: t.test3Company,
      quote: t.test3Quote,
      rating: 5,
    },
    {
      id: "static-4",
      name: t.test4Name,
      company: t.test4Company,
      quote: t.test4Quote,
      rating: 5,
    },
  ];

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
          {testimonials.map((test, i) => (
            <FadeIn key={test.id} delay={i * 0.1}>
              <div className="border border-border rounded-2xl p-8 hover:bg-secondary transition-colors duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Quote size={24} className="text-muted-foreground" />
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        size={14}
                        className={n <= test.rating ? "fill-primary text-primary" : "text-border"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic flex-1">
                  "{test.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                  <div>
                    <p className="font-semibold text-sm">{test.name}</p>
                    <p className="text-xs text-muted-foreground">{test.company}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
