import { motion } from "framer-motion";
import FadeIn from "@/components/landing/FadeIn";
import { teamMembers } from "@/data/siteData";
import teamCeo from "@/assets/team-ceo.png";
import teamCofounder from "@/assets/team-cofounder.png";
import bharatPhoto from "@/assets/BharatKadavala.png";
import dakshPhoto from "@/assets/DakshPaghdar.png";
import shivaniPhoto from "@/assets/ShivaniPadhariya.jpeg";
import krinaPhoto from "@/assets/KrinaRanpariya.png";
import tirthPhoto from "@/assets/TirthAghara.jpeg";
import bhaveshPhoto from "@/assets/BhaveshGorad.jpg";
import vijayPhoto from "@/assets/VijayDevaliya.png";
import siddhiPhoto from "@/assets/siddhiTanna.jpeg";
import snehilPhoto from "@/assets/Snehil Singh.png";
import brijPhoto from "@/assets/Brij Parekh.jpg";

import { Mail, Linkedin, Twitter, Sparkles } from "lucide-react";





import { useTranslation } from "@/contexts/LanguageContext";

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  image: string;
  email: string;
  linkedin: string;
}

const images: Record<string, string> = {
  "team-ceo": teamCeo,
  "team-cofounder": teamCofounder,
  "bharat-k": bharatPhoto,
  "daksh-p": dakshPhoto,
  "shivani-p": shivaniPhoto,
  "krina-r": krinaPhoto,
  "tirth-a": tirthPhoto,
  "bhavesh-g": bhaveshPhoto,
  "vijay-d": vijayPhoto,
  "siddhi-t": siddhiPhoto,
  "snehil-s": snehilPhoto,
  "brij-p": brijPhoto,
};

// Founders — displayed separately at the top
const founders: TeamMember[] = teamMembers.map((m) => ({
  ...m,
  email: "hello@fuertedevelopers.in",
  linkedin: "#",
}));

// Employees — categorized
const teamCategories = [
  {
    title: "Tech Team",
    members: [
      {
        name: "Bhavesh Gorad",
        role: "Software Developer",
        quote: "Solving complex problems through elegant code.",
        image: "bhavesh-g",
        email: "bhavesh@fuertedevelopers.in",
        linkedin: "#",
      },
      {
        name: "Snehil Singh",
        role: "Software Developer",
        quote: "Crafting beautiful and performant user interfaces.",
        image: "snehil-s",
        email: "snehil@fuertedevelopers.in",
        linkedin: "#",
      },
      {
        name: "Rahul Pal",
        role: "Software Developer",

        quote: "Building end-to-end solutions that scale.",
        image: "placeholder",
        email: "rahul@fuertedevelopers.in",
        linkedin: "#",
      },
      {
        name: "Bharat Kadavala",
        role: "Software Engineer",
        quote: "Simplifying complexity with robust engineering.",
        image: "bharat-k",
        email: "bharat@fuertedevelopers.in",
        linkedin: "#",
      },
      {
        name: "Brij Parekh",
        role: "Software Developer",

        quote: "Optimizing the heart of modern applications.",
        image: "brij-p",
        email: "brij@fuertedevelopers.in",
        linkedin: "#",
      },
      {
        name: "Vijay Devaliya",
        role: "Software Developer",
        quote: "Always exploring new horizons in technology.",
        image: "vijay-d",
        email: "vijay@fuertedevelopers.in",
        linkedin: "#",
      },
      {
        name: "Shivani Padhariya",
        role: "Software Developer",
        quote: "Design-led development for the best user experience.",
        image: "shivani-p",
        email: "shivani@fuertedevelopers.in",
        linkedin: "#",
      },
      {
        name: "Siddhi Tanna",
        role: "Software Developer",
        quote: "Building accessible and innovative digital products.",
        image: "siddhi-t",
        email: "sidhi@fuertedevelopers.in",
        linkedin: "#",
      },
      {
        name: "Tirth Aghara",
        role: "Software Developer",
        quote: "Building accessible and innovative digital products.",
        image: "tirth-a",
        email: "sidhi@fuertedevelopers.in",
        linkedin: "#",
      },
    ],
  },
  {
    title: "Sales & Strategy",
    members: [
      {
        name: "Krina Ranpariya",
        role: "Sales Executive",
        quote: "Building trust and connecting clients with their success.",
        image: "krina-r",
        email: "krina@fuertedevelopers.in",
        linkedin: "#",
      },
    ],
  },
  {
    title: "Creative & Visual Media",
    members: [
      {
        name: "Rahul Kashyap",
        role: "Video Editor",
        quote: "Telling brand stories through high-impact video.",
        image: "placeholder",
        email: "rahulk@fuertedevelopers.in",
        linkedin: "#",
      },
      {
        name: "Aayush",
        role: "Graphic Designer",
        quote: "Translating vision into striking visuals.",
        image: "placeholder",
        email: "aayush@fuertedevelopers.in",
        linkedin: "#",
      },
      {
        name: "Daksh Paghdar",
        role: "Graphic Designer",
        quote: "Adding life and motion to digital experiences.",
        image: "daksh-p",
        email: "daksh@fuertedevelopers.in",
        linkedin: "#",
      },
    ],
  },
  {
    title: "Digital Marketing",
    members: [
      {
        name: "Ankit Gupta",
        role: "Digital Marketer",
        quote: "Strategizing for real-world growth and engagement.",
        image: "placeholder",
        email: "ankit@fuertedevelopers.in",
        linkedin: "#",
      },
      {
        name: "Urvi Dubal",
        role: "Social Media Manager",
        quote: "Building brands and fostering community online.",
        image: "placeholder",
        email: "urvi@fuertedevelopers.in",
        linkedin: "#",
      },
    ],
  },
];

// Reusable card component for founders
const FounderCard = ({ member, i }: { member: TeamMember; i: number }) => (
  <FadeIn delay={(i % 2) * 0.1}>
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full flex flex-col bg-card border border-border rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300"
    >
      <div className="aspect-[5/4] relative overflow-hidden bg-muted">
        {images[member.image] ? (
          <img
            src={images[member.image]}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/50">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold">
              {member.name.charAt(0)}
            </div>
          </div>
        )}

        {/* Social Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center gap-4">
          <a
            href={member.linkedin || "#"}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white text-black transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white text-black transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-display text-2xl font-black group-hover:text-primary transition-colors">
          {member.name}
        </h3>
        <p className="text-primary text-sm font-bold uppercase tracking-wider mt-1 opacity-80">
          {member.role}
        </p>
        <div className="mt-6 border-t border-border/50 pt-6">
          <p className="text-muted-foreground text-base italic leading-relaxed line-clamp-3">
            "{member.quote}"
          </p>
        </div>
      </div>
    </motion.div>
  </FadeIn>
);

// Compact card for team members
const MemberCard = ({ member, i }: { member: TeamMember; i: number }) => (
  <FadeIn delay={(i % 4) * 0.05}>
    <motion.div
      whileHover={{ y: -5 }}
      className="group h-full flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 shadow-sm"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-muted/30">
        {images[member.image] ? (
          <img
            src={images[member.image]}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/20">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold group-hover:scale-110 transition-transform">
              {member.name.charAt(0)}
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-primary hover:text-white transition-all shadow-md"
          >
            <Linkedin size={14} />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-primary hover:text-white transition-all shadow-md"
          >
            <Mail size={14} />
          </a>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-black group-hover:text-primary transition-colors leading-tight">
          {member.name}
        </h3>
        <p className="text-primary text-[11px] font-bold uppercase tracking-wider mt-1 opacity-70">
          {member.role}
        </p>
        <div className="mt-3 border-t border-border/40 pt-3">
          <p className="text-muted-foreground text-xs italic leading-relaxed line-clamp-2">
            "{member.quote}"
          </p>
        </div>
      </div>
    </motion.div>
  </FadeIn>
);

const TeamPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <main className="pt-24 pb-20 overflow-hidden relative">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-[40%] h-[30%] bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full -z-10" />

        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center max-w-4xl mx-auto mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-black uppercase tracking-widest mb-6">
                  <Sparkles size={14} />
                  OUR EXPERTS
                </div>
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
                  {t.meetTeam}
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium opacity-80">
                  We are a diverse collective of dreamers, builders, and
                  strategists. Together, we bridge the gap between complex
                  technology and human-centric design.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Founders Section */}
        <section className="pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {founders.map((member, i) => (
                <FounderCard key={member.name} member={member} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Employee Categories */}
        <div className="space-y-40">
          {teamCategories.map((category, catIndex) => (
            <section key={category.title} className="px-6">
              <div className="max-w-7xl mx-auto">
                <FadeIn>
                  <div className="flex items-center gap-4 mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight">
                      {category.title}
                    </h2>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full" />
                  </div>
                </FadeIn>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {category.members.map((member, i) => (
                    <MemberCard
                      key={member.name}
                      member={
                        {
                          ...member,
                          linkedin: "#",
                          email: `${member.name.toLowerCase().replace(/\s+/g, "")}@fuertedevelopers.in`,
                        } as TeamMember
                      }
                      i={i + catIndex * 4}
                    />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Culture / Mission Section */}
        <section className="mt-40 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-secondary/20 -z-10" />
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="font-display text-4xl md:text-5xl font-black mb-10 tracking-tight leading-tight">
                  Driven by{" "}
                  <span className="text-gradient">{t.innovation}</span>,
                  <br />
                  Defined by {t.collaboration}
                </h2>
                <div className="space-y-8 text-muted-foreground text-lg md:text-xl font-medium leading-relaxed opacity-85">
                  <p>
                    At Fuerte Developers, we believe that the best work happens
                    when diverse perspectives come together. Our culture is
                    built on transparency, continuous learning, and a relentless
                    focus on quality.
                  </p>
                  <p>
                    Every solution we build is a testament to our commitment to
                    excellence and our passion for digital transformation.
                  </p>
                </div>
              </FadeIn>
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
    </div>
  );
};

export default TeamPage;
