import React, { useRef } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import FadeIn from "@/components/landing/FadeIn";
import { useTranslation } from "@/contexts/LanguageContext";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Target,
  Rocket,
  Briefcase,
  Palette,
  Megaphone,
  Monitor,
  Search,
  Smartphone,
  FileCheck,
  Users2,
  Award,
  Globe2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Milestone,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

const CompanyOverview = () => {
  const { t } = useTranslation();
  const journeyRef = useRef(null);

  // Local scroll progress for the Journey section
  const { scrollYProgress: journeyProgress } = useScroll({
    target: journeyRef,
    offset: ["start center", "end center"],
  });

  const journeyScaleY = useSpring(journeyProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const stats = [
    { value: "97%", label: t.projectsCompleted, icon: Award },
    { value: "500+", label: t.designAssets, icon: Rocket },
    { value: "1,000+", label: t.happyClients, icon: Users2 },
    { value: "98%", label: t.clientSatisfaction, icon: Sparkles },
  ];

  const journey = [
    {
      year: "2016",
      range: "2016 – 2017",
      title: "ERP & CRM Design & Development",
      subtitle: "Enterprise Transformation",
      description:
        "Fuerte Developers mastered CRM and ERP design, helping clients organise workflows, manage contacts, track processes effectively, and improve customer relationships.",
      color: "from-violet-600 to-purple-700",
      accent: "#7c3aed",
    },
    {
      year: "2018",
      range: "2018 – 2020",
      title: "Imagedoor & Blogging Platform",
      subtitle: "Content & Visual Ecosystems",
      description:
        "Launched blogging platforms and Imagedoor enabling clients to customise promotional creatives and distribute content across websites, email, and social networks.",
      color: "from-rose-500 to-pink-600",
      accent: "#f43f5e",
    },
    {
      year: "2020",
      range: "2020 – 2022",
      title: "FAIDEPRO & Inventory",
      subtitle: "Global Networking & Scalability",
      description:
        "Released FAIDEPRO to connect businesses globally. Simultaneously built inventory management software to track stock levels, orders, sales, and deliveries.",
      color: "from-lime-500 to-green-600",
      accent: "#84cc16",
    },
    {
      year: "2023",
      range: "2023 – 2024",
      title: "New Ventures & Startup Expansion",
      subtitle: "Diversified Portfolio",
      description:
        "Expanded into four new verticals, broadening Fuerte's reach across healthcare, lifestyle, retail, and international trade.",
      subItems: [
        "Fuerte Healthcare Pvt Ltd.",
        "Fuerte Krishna Pvt Ltd.",
        "Fuerte Retail Pvt Ltd.",
        "Fuerte Exim Pvt Ltd.",
      ],
      color: "from-fuchsia-500 to-violet-600",
      accent: "#d946ef",
    },
    {
      year: "2025",
      range: "2024 – 2025",
      title: "Restaurant POS Ecosystem",
      subtitle: "Digital Dining Solutions",
      description:
        "Developed a comprehensive POS ecosystem for the culinary industry, integrating real-time kitchen management, contactless ordering, and advanced inventory forecasting to optimize restaurant operations.",
      subItems: [
        "Fuerte POS Suite",
        "Kitchen Display Systems",
        "Inventory Forecasting",
        "Contactless Ordering",
      ],
      color: "from-sky-500 to-cyan-600",
      accent: "#0ea5e9",
    },
    {
      year: "2026",
      range: "2026 Onwards",
      title: "Global Hub: Dubai Expansion",
      subtitle: "Start of Middle East Expansion",
      description:
        "Commenced strategic expansion into the Middle East with our dedicated Dubai headquarters in the FZ Meydan Grandstand, offering specialized IT consultancy and localized digital transformation services.",
      subItems: [
        "Dubai Headquarters",
        "Middle East Consultancy",
        "Global Scalability",
        "Regional Digital Hub",
      ],
      color: "from-amber-400 to-yellow-600",
      accent: "#f59e0b",
    },
  ];

  const services = [
    {
      title: "Branding",
      description:
        "Build lasting brand identity through catalog design, store design, visiting cards, and fully custom creative services.",
      icon: Palette,
    },
    {
      title: "Digital Marketing",
      description:
        "Drive consumer engagement and worldwide visibility through targeted Google Ads and Social Media campaigns.",
      icon: Megaphone,
    },
    {
      title: "Graphic Design",
      description:
        "Impactful visual communication that aligns with your core values and helps you reach business objectives affordably.",
      icon: Globe2,
    },
    {
      title: "Web Development",
      description:
        "Stunning websites built on the right platforms to differentiate your brand and achieve your business goals.",
      icon: Monitor,
    },
    {
      title: "SEO",
      description:
        "360° SEO — on-page, off-page, and technical — for organic, long-lasting search engine visibility.",
      icon: Search,
    },
    {
      title: "App Development",
      description:
        "Android & iOS apps that create a digital identity with smooth, intuitive consumer experiences.",
      icon: Smartphone,
    },
    {
      title: "Company Registration",
      description:
        "Legal forms, trademarking, licensing, and streamlined business formation to get you started the right way.",
      icon: FileCheck,
    },
    {
      title: "Business Consulting",
      description:
        "Experienced strategists to market your brand efficiently and grow your capabilities through unified solutions.",
      icon: TrendingUp,
    },
  ];

  return (
    <>
      <main className="pt-24">
        {/* ─── HERO ────────────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[8%] left-[-8%] w-[48%] h-[48%] bg-primary/10 blur-[140px] animate-pulse" />
            <div className="absolute bottom-[8%] right-[-8%] w-[44%] h-[44%] bg-purple-500/10 blur-[140px] animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            <FadeIn direction="left" className="lg:col-span-7">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                  </span>
                  {t.globalGrowthPartner}
                </div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.0] text-gradient drop-shadow-sm">
                  {t.whoWeAre}
                </h1>

                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl font-normal opacity-80">
                  {t.overviewHeroSubtitle}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#journey"
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:scale-95 group"
                  >
                    {t.ourFullStory}
                    <Milestone
                      size={18}
                      className="group-hover:rotate-12 transition-transform"
                    />
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-border/60 backdrop-blur-md rounded-xl font-bold text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all active:scale-95"
                  >
                    {t.getInTouch}
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute inset-x-0 -bottom-10 bg-primary/15 h-20 blur-3xl rounded-full group-hover:bg-primary/25 transition-all" />
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.5)] relative">
                  <img
                    src="/assets/company-overview-hero.png"
                    alt="Fuerte Developers Global Vision"
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  {/* Snapshot card */}
                  <div className="absolute bottom-8 left-6 right-6 p-6 rounded-2xl border border-white/15 backdrop-blur-2xl bg-white/5">
                    <p className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-center">
                      {t.snapshot}
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      {stats.slice(0, 2).map((s) => (
                        <div key={s.label} className="text-center">
                          <p className="text-3xl font-black text-white mb-0.5">
                            {s.value}
                          </p>
                          <p className="text-[10px] text-white/50 font-bold uppercase leading-tight">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── STATS ───────────────────────────────────────────────── */}
        <section className="py-20 border-y border-border/40 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.08}>
                  <div className="group text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <stat.icon size={22} />
                    </div>
                    <p className="font-display text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/40 mb-2 tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground opacity-60 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MISSION ─────────────────────────────────────────────── */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
              <div className="relative group">
                <div className="absolute -inset-3 bg-primary/15 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/5">
                  <img
                    src="/assets/vision-image.jpg"
                    alt="Mission Vision"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 p-4 rounded-2xl border border-white/15 backdrop-blur-xl bg-white/5">
                    <CheckCircle2 size={28} className="text-white" />
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="space-y-8">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                  <Target size={28} />
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                  {t.fuerteMissionTitle}
                </h2>
                <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
                  <p>{t.overviewMissionSubtitle}</p>
                  <blockquote className="text-foreground p-6 bg-secondary/50 rounded-2xl border-l-4 border-primary font-semibold italic text-lg shadow-lg leading-relaxed">
                    "{t.missionQuote}"
                  </blockquote>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ─── JOURNEY / TIMELINE ──────────────────────────────────── */}
        <section
          ref={journeyRef}
          id="journey"
          className="py-24 px-6 bg-secondary/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 text-[12rem] md:text-[20rem] font-black text-primary/[0.03] select-none pointer-events-none -translate-y-1/4 translate-x-1/4 leading-none opacity-50">
            JOURNEY
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Heading */}
            <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-widest mb-4">
                  <Milestone size={14} />
                  {t.storySoFarTitle}
                </div>
                <h2 className="font-display text-5xl md:text-6xl font-black mb-6 tracking-tight text-gradient">
                  {t.theHistory}
                </h2>
                <div className="h-px w-24 bg-primary/30 mx-auto" />
              </FadeIn>
            </div>

            {/* Timeline items - Condensed */}
            <div className="relative space-y-16 md:space-y-24">
              {/* Center line background */}
              <div className="absolute left-1/2 top-12 bottom-12 w-px bg-white/5 hidden lg:block -translate-x-1/2" />

              {/* Animated Center line progress */}
              <motion.div
                className="absolute left-1/2 top-12 w-px bg-gradient-to-b from-primary via-primary/80 to-primary/20 hidden lg:block -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                style={{ scaleY: journeyScaleY, height: "calc(100% - 96px)" }}
              />

              {journey.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1}>
                  <div className="relative grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Dot */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background shadow-[0_0_12px_var(--dot-color)] hidden lg:block z-20"
                      style={
                        {
                          backgroundColor: item.accent,
                          "--dot-color": item.accent + "88",
                        } as React.CSSProperties
                      }
                    />

                    {/* Text side */}
                    <div
                      className={`${
                        i % 2 === 1
                          ? "lg:order-2 lg:pl-12"
                          : "lg:text-right lg:pr-12"
                      } space-y-4`}
                    >
                      <div
                        className={`flex flex-col gap-2 ${i % 2 === 1 ? "lg:items-start" : "lg:items-end"}`}
                      >
                        <span
                          className={`text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br ${item.color} tracking-tight leading-none`}
                        >
                          {item.year}
                        </span>
                        <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground font-bold text-[10px] uppercase tracking-widest w-fit">
                          {item.subtitle}
                        </span>
                      </div>

                      <h3 className="font-display text-xl md:text-2xl font-black leading-snug">
                        {item.title}
                      </h3>

                      <p
                        className={`text-muted-foreground text-sm leading-relaxed font-normal opacity-70 ${i % 2 === 0 ? "lg:ml-auto max-w-sm" : "max-w-sm"}`}
                      >
                        {item.description}
                      </p>

                      {item.subItems && (
                        <div
                          className={`flex flex-wrap gap-2 ${i % 2 === 1 ? "justify-start" : "lg:justify-end"}`}
                        >
                          {item.subItems.map((sub) => (
                            <span
                              key={sub}
                              className="px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10 text-[10px] font-bold text-primary"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Visual card side */}
                    <div
                      className={`${i % 2 === 1 ? "lg:order-1" : ""} relative`}
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="group p-[1px] rounded-2xl bg-gradient-to-br transition-all duration-500 shadow-lg"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${item.accent}33, transparent)`,
                        }}
                      >
                        <div className="rounded-[15px] bg-card/40 backdrop-blur-md overflow-hidden p-8">
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-40 mb-1">
                                Milestones
                              </p>
                              <p
                                className="text-lg font-black"
                                style={{ color: item.accent }}
                              >
                                {item.range}
                              </p>
                            </div>
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center opacity-80"
                              style={{ backgroundColor: item.accent + "11" }}
                            >
                              <Rocket
                                size={18}
                                style={{ color: item.accent }}
                              />
                            </div>
                          </div>

                          <div className="h-px w-full mb-6 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                          <p className="text-muted-foreground text-xs leading-relaxed opacity-60 italic group-hover:opacity-100 transition-opacity">
                            Highlighting our commitment to excellence and
                            innovation during {item.range.split(" – ")[0]}.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES ────────────────────────────────────────────── */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-24">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-8">
                  <Briefcase size={16} />
                  {t.expertiseDomainsTitle}
                </div>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.0]">
                  {t.technicalSolutionsTitle}
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto opacity-70 leading-relaxed">
                  {t.expertiseSubtitleDesc}
                </p>
              </FadeIn>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service, i) => (
                <FadeIn key={service.title} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative p-7 rounded-2xl bg-card border border-border h-full flex flex-col hover:border-primary/40 hover:bg-secondary/30 transition-colors duration-400 overflow-hidden cursor-pointer"
                  >
                    {/* Ghost icon background */}
                    <div className="absolute -bottom-4 -right-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                      <service.icon size={110} />
                    </div>

                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <service.icon size={20} />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-lg font-black mb-3 group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed font-normal flex-1 opacity-70 group-hover:opacity-90 transition-opacity">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      <span className="tracking-wider uppercase">
                        {t.explore}
                      </span>
                      <ArrowRight size={14} />
                    </div>

                    {/* Bottom border accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .text-gradient {
          background: linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </>
  );
};

export default CompanyOverview;
