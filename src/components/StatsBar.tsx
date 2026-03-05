const stats = [
  { label: "GLOBAL PRESENCE", value: "40+ Countries" },
  { label: "STRATEGIC SUBSIDIARIES", value: "12 Companies" },
  { label: "YEARS OF EXCELLENCE", value: "25+ Years" },
  { label: "ASSETS MANAGED", value: "$8.4 Billion" },
];

const StatsBar = () => {
  return (
    <section className="stats-bar">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-6 px-6 border-r border-primary-foreground/20 last:border-r-0"
            >
              <p className="text-[10px] uppercase tracking-widest text-primary-foreground/70 mb-1">
                {stat.label}
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary-foreground">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
