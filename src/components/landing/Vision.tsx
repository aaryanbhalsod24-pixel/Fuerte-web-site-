import FadeIn from "./FadeIn";
import { useTranslation } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { stats } from "@/data/siteData";

const Vision = () => {
  const { t } = useTranslation();

  return (
    <section id="vision" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="left">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {t.aboutUsLabel}
              </p>

              {/* Heading */}
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
                {t.visionTitle}
              </h2>

              {/* Animated underline */}
              <motion.div
                className="mt-6 h-px bg-foreground"
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3,
                }}
              />

              <p className="text-muted-foreground text-lg leading-relaxed mb-10 mt-6">
                {t.visionDesc}
              </p>

              <div className="flex gap-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl md:text-4xl font-bold">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {stat.label === "Projects Completed" ? t.projectsCompleted : 
                       stat.label === "Happy Clients" ? t.happyClients : stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/assets/team-office.jpg"
                alt="Team working in modern office"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Vision;