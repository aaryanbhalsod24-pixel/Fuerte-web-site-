import FadeIn from "./FadeIn";

const pressPartners = [
  { name: "Gujarat Watch", logo: "/assets/partners/gujarat-watch.png", link: "https://gujaratwatch.com" },
  { name: "Buzz Center", logo: "/assets/partners/buzzcenter.png", link: "https://buzzcenter.in" },
  { name: "Andhra News Digest", logo: "/assets/partners/andhra-news-digest.png", link: "https://andhranewsdigest.com" },
  { name: "Buzzing Info", logo: "/assets/partners/buzzinginfo.png", link: "https://buzzinginfo.com" },
  { name: "Daily Topic", logo: "/assets/partners/dailytopic.png", link: "https://dailytopic.in" },
  { name: "Topics Arena", logo: "/assets/partners/buzzcenter.png", link: "https://topicsarena.in" },
  { name: "TheExpertFinds", logo: "/assets/partners/buzzinginfo.png", link: "https://theexpertfinds.com" },
  { name: "Adarsh Maharashtra", logo: "/assets/partners/gujarat-watch.png", link: "https://adarshmaharashtra.in" },
  { name: "ANI", logo: "/assets/partners/dailytopic.png", link: "https://www.aninews.in" },
  { name: "Asian Prime News", logo: "/assets/partners/andhra-news-digest.png", link: "https://asianprimenews.com" },
  { name: "BTST Calls", logo: "/assets/partners/buzzcenter.png", link: "https://btstcalls.in" },
];

const baseBrands = [
  { name: "Flying Machine", logo: "/assets/company-logo/inspire-logo.jpg", link: "https://flyingmachine.co.in" },
  { name: "MUVR", logo: "/assets/company-logo/tizo-logo.jpg", link: "https://muvr.in" },
  { name: "Ford", logo: "/assets/company-logo/gopi-logo.png", link: "https://www.ford.com" },
  { name: "Teamwork", logo: "/assets/company-logo/bangal-logo.png", link: "https://www.teamwork.com" },
  { name: "GoGift", logo: "/assets/company-logo/hope-logo.jpg", link: "https://gogift.in" },
  { name: "Jai Ganesh MG", logo: "/assets/company-logo/khodal-logo.jpg", link: "https://jaiganeshmg.com" },
  { name: "Sumangalam Fitness", logo: "/assets/company-logo/tradingedge-logo.jpg", link: "https://sumangalamfitness.com" },
  { name: "Pizza Studio", logo: "/assets/company-logo/giriraj-logo.png", link: "https://www.pizzastudio.com" },
  { name: "Globe", logo: "/assets/company-logo/globe-logo.jpg", link: "https://globe.com" },
  { name: "Innovative", logo: "/assets/company-logo/hazel-logo.png", link: "https://innovative.com" },
  { name: "UMA", logo: "/assets/company-logo/kasturi-logo.jpg", link: "https://uma.com" },
  { name: "Niva", logo: "/assets/company-logo/niva-logo.jpg", link: "https://niva.com" },
  { name: "Pine", logo: "/assets/company-logo/pine-logo.jpg", link: "https://pine.com" },
  { name: "Rajhans", logo: "/assets/company-logo/rajhans-logo.jpg", link: "https://rajhans.com" },
  { name: "VIMOX", logo: "/assets/company-logo/santosh-logo.png", link: "https://vimox.com" },
  { name: "Subh", logo: "/assets/company-logo/subh-logo.jpg", link: "https://subh.com" },
];

// Generate exactly 62 brand logos by looping through the base list
const brandPartners = Array.from({ length: 62 }, (_, i) => {
  const base = baseBrands[i % baseBrands.length];
  return {
    name: `${base.name}-${i}`,
    logo: base.logo,
    link: base.link,
  };
});

const ShowcasePartners = () => {
  return (
    <section className="pt-2 pb-4 border-t border-border bg-background relative overflow-hidden">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track-ltr {
          display: flex;
          animation: marquee-scroll 30s linear infinite;
        }
        .marquee-track-rtl {
          display: flex;
          animation: marquee-scroll 120s linear infinite;
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
              <div
                className="marquee-track-ltr flex items-center gap-2 sm:gap-4"
                style={{ width: "max-content", willChange: "transform" }}
              >
                {[...pressPartners, ...pressPartners].map((partner, i) => (
                  <div
                    key={`${partner.name}-${i}`}
                    className="flex-shrink-0 w-[110px] sm:w-[150px] md:w-[180px] h-[65px] sm:h-[85px] md:h-[100px] flex items-center justify-center bg-white rounded-xl border border-border/10 hover:shadow-lg transition-shadow duration-300"
                  >
                    <a href={partner.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                      <img
                        src={partner.logo}
                        alt="partner logo"
                        className="h-[50px] sm:h-[65px] md:h-[80px] w-auto object-contain select-none pointer-events-none"
                      />
                    </a>
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
              <div
                className="marquee-track-rtl flex items-center gap-2 sm:gap-4"
                style={{ width: "max-content", willChange: "transform" }}
              >
                {[...brandPartners, ...brandPartners].map((brand, i) => (
                  <div
                    key={`${brand.name}-${i}`}
                    className="flex-shrink-0 w-[110px] sm:w-[150px] md:w-[180px] h-[65px] sm:h-[85px] md:h-[100px] flex items-center justify-center rounded-xl bg-card border border-border/40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 hover:border-primary/30 transition-all duration-300"
                  >
                    <a href={brand.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                      <img
                        src={brand.logo}
                        alt="partner logo"
                        className="h-[50px] sm:h-[65px] md:h-[80px] w-auto object-contain select-none pointer-events-none"
                      />
                    </a>
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
