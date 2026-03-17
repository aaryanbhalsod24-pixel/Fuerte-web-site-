import { services } from "@/data/services";
import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">What We Do</p>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">Our Core Services</h2>                <br></br>

          </FadeIn>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            We provide end-to-end solutions to help your business grow and succeed in the digital world.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
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
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
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
