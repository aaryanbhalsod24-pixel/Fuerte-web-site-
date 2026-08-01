import { useEffect } from "react";
import FadeIn from "./FadeIn";
import { useTranslation } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Add Elfsight script dynamically to the document body if not already present
    const scriptId = "elfsight-platform-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
            <br />
          </FadeIn>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            {t.testimonialsDesc}
          </p>
        </FadeIn>

        {/* Elfsight Google Reviews Widget */}
        <div className="elfsight-app-8460d49d-613c-464e-b356-7082aeadc521" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default Testimonials;
