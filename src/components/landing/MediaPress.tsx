import FadeIn from "./FadeIn";

const mediaPartners = [
  "JOIST",
  "India News Nation",
  "Info Help 24x7",
  "Jammu & Kashmir News Report",
  "Jharkhand India News Agency",
  "Jharkhand News Hub",
];

const MediaPress = () => {
  return (
    <section className="py-14 md:py-16 bg-secondary/5 border-y border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mb-10">
            Media &amp; Press
          </p>
        </FadeIn>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          {mediaPartners.map((partner, i) => (
            <FadeIn key={partner} delay={i * 0.06}>
              <span className="text-lg md:text-xl font-black font-display tracking-tight hover:text-primary transition-colors duration-300 cursor-default whitespace-nowrap">
                {partner}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPress;
