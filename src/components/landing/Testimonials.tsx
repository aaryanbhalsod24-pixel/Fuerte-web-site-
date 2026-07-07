import { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import { Quote, Star } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

interface ApiTestimonial {
  _id: string;
  name: string;
  company: string;
  quote: string;
  rating: number;
  photo: string;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5050/api";

const Testimonials = () => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState<ApiTestimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${API_URL}/testimonials`);
        const json = await res.json();
        if (json.success) setTestimonials(json.data);
      } catch {
        setTestimonials([]);
      }
    };
    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

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
            <FadeIn key={test._id} delay={i * 0.1}>
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
                  {test.photo && (
                    <img src={test.photo} alt={test.name} className="h-10 w-10 rounded-full object-cover" />
                  )}
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
