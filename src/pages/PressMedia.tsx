import React from "react";
import FadeIn from "@/components/landing/FadeIn";
import { useTranslation } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useModal } from "@/contexts/ModalContext";
import {
  Newspaper,
  Calendar,
  ArrowRight,
  Mail,
  ExternalLink,
  MessageSquare,
  Award,
  Globe,
  TrendingUp,
  Shield,
  CheckCircle2,
} from "lucide-react";

const PressMedia = () => {
  const { t } = useTranslation();
  const { openModal } = useModal();

  const mediaPartners = [
    "JOIST",
    "India News Nation",
    "Info Help 24x7",
    "Jammu & Kashmir News Report",
    "Jharkhand India News Agency",
    "Jharkhand News Hub",
  ];

  const pressCoverage = [
    {
      title: t.pressCard1Title,
      source: t.pressCard1Source,
      date: t.pressCard1Date,
      description: t.pressCard1Desc,
      link: t.pressCard1Link,
      icon: TrendingUp,
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-500",
    },
    {
      title: t.pressCard2Title,
      source: t.pressCard2Source,
      date: t.pressCard2Date,
      description: t.pressCard2Desc,
      link: t.pressCard2Link,
      icon: Award,
      color: "from-purple-500/20 to-pink-500/20",
      accent: "text-purple-500",
    },
    {
      title: t.pressCard3Title,
      source: t.pressCard3Source,
      date: t.pressCard3Date,
      description: t.pressCard3Desc,
      link: t.pressCard3Link,
      icon: Shield,
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-500",
    },
    {
      title: t.pressCard4Title,
      source: t.pressCard4Source,
      date: t.pressCard4Date,
      description: t.pressCard4Desc,
      link: t.pressCard4Link,
      icon: Globe,
      color: "from-orange-500/20 to-yellow-500/20",
      accent: "text-orange-500",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative py-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-widest mb-8">
              <Newspaper size={14} />
              {t.navPress}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight mb-8 text-gradient">
              {t.pressHeroTitle}
            </h1>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed opacity-80">
              {t.pressHeroSubtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── FEATURED IN SECTION ─────────────────────────────────── */}
      <section className="py-20 bg-secondary/5 border-y border-border/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-center text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mb-12">
              {t.featuredInTitle}
            </h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {mediaPartners.map((partner, i) => (
              <FadeIn key={partner} delay={i * 0.05}>
                <span className="text-xl md:text-2xl font-black font-display tracking-tight hover:text-primary transition-colors cursor-default whitespace-nowrap">
                  {partner}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRESS COVERAGE CARDS ────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight mb-4">
                  {t.pressCoverageTitle}
                </h2>
                <div className="h-1.5 w-24 bg-primary rounded-full" />
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressCoverage.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-full bg-card border border-border/60 rounded-3xl p-8 overflow-hidden transition-all hover:shadow-2xl hover:border-primary/30"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl bg-secondary/50 ${item.accent} group-hover:bg-primary group-hover:text-white transition-all duration-300`}>
                        <item.icon size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">
                          {item.source}
                        </p>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest mt-0.5">
                          <Calendar size={10} />
                          {item.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 opacity-70 group-hover:opacity-90 transition-opacity">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link"
                  >
                    {t.readMore}
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─────────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary to-violet-600 p-px overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl group-hover:bg-primary/40 transition-all duration-700" />
              <div className="relative bg-[#0a0a0a] rounded-[calc(2.5rem-1px)] p-12 md:p-16 text-center">
                <div className="inline-flex p-4 rounded-3xl bg-primary/10 text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                  <MessageSquare size={32} />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6">
                  {t.mediaContactTitle}
                </h2>
                <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  {t.mediaContactDesc}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`mailto:${t.mediaContactEmail}`}
                    className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95"
                  >
                    <Mail size={18} />
                    {t.mediaContactEmail}
                  </a>
                  <button
                    onClick={openModal}
                    className="flex items-center gap-2.5 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-sm hover:bg-white/10 hover:-translate-y-1 transition-all"
                  >
                    {t.getInTouch}
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .text-gradient {
          background: linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default PressMedia;
