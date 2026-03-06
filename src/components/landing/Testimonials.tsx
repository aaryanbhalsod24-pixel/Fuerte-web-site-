import FadeIn from "./FadeIn";
import { testimonials } from "@/data/siteData";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Client Feedbacks</p>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              Builds trust and shows real-world results.
            </h2>
                            <br></br>

          </FadeIn>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            At Fuerte Developers, we pride ourselves on delivering innovative digital solutions that drive growth. Here's what our clients have to say about working with us.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="border border-border rounded-2xl p-8 hover:bg-secondary transition-colors duration-300 h-full flex flex-col">
                <Quote size={24} className="text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed italic flex-1">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
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
