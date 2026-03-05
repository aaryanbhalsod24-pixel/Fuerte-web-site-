import { Monitor, Building2, Truck, Landmark, ArrowRight } from "lucide-react";
import techImg from "@/assets/tech-card.jpg";
import realestateImg from "@/assets/realestate-card.jpg";
import logisticsImg from "@/assets/logistics-card.jpg";
import capitalImg from "@/assets/capital-card.jpg";

const subsidiaries = [
  {
    icon: Monitor,
    name: "Fuerte Tech",
    desc: "Cutting-edge software solutions and digital transformation for enterprise-level operations.",
    img: techImg,
  },
  {
    icon: Building2,
    name: "Fuerte Real Estate",
    desc: "Premium commercial and residential architectural developments in global prime locations.",
    img: realestateImg,
  },
  {
    icon: Truck,
    name: "Fuerte Logistics",
    desc: "Global supply chain management and sustainable transport infrastructure systems.",
    img: logisticsImg,
  },
  {
    icon: Landmark,
    name: "Fuerte Capital",
    desc: "Strategic investment and private equity management for high-growth global ventures.",
    img: capitalImg,
  },
];

const EcosystemSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              Our Ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              A Diverse Portfolio of Leaders
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
            Discover our specialized subsidiary companies, each a leader in its
            respective field, unified by the Fuerte standard of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subsidiaries.map((sub, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-5 card-hover flex flex-col"
            >
              <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center mb-4">
                <sub.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{sub.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {sub.desc}
              </p>
              <img
                src={sub.img}
                alt={sub.name}
                className="w-full h-32 object-cover rounded mb-4"
              />
              <a
                href="#"
                className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
              >
                Visit Site <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
