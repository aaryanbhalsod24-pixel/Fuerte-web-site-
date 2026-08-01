import FadeIn from "./FadeIn";

const pressPartners = [
  { name: "Gujarat Watch", logo: "/assets/partners/gujarat-watch.png" },
  { name: "Buzz Center", logo: "/assets/partners/buzzcenter.png" },
  { name: "Andhra News Digest", logo: "/assets/partners/andhra-news-digest.png" },
  { name: "Buzzing Info", logo: "/assets/partners/buzzinginfo.png" },
  { name: "Daily Topic", logo: "/assets/partners/dailytopic.png" },
  { name: "Topics Arena", logo: "/assets/partners/buzzcenter.png" },
  { name: "TheExpertFinds", logo: "/assets/partners/buzzinginfo.png" },
  { name: "Adarsh Maharashtra", logo: "/assets/partners/gujarat-watch.png" },
  { name: "ANI", logo: "/assets/partners/dailytopic.png" },
  { name: "Asian Prime News", logo: "/assets/partners/andhra-news-digest.png" },
  { name: "BTST Calls", logo: "/assets/partners/buzzcenter.png" },
];

const baseBrands = [
  { name: "Flying Machine", logo: "/assets/company-logo/inspire-logo.jpg" },
  { name: "MUVR", logo: "/assets/company-logo/tizo-logo.jpg" },
  { name: "Ford", logo: "/assets/company-logo/gopi-logo.png" },
  { name: "Teamwork", logo: "/assets/company-logo/bangal-logo.png" },
  { name: "GoGift", logo: "/assets/company-logo/hope-logo.jpg" },
  { name: "Jai Ganesh MG", logo: "/assets/company-logo/khodal-logo.jpg" },
  { name: "Sumangalam Fitness", logo: "/assets/company-logo/tradingedge-logo.jpg" },
  { name: "Pizza Studio", logo: "/assets/company-logo/giriraj-logo.png" },
  { name: "Globe", logo: "/assets/company-logo/globe-logo.jpg" },
  { name: "Innovative", logo: "/assets/company-logo/hazel-logo.png" },
  { name: "UMA", logo: "/assets/company-logo/kasturi-logo.jpg" },
  { name: "Niva", logo: "/assets/company-logo/niva-logo.jpg" },
  { name: "Pine", logo: "/assets/company-logo/pine-logo.jpg" },
  { name: "Rajhans", logo: "/assets/company-logo/rajhans-logo.jpg" },
  { name: "VIMOX", logo: "/assets/company-logo/santosh-logo.png" },
  { name: "Subh", logo: "/assets/company-logo/subh-logo.jpg" },
];

// Generate exactly 62 brand logos by looping through the base list
const brandPartners = Array.from({ length: 62 }, (_, i) => {
  const base = baseBrands[i % baseBrands.length];
  return {
    name: `${base.name}-${i}`,
    logo: base.logo,
  };
});

const ShowcasePartners = () => {
  return (
    <section className="py-20 border-t border-border bg-background relative overflow-hidden">
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track-ltr {
          display: flex;
          width: max-content;
          gap: 32px;
          animation: marquee-ltr 30s linear infinite;
        }
        .marquee-track-rtl {
          display: flex;
          width: max-content;
          gap: 32px;
          animation: marquee-rtl 120s linear infinite;
        }
        .marquee-track-ltr:hover,
        .marquee-track-rtl:hover {
          animation-play-state: paused;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ─── PRESS & MEDIA PARTNERS ──────────────────────────────── */}
        <FadeIn>
          <div className="mb-16">
            <p className="text-center font-bold uppercase tracking-[0.2em] text-blue-500 text-xs md:text-sm mb-10">
              TRUSTED BY PRESS & MEDIA PARTNER
            </p>
            <div className="relative w-full overflow-hidden py-4 mask-gradient">
              <div className="marquee-track-ltr">
                {[...pressPartners, ...pressPartners].map((partner, i) => (
                  <div
                    key={`${partner.name}-${i}`}
                    className="w-[110px] h-[65px] sm:w-[150px] sm:h-[85px] md:w-[180px] md:h-[100px] bg-white rounded-xl border border-border/10 flex items-center justify-center p-2 hover:shadow-lg transition-shadow duration-300 select-none shrink-0"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-[50px] sm:h-[65px] md:h-[80px] w-auto object-contain select-none pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ─── LEADING BRANDS AND STARTUPS ─────────────────────────── */}
        <FadeIn delay={0.1}>
          <div className="mt-20">
            <p className="text-center font-bold uppercase tracking-[0.2em] text-blue-500 text-xs md:text-sm mb-10">
              TRUSTED BY LEADING BRANDS AND STARTUPS
            </p>
            <div className="relative w-full overflow-hidden py-4 mask-gradient">
              <div className="marquee-track-rtl">
                {[...brandPartners, ...brandPartners].map((brand, i) => (
                  <div
                    key={`${brand.name}-${i}`}
                    className="w-[110px] h-[65px] sm:w-[150px] sm:h-[85px] md:w-[180px] md:h-[100px] rounded-xl bg-card border border-border/40 flex items-center justify-center p-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 hover:border-primary/30 transition-all duration-300 select-none shrink-0"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-[50px] sm:h-[65px] md:h-[80px] w-auto object-contain select-none pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default ShowcasePartners;
