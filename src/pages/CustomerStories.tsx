import FadeIn from "@/components/landing/FadeIn";
import { motion } from "framer-motion";
import {
  Instagram,
  Quote,
  ExternalLink,
  Star,
  Users,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

// Brand logos (Trusted Brands)
const CustomerStories = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      company: "Hazel Dryfruits",
      content:
        "Our pages are finally getting the attention they deserve. Thanks to the smart strategies.",
      logo: "/assets/company-logo/hazel-logo.png",
      color: "bg-red-700",
      insta: "https://www.instagram.com/hazeldryfruits/",
    },
    {
      company: "Bengal Sweet",
      content:
        "Our customers are engaging more than ever – the festive campaigns were a hit!",
      logo: "/assets/company-logo/bangal-logo.png",
      color: "bg-amber-700",
      insta: "https://www.instagram.com/bengalsweets/",
    },
    {
      company: "Santosh Saree",
      content:
        "Posting style is elegant and regular. Customers are responding more — we're seeing results!",
      logo: "/assets/company-logo/santosh-logo.png",
      color: "bg-orange-700",
      insta: "https://www.instagram.com/santosh_rajkot/",
    },
    {
      company: "Giriraj Jewellers",
      content:
        "We've seen a real difference since handing over our social media. The jewellery looks premium, engagement has improved, and every post reflects our brand beautifully. Professional, creative, and consistent — exactly what we needed for Giriraj Jewellers.",
      logo: "/assets/company-logo/giriraj-logo.png",
      color: "bg-yellow-800",
      insta: "https://www.instagram.com/shreegirirajjewellers/",
    },
    {
      company: "Gopi Jewellers",
      content:
        "We've received so many compliments on our new social media look! The creatives are fresh, brand-aligned, and help us connect better with our customers. It's been a smooth and effective journey.",
      logo: "/assets/company-logo/gopi-logo.png",
      color: "bg-pink-700",
      insta: "https://www.instagram.com/gopi_jeweller/",
    },
    {
      company: "Aum Jewels",
      content:
        "The transformation in our digital image is visible. The posts are clean, classy, and attract the right audience. Our jewellery gets the attention it deserves, and the team listens and delivers.",
      logo: "AJ",
      color: "bg-blue-800",
      insta: "",
    },
    {
      company: "Shree ram jewellers",
      content:
        "Our page finally looks like a luxury brand. Reels, designs, captions — everything speaks our brand story. Plus, the targeted ads are getting us real leads. Very happy with the progress.",
      logo: "SR",
      color: "bg-gray-800",
      insta: "",
    },
    {
      company: "Shubh Jewellers",
      content:
        "Their work is perfect in all fields. Fuerte Developers has helped me a lot to grow my jewellery business.",
      logo: "/assets/company-logo/subh-logo.jpg",
      color: "bg-emerald-800",
      insta: "",
    },
    {
      company: "Kasturi Cafe",
      content:
        "My business has been reaching all my targeted locations. Happy to be growing by spending less.",
      logo: "/assets/company-logo/kasturi-logo.jpg",
      color: "bg-stone-700",
      insta: "",
    },
    {
      company: "Rajhans Engineers",
      content:
        "They have solved all my Facebook ads issues. Glad to recommend their digital marketing services.",
      logo: "/assets/company-logo/rajhans-logo.jpg",

      color: "bg-zinc-700",
      insta: "",
    },
    {
      company: "Tradingedge Academy",
      content:
        "Your work is really impressive. I would like to suggest others too.",
      logo: "/assets/company-logo/tradingedge-logo.jpg",

      color: "bg-zinc-700",
      insta: "",
    },
    {
      company: "HOPE Oncology Clinic",
      content:
        "Had a great experience. Highly qualified and experienced staff. Would recommend everyone.",
      logo: "/assets/company-logo/hope-logo.jpg",

      color: "bg-cyan-700",
      insta: "",
    },
    {
      company: "Tizo Tiles",
      content:
        "Had no direction on how to go about my new website. It's been a great experience working with you.",
      logo: "/assets/company-logo/tizo-logo.jpg",
      color: "bg-indigo-700",
      insta: "",
    },
    {
      company: "Globe Industry",
      content:
        "They revamped sites like no other. Very smooth communication process of work.",
      logo: "/assets/company-logo/globe-logo.jpg",
      color: "bg-slate-700",
      insta: "",
    },
    {
      company: "Inspire Corporation",
      content:
        "It's truly a one-stop solution. Very satisfied with their development services and suggestions.",
      logo: "/assets/company-logo/inspire-logo.jpg",

      color: "bg-purple-700",
      insta: "",
    },

    {
      company: "Niva Ceramic",
      content:
        "Love their work for my ceramic business — my Instagram feed looks awesome!",
      logo: "/assets/company-logo/niva-logo.jpg",

      color: "bg-teal-700",
      insta: "",
    },
    {
      company: "I Khodal Investment",
      content:
        "One of the best decisions to choose you guys for my logo design.",
      logo: "/assets/company-logo/khodal-logo.jpg",

      color: "bg-red-800",
      insta: "",
    },
    {
      company: "Pine Valley Peanuts",
      content:
        "Good to work with Fuerte for my business posts with great understanding.",
      logo: "/assets/company-logo/pine-logo.jpg",

      color: "bg-green-800",
      insta: "",
    },
    {
      company: "Mardiya Foods",
      content:
        "I got the best PHP training from Fuerte Developers. They explained all concepts really well.",
      logo: "MF",
      color: "bg-orange-800",
      insta: "",
    },
    {
      company: "Jignesh Bhai",
      content:
        "Fuerte Developers made me a business image with the best quality solution. Thank you.",
      logo: "JB",
      color: "bg-sky-700",
      insta: "",
    },
    {
      company: "Little Hobby Center",
      content:
        "Giving my work to Fuerte Developers has brought great success. Thank you.",
      logo: "LH",
      color: "bg-rose-700",
      insta: "",
    },
    {
      company: "Yash Ranpara",
      content:
        "I would recommend Fuerte Developers for any graphic design project you will be having.",
      logo: "YR",
      color: "bg-violet-700",
      insta: "",
    },
    {
      company: "Patel Jewellers",
      content: "Get the best graphic design services from Fuerte Developers.",
      logo: "PJ",
      color: "bg-yellow-900",
      insta: "",
    },
    {
      company: "Artemis Interior",
      content:
        "I received an attractive flyer from Fuerte Developers. Very happy with the result.",
      logo: "AI",
      color: "bg-emerald-700",
      insta: "",
    },
    {
      company: "Narmada Hospital",
      content:
        "Grateful to receive graphic design service from them. Workers are very co-operative.",
      logo: "NH",
      color: "bg-blue-600",
      insta: "",
    },
    {
      company: "Royal Star",
      content:
        "Thank you Fuerte Developers for creating such an amazing image for my business.",
      logo: "RS",
      color: "bg-neutral-800",
      insta: "",
    },
    {
      company: "Stock Vidhya",
      content:
        "Fuerte Developers has the best quality images with a number of options according to your needs.",
      logo: "SV",
      color: "bg-indigo-600",
      insta: "",
    },
    {
      company: "Tirupati",
      content: "Wow, am amazed with how beautiful my image is. Thank you.",
      logo: "T",
      color: "bg-lime-700",
      insta: "",
    },
    {
      company: "Stock Vidhya",
      content:
        "FUERTE DEVELOPERS has the best quality images with number of option in according to your needs.",
      logo: "SV",
      color: "bg-fuchsia-700",
      insta: "",
    },
    {
      company: "Dharmeshbhai",
      content:
        "Your staff are so cooperative and polite i will surely come back again.",
      logo: "D",
      color: "bg-amber-800",
      insta: "",
    },
  ];

  const highlights = [
    { label: "Client Growth", value: "450%", icon: TrendingUp },
    { label: "Success Stories", value: "250+", icon: Star },
    { label: "Brand Reach", value: "1.2M", icon: Users },
  ];

  const trustedBrands = [
    { name: "TeamWork", logo: "/assets/company-logo/bangal-logo.png" },
    { name: "Pizza Studio", logo: "/assets/company-logo/giriraj-logo.png" },
    { name: "Ford", logo: "/assets/company-logo/gopi-logo.png" },
    { name: "Innovative", logo: "/assets/company-logo/hazel-logo.png" },
    { name: "UMA", logo: "/assets/company-logo/kasturi-logo.jpg" },
    { name: "VIMOX", logo: "/assets/company-logo/santosh-logo.png" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-primary/3 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <main className="pt-32 pb-32">
        {/* ── Hero ─────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Client Success
          </motion.div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
            {t.title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
            {t.subtitle}
          </p>
        </div>

        {/* ── Highlights ───────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: t.clientGrowth, value: "450%", icon: TrendingUp },
            { label: t.successStories, value: "250+", icon: Star },
            { label: t.brandReach, value: "1.2M", icon: Users },
          ].map((h, i) => (
            <div
              key={h.label}
              className="group relative p-8 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/50 text-center hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <h.icon size={26} />
                </div>
                <div className="text-4xl font-black mb-2 tracking-tight">
                  {h.value}
                </div>
                <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-60">
                  {h.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Testimonials Grid ────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t_item, i) => (
              <motion.a
                key={t_item.company + i}
                href={t_item.insta}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="group relative block p-10 rounded-[2.5rem] bg-white border border-slate-200/60 shadow-lg shadow-slate-200/20 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 h-full flex flex-col"
              >
                {/* Card header */}
                <div className="relative flex items-center gap-5 mb-8">
                  {/* Logo Section */}
                  {(() => {
                    const isImage =
                      t_item.logo.includes("/") || t_item.logo.includes(".");
                    return (
                      <div className="relative group/logo">
                        <div
                          className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-500 overflow-hidden ${
                            isImage
                              ? "bg-white border border-slate-100 p-3 shadow-sm group-hover:shadow-md"
                              : `${t_item.color} text-white shadow-lg`
                          }`}
                        >
                          {isImage ? (
                            <img
                              src={t_item.logo}
                              alt={t_item.company}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="text-2xl font-bold tracking-tight">
                              {t_item.logo}
                            </span>
                          )}
                        </div>
                        {/* Subtle decorative ring */}
                        <div className="absolute inset-[-4px] rounded-[2.2rem] border border-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100" />
                      </div>
                    );
                  })()}

                  {/* Meta info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors truncate">
                      {t_item.company}
                    </h3>
                    {t_item.insta && (
                      <div className="flex items-center gap-1.5 text-slate-500 group-hover:text-primary transition-colors text-[12px] font-medium mt-1">
                        <Instagram size={13} className="opacity-70" />
                        <span className="truncate">
                          Active Digital Presence
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Quote content */}
                <div className="relative flex-1">
                  <blockquote className="text-[14px] leading-[1.6] text-slate-600 font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                    {t_item.content}
                  </blockquote>
                </div>

                {/* Rating & Verification Footer */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-0.5">
                      {Array(5)
                        .fill(0)
                        .map((_, idx) => (
                          <Star
                            key={idx}
                            size={14}
                            fill="currentColor"
                            className="text-amber-400"
                          />
                        ))}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      {t.topRated}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700/70">
                      {t.verified}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ─── TRUSTED BRANDS ──────────────────────────────────────── */}
        <section className="py-24 px-6 bg-secondary/10 relative overflow-hidden mt-32">
          <div className="max-w-7xl mx-auto relative z-10">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight mb-4">
                  Trusted by 1000+ Brands Worldwide
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto italic">
                  From startups to global enterprises, we've build digital fortresses for everyone.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {trustedBrands.map((brand, i) => (
                <FadeIn key={brand.name} delay={i * 0.05}>
                  <div className="flex flex-col items-center gap-4 group">
                    <div className="w-24 h-24 rounded-2xl bg-card border border-border/60 flex items-center justify-center p-4 grayscale group-hover:grayscale-0 group-hover:border-primary/40 group-hover:shadow-lg transition-all duration-500">
                      <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">
                      {brand.name}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 mt-32">
          <div className="relative p-12 md:p-24 rounded-[3rem] bg-zinc-950 overflow-hidden group">
            {/* Background abstract shapes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-primary/20 blur-[120px] rounded-full rotate-12 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[100%] bg-primary/10 blur-[100px] rounded-full -rotate-12 group-hover:scale-110 transition-transform duration-1000" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 border border-white/10 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                <Sparkles size={14} className="text-secondary" />
                Your Journey Starts Here
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-[1.1]">
                {t.ctaTitle}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-black text-lg hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-95 transition-all"
                >
                  {t.ctaButton}
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .text-gradient {
          background: linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
};

export default CustomerStories;
