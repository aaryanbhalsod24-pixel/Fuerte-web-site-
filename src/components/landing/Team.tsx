import FadeIn from "./FadeIn";
import { teamMembers } from "@/data/siteData";
import teamCeo from "@/assets/team-ceo.png";
import teamCofounder from "@/assets/team-cofounder.png";
import { useTranslation } from "@/contexts/LanguageContext";

const images: Record<string, string> = {
  "team-ceo": teamCeo,
  "team-cofounder": teamCofounder,
};

const Team = () => {
  const { t } = useTranslation();

  // Helper to get translated member data
  const getMemberTranslations = (name: string) => {
    switch (name) {
      case "Aditya Prakash":
        return { name: t.teamCEO, role: t.teamCEORole, quote: t.teamCEOQuote };
      case "Pooja Gangwani":
        return { name: t.teamCoFounder, role: t.teamCoFounderRole, quote: t.teamCoFounderQuote };
      default:
        return { name, role: "", quote: "" };
    }
  };

  return (
    <section id="team" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {t.teamLabel}
          </p>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              {t.teamTitle}
            </h2>
            <br></br>
          </FadeIn>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            {t.teamDesc}
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, i) => {
            const { name, role, quote } = getMemberTranslations(member.name);
            return (
              <FadeIn key={member.name} delay={i * 0.15}>
                <div className="border border-border rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 hover:bg-secondary transition-colors duration-300">
                  <img
                    src={images[member.image]}
                    alt={name}
                    loading="lazy"
                    className="w-28 h-28 rounded-full object-cover bg-secondary flex-shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="font-display text-xl font-semibold">
                      {name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{role}</p>
                    <p className="text-muted-foreground text-sm italic leading-relaxed">
                      "{quote}"
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
