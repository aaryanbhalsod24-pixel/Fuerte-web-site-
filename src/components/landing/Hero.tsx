import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import heroImage from "@/assets/hero-image.jpg";
import { useTranslation } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Digital workspace"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60 mb-6">
            Fuerte Developers Pvt Ltd
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl text-primary-foreground">
            {t.heroTitle}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
            {t.heroSubtitle}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary-foreground text-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t.getFreeConsultation}
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              {t.exploreServices}
            </motion.a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest text-primary-foreground/50">
          {t.scrollLabel}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1"
        >
          <div className="w-1 h-1.5 rounded-full bg-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
