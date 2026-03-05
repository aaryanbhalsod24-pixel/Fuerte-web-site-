import heroImg from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-24 pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Modern skyscraper"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-xs uppercase tracking-widest text-primary font-medium">
              Global Conglomerate
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 text-foreground">
            Architecting the{" "}
            <span className="font-accent italic text-gradient-blue">Future</span>{" "}
            of Industry.
          </h1>

          <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed">
            Fuerte Developers: A premier global conglomerate driving innovation
            across infrastructure, technology, and capital markets with modern
            elegance.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="border border-foreground/30 text-foreground text-xs uppercase tracking-widest px-6 py-3 hover:bg-foreground/10 transition-colors"
            >
              Explore Divisions
            </a>
            <a
              href="#"
              className="border border-foreground/30 text-foreground text-xs uppercase tracking-widest px-6 py-3 hover:bg-foreground/10 transition-colors"
            >
              Corporate Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
