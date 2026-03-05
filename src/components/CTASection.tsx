const CTASection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
          Invest in the Standard of
        </h2>
        <h2 className="text-3xl md:text-5xl font-accent italic text-gradient-blue mb-8">
          Excellence
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          We are continuously seeking strategic partnerships and pioneering
          projects that align with our vision of a sustainable,
          technologically-driven future.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded hover:bg-primary/90 transition-colors"
          >
            Partner With Us
          </a>
          <a
            href="#"
            className="border border-muted-foreground/40 text-foreground text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded hover:bg-muted transition-colors"
          >
            Investor Relations
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
