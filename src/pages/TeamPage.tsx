// import { motion } from "framer-motion";
// import Navbar from "@/components/landing/Navbar";
// import Footer from "@/components/landing/Footer";
// import FadeIn from "@/components/landing/FadeIn";
// import { teamMembers } from "@/data/siteData";
// import teamCeo from "@/assets/team-ceo.png";
// import teamCofounder from "@/assets/team-cofounder.png";
// import { Mail, Linkedin, Twitter } from "lucide-react";

// interface TeamMember {
//   name: string;
//   role: string;
//   quote: string;
//   image: string;
//   email: string;
//   linkedin: string;
// }

// const images: Record<string, string> = {
//   "team-ceo": teamCeo,
//   "team-cofounder": teamCofounder,
// };

// // Augmented team data for the full team page
// const fullTeamMembers: TeamMember[] = [
//   ...teamMembers.map(m => ({ ...m, email: "hello@fuertedevelopers.in", linkedin: "#" })),
//   {
//     name: "Vikram Singh",
//     role: "Head of Development",
//     quote: "Building robust architectures that scale with our clients' ambitions.",
//     image: "placeholder",
//     email: "vikram@fuertedevelopers.in",
//     linkedin: "#",
//   },
//   {
//     name: "Ananya Iyer",
//     role: "Senior UI/UX Designer",
//     quote: "Design is not just what it looks like, it's how it works and feels.",
//     image: "placeholder",
//     email: "ananya@fuertedevelopers.in",
//     linkedin: "#",
//   },
//   {
//     name: "Saurabh Sharma",
//     role: "Lead Mobile Developer",
//     quote: "Creating seamless mobile experiences for the modern world.",
//     image: "placeholder",
//     email: "saurabh@fuertedevelopers.in",
//     linkedin: "#",
//   },
//   {
//     name: "Megha Gupta",
//     role: "Marketing Strategist",
//     quote: "Connecting brands with their audience through data-driven storytelling.",
//     image: "placeholder",
//     email: "megha@fuertedevelopers.in",
//     linkedin: "#",
//   },
// ];

// const TeamPage = () => {
//   return (
//     <div className="min-h-screen bg-background font-sans antialiased text-foreground">
//       <Navbar />

//       <main className="pt-24 pb-20">
//         {/* Hero Section */}
//         <section className="relative py-20 overflow-hidden bg-secondary/30">
//           <div className="absolute inset-0 z-0 opacity-10">
//             <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
//           </div>

//           <div className="max-w-7xl mx-auto px-6 relative z-10">
//             <FadeIn>
//               <div className="text-center max-w-3xl mx-auto">
//                 <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 grayscale opacity-70">
//                   OUR TEAM
//                 </p>
//                 <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-6">
//                   Meet the Brilliant Minds Behind Our Innovations
//                 </h1>
//                 <p className="text-muted-foreground text-lg leading-relaxed">
//                   We are a diverse group of thinkers, builders, and dreamers dedicated to 
//                   creating world-class digital solutions. Together, we turn complex challenges 
//                   into elegant experiences.
//                 </p>
//               </div>
//             </FadeIn>
//           </div>
//         </section>

//         {/* Team Grid */}
//         <section className="py-24 px-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//               {fullTeamMembers.map((member, i) => (
//                 <FadeIn key={member.name} delay={i * 0.1}>
//                   <motion.div 
//                     whileHover={{ y: -8 }}
//                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                     className="group h-full flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300"
//                   >
//                     {/* Image / Avatar Container */}
//                     <div className="aspect-[4/3] relative overflow-hidden bg-muted">
//                       {images[member.image] ? (
//                         <img
//                           src={images[member.image]}
//                           alt={member.name}
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center bg-secondary/50">
//                           <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold">
//                             {member.name.charAt(0)}
//                           </div>
//                         </div>
//                       )}

//                       {/* Hover Overlay with Socials */}
//                       <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
//                         <a href={member.linkedin || "#"} className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
//                           <Linkedin size={18} />
//                         </a>
//                         <a href={`mailto:${member.email || "hello@fuertedevelopers.in"}`} className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
//                           <Mail size={18} />
//                         </a>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-8 flex flex-col flex-1">
//                       <div className="mb-4">
//                         <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
//                           {member.name}
//                         </h3>
//                         <p className="text-primary text-sm font-semibold uppercase tracking-wider mt-1 opacity-80">
//                           {member.role}
//                         </p>
//                       </div>
//                       <div className="mt-auto border-t border-border/50 pt-5">
//                         <p className="text-muted-foreground text-sm italic leading-relaxed line-clamp-3">
//                           "{member.quote}"
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </FadeIn>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Culture / Mission Section */}
//         <section className="py-20 relative overflow-hidden border-y border-border">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid md:grid-cols-2 gap-16 items-center">
//               <FadeIn>
//                 <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
//                   Driven by Innovation, Defined by Collaboration
//                 </h2>
//                 <div className="space-y-6 text-muted-foreground text-lg">
//                   <p>
//                     At Fuerte Developers, we believe that the best work happens when diverse 
//                     perspectives come together. Our culture is built on transparency, 
//                     continuous learning, and a relentless focus on quality.
//                   </p>
//                   <p>
//                     Every line of code we write and every pixel we place is a testament to 
//                     our commitment to excellence and our passion for our clients' success.
//                   </p>
//                 </div>
//               </FadeIn>
//               <FadeIn delay={0.2}>
//                 <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
//                   <video
//                     src="/Logo_animation_fuerte_developers_6836436ffe.mp4"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
//                 </div>
//               </FadeIn>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default TeamPage;


// import { motion } from "framer-motion";
// import Navbar from "@/components/landing/Navbar";
// import Footer from "@/components/landing/Footer";
// import FadeIn from "@/components/landing/FadeIn";
// import { teamMembers } from "@/data/siteData";
// import teamCeo from "@/assets/team-ceo.png";
// import teamCofounder from "@/assets/team-cofounder.png";
// import { Mail, Linkedin, Twitter } from "lucide-react";

// interface TeamMember {
//   name: string;
//   role: string;
//   quote: string;
//   image: string;
//   email: string;
//   linkedin: string;
// }

// const images: Record<string, string> = {
//   "team-ceo": teamCeo,
//   "team-cofounder": teamCofounder,
// };

// // Founders — displayed separately at the top
// const founders: TeamMember[] = teamMembers.map(m => ({
//   ...m,
//   email: "hello@fuertedevelopers.in",
//   linkedin: "#",
// }));

// // Employees — displayed below founders
// const employees: TeamMember[] = [
//   {
//     name: "Vikram Singh",
//     role: "Head of Development",
//     quote: "Building robust architectures that scale with our clients' ambitions.",
//     image: "placeholder",
//     email: "vikram@fuertedevelopers.in",
//     linkedin: "#",
//   },
//   {
//     name: "Ananya Iyer",
//     role: "Senior UI/UX Designer",
//     quote: "Design is not just what it looks like, it's how it works and feels.",
//     image: "placeholder",
//     email: "ananya@fuertedevelopers.in",
//     linkedin: "#",
//   },
//   {
//     name: "Saurabh Sharma",
//     role: "Lead Mobile Developer",
//     quote: "Creating seamless mobile experiences for the modern world.",
//     image: "placeholder",
//     email: "saurabh@fuertedevelopers.in",
//     linkedin: "#",
//   },
//   {
//     name: "Megha Gupta",
//     role: "Marketing Strategist",
//     quote: "Connecting brands with their audience through data-driven storytelling.",
//     image: "placeholder",
//     email: "megha@fuertedevelopers.in",
//     linkedin: "#",
//   },
// ];

// // Reusable card component
// const MemberCard = ({ member, i }: { member: TeamMember; i: number }) => (
//   <FadeIn key={member.name} delay={i * 0.1}>
//     <motion.div
//       whileHover={{ y: -8 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="group h-full flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300"
//     >
//       {/* Image / Avatar Container */}
//       <div className="aspect-[4/3] relative overflow-hidden bg-muted">
//         {images[member.image] ? (
//           <img
//             src={images[member.image]}
//             alt={member.name}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center bg-secondary/50">
//             <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold">
//               {member.name.charAt(0)}
//             </div>
//           </div>
//         )}

//         {/* Hover Overlay with Socials */}
//         <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
//           <a
//             href={member.linkedin || "#"}
//             className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
//           >
//             <Linkedin size={18} />
//           </a>
//           <a
//             href={`mailto:${member.email || "hello@fuertedevelopers.in"}`}
//             className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
//           >
//             <Mail size={18} />
//           </a>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-8 flex flex-col flex-1">
//         <div className="mb-4">
//           <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
//             {member.name}
//           </h3>
//           <p className="text-primary text-sm font-semibold uppercase tracking-wider mt-1 opacity-80">
//             {member.role}
//           </p>
//         </div>
//         <div className="mt-auto border-t border-border/50 pt-5">
//           <p className="text-muted-foreground text-sm italic leading-relaxed line-clamp-3">
//             "{member.quote}"
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   </FadeIn>
// );

// const TeamPage = () => {
//   return (
//     <div className="min-h-screen bg-background font-sans antialiased text-foreground">
//       <Navbar />

//       <main className="pt-24 pb-20">
//         {/* Hero Section */}
//         <section className="relative py-20 overflow-hidden bg-secondary/30">
//           <div className="absolute inset-0 z-0 opacity-10">
//             <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
//           </div>

//           <div className="max-w-7xl mx-auto px-6 relative z-10">
//             <FadeIn>
//               <div className="text-center max-w-3xl mx-auto">
//                 <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 grayscale opacity-70">
//                   OUR TEAM
//                 </p>
//                 <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-6">
//                   Meet the Brilliant Minds Behind Our Innovations
//                 </h1>
//                 <p className="text-muted-foreground text-lg leading-relaxed">
//                   We are a diverse group of thinkers, builders, and dreamers dedicated to
//                   creating world-class digital solutions. Together, we turn complex challenges
//                   into elegant experiences.
//                 </p>
//               </div>
//             </FadeIn>
//           </div>
//         </section>

//         {/* Founders Section */}
//         <section className="py-24 px-6">
//           <div className="max-w-7xl mx-auto">
//             <FadeIn>
//               <h2 className="font-display text-3xl font-bold text-center mb-12">
//                 Founders
//               </h2>
//             </FadeIn>
//             {/* Centered row — spans 2 columns on md+, centered via justify-center */}
//             <div className="flex flex-wrap justify-center gap-10">
//               {founders.map((member, i) => (
//                 <div key={member.name} className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.667rem)]">
//                   <MemberCard member={member} i={i} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Divider */}
//         <div className="max-w-7xl mx-auto px-6">
//           <hr className="border-border" />
//         </div>

//         {/* Employees Section */}
//         <section className="py-24 px-6">
//           <div className="max-w-7xl mx-auto">
//             <FadeIn>
//               <h2 className="font-display text-3xl font-bold text-center mb-12">
//                 Our Team
//               </h2>
//             </FadeIn>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//               {employees.map((member, i) => (
//                 <MemberCard key={member.name} member={member} i={i} />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Culture / Mission Section — video removed */}
//         <section className="py-20 relative overflow-hidden border-y border-border">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="max-w-3xl mx-auto text-center">
//               <FadeIn>
//                 <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
//                   Driven by Innovation, Defined by Collaboration
//                 </h2>
//                 <div className="space-y-6 text-muted-foreground text-lg">
//                   <p>
//                     At Fuerte Developers, we believe that the best work happens when diverse
//                     perspectives come together. Our culture is built on transparency,
//                     continuous learning, and a relentless focus on quality.
//                   </p>
//                   <p>
//                     Every line of code we write and every pixel we place is a testament to
//                     our commitment to excellence and our passion for our clients' success.
//                   </p>
//                 </div>
//               </FadeIn>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default TeamPage;

// import { motion } from "framer-motion";
// import Navbar from "@/components/landing/Navbar";
// import Footer from "@/components/landing/Footer";
// import FadeIn from "@/components/landing/FadeIn";
// import { teamMembers } from "@/data/siteData";
// import teamCeo from "@/assets/team-ceo.png";
// import teamCofounder from "@/assets/team-cofounder.png";
// import { Mail, Linkedin, Twitter } from "lucide-react";

// interface TeamMember {
//   name: string;
//   role: string;
//   quote: string;
//   image: string;
//   email: string;
//   linkedin: string;
// }

// const images: Record<string, string> = {
//   "team-ceo": teamCeo,
//   "team-cofounder": teamCofounder,
// };

// // Founders — displayed separately at the top
// const founders: TeamMember[] = teamMembers.map(m => ({
//   ...m,
//   email: "hello@fuertedevelopers.in",
//   linkedin: "#",
// }));

// // Employees — displayed below founders
// const employees: TeamMember[] = [
//   {
//     name: "Vikram Singh",
//     role: "Head of Development",
//     quote: "Building robust architectures that scale with our clients' ambitions.",
//     image: "placeholder",
//     email: "vikram@fuertedevelopers.in",
//     linkedin: "#",
//   },
//   {
//     name: "Ananya Iyer",
//     role: "Senior UI/UX Designer",
//     quote: "Design is not just what it looks like, it's how it works and feels.",
//     image: "placeholder",
//     email: "ananya@fuertedevelopers.in",
//     linkedin: "#",
//   },
//   {
//     name: "Saurabh Sharma",
//     role: "Lead Mobile Developer",
//     quote: "Creating seamless mobile experiences for the modern world.",
//     image: "placeholder",
//     email: "saurabh@fuertedevelopers.in",
//     linkedin: "#",
//   },
//   {
//     name: "Megha Gupta",
//     role: "Marketing Strategist",
//     quote: "Connecting brands with their audience through data-driven storytelling.",
//     image: "placeholder",
//     email: "megha@fuertedevelopers.in",
//     linkedin: "#",
//   },
// ];

// // Reusable card component
// const MemberCard = ({ member, i }: { member: TeamMember; i: number }) => (
//   <FadeIn key={member.name} delay={i * 0.1}>
//     <motion.div
//       whileHover={{ y: -8 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="group h-full flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300"
//     >
//       {/* Image / Avatar Container */}
//       <div className="aspect-[5/3.4] relative overflow-hidden bg-muted">
//         {images[member.image] ? (
//           <img
//             src={images[member.image]}
//             alt={member.name}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center bg-secondary/50">
//             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
//               {member.name.charAt(0)}
//             </div>
//           </div>
//         )}

//         {/* Hover Overlay with Socials */}
//         <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
//           <a
//             href={member.linkedin || "#"}
//             className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
//           >
//             <Linkedin size={18} />
//           </a>
//           <a
//             href={`mailto:${member.email || "hello@fuertedevelopers.in"}`}
//             className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
//           >
//             <Mail size={18} />
//           </a>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-5 flex flex-col flex-1">
//         <div className="mb-3">
//           <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
//             {member.name}
//           </h3>
//           <p className="text-primary text-sm font-semibold uppercase tracking-wider mt-1 opacity-80">
//             {member.role}
//           </p>
//         </div>
//         <div className="mt-auto border-t border-border/50 pt-3">
//           <p className="text-muted-foreground text-sm italic leading-relaxed line-clamp-3">
//             "{member.quote}"
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   </FadeIn>
// );

// const TeamPage = () => {
//   return (
//     <div className="min-h-screen bg-background font-sans antialiased text-foreground">
//       <Navbar />

//       <main className="pt-24 pb-20">
//         {/* Hero Section */}
//         <section className="relative py-20 overflow-hidden bg-secondary/30">
//           <div className="absolute inset-0 z-0 opacity-10">
//             <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
//           </div>

//           <div className="max-w-7xl mx-auto px-6 relative z-10">
//             <FadeIn>
//               <div className="text-center max-w-3xl mx-auto">
//                 <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 grayscale opacity-70">
//                   OUR TEAM
//                 </p>
//                 <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-6">
//                   Meet the Brilliant Minds Behind Our Innovations
//                 </h1>
//                 <p className="text-muted-foreground text-lg leading-relaxed">
//                   We are a diverse group of thinkers, builders, and dreamers dedicated to
//                   creating world-class digital solutions. Together, we turn complex challenges
//                   into elegant experiences.
//                 </p>
//               </div>
//             </FadeIn>
//           </div>
//         </section>

//         {/* Founders Section */}
//         <section className="py-24 px-6">
//           <div className="max-w-7xl mx-auto">
//             <FadeIn>
//               <h2 className="font-display text-3xl font-bold text-center mb-12">
//                 Founders
//               </h2>
//             </FadeIn>
//             {/* Centered row — spans 2 columns on md+, centered via justify-center */}
//             <div className="flex flex-wrap justify-center gap-10">
//               {founders.map((member, i) => (
//                 <div key={member.name} className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.667rem)]">
//                   <MemberCard member={member} i={i} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Divider */}
//         <div className="max-w-7xl mx-auto px-6">
//           <hr className="border-border" />
//         </div>

//         {/* Employees Section */}
//         <section className="py-24 px-6">
//           <div className="max-w-7xl mx-auto">
//             <FadeIn>
//               <h2 className="font-display text-3xl font-bold text-center mb-12">
//                 Our Team
//               </h2>
//             </FadeIn>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//               {employees.map((member, i) => (
//                 <MemberCard key={member.name} member={member} i={i} />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Culture / Mission Section — video removed */}
//         <section className="py-20 relative overflow-hidden border-y border-border">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="max-w-2xl">
//               <FadeIn>
//                 <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
//                   Driven by Innovation, Defined by Collaboration
//                 </h2>
//                 <div className="space-y-6 text-muted-foreground text-lg">
//                   <p>
//                     At Fuerte Developers, we believe that the best work happens when diverse
//                     perspectives come together. Our culture is built on transparency,
//                     continuous learning, and a relentless focus on quality.
//                   </p>
//                   <p>
//                     Every line of code we write and every pixel we place is a testament to
//                     our commitment to excellence and our passion for our clients' success.
//                   </p>
//                 </div>
//               </FadeIn>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default TeamPage; 


import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import FadeIn from "@/components/landing/FadeIn";
import { teamMembers } from "@/data/siteData";
import teamCeo from "@/assets/team-ceo.png";
import teamCofounder from "@/assets/team-cofounder.png";
import { Mail, Linkedin, Twitter } from "lucide-react";

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
};

// Founders — displayed separately at the top
const founders: TeamMember[] = teamMembers.map(m => ({
  ...m,
  email: "hello@fuertedevelopers.in",
  linkedin: "#",
}));

// Employees — displayed below founders
const employees: TeamMember[] = [
  {
    name: "Vikram Singh",
    role: "Head of Development",
    quote: "Building robust architectures that scale with our clients' ambitions.",
    image: "placeholder",
    email: "vikram@fuertedevelopers.in",
    linkedin: "#",
  },
  {
    name: "Ananya Iyer",
    role: "Senior UI/UX Designer",
    quote: "Design is not just what it looks like, it's how it works and feels.",
    image: "placeholder",
    email: "ananya@fuertedevelopers.in",
    linkedin: "#",
  },
  {
    name: "Saurabh Sharma",
    role: "Lead Mobile Developer",
    quote: "Creating seamless mobile experiences for the modern world.",
    image: "placeholder",
    email: "saurabh@fuertedevelopers.in",
    linkedin: "#",
  },
  {
    name: "Megha Gupta",
    role: "Marketing Strategist",
    quote: "Connecting brands with their audience through data-driven storytelling.",
    image: "placeholder",
    email: "megha@fuertedevelopers.in",
    linkedin: "#",
  },
];

// Reusable card component
const MemberCard = ({ member, i }: { member: TeamMember; i: number }) => (
  <FadeIn key={member.name} delay={i * 0.1}>
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300"
    >
      {/* Image / Avatar Container */}
      <div className="aspect-[5/3.4] relative overflow-hidden bg-muted">
        {images[member.image] ? (
          <img
            src={images[member.image]}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/50">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
              {member.name.charAt(0)}
            </div>
          </div>
        )}

        {/* Hover Overlay with Socials */}
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={member.linkedin || "#"}
            className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${member.email || "hello@fuertedevelopers.in"}`}
            className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mt-1 opacity-80">
            {member.role}
          </p>
        </div>
        <div className="mt-auto border-t border-border/50 pt-3">
          <p className="text-muted-foreground text-sm italic leading-relaxed line-clamp-3">
            "{member.quote}"
          </p>
        </div>
      </div>
    </motion.div>
  </FadeIn>
);

// Smaller card for employees
const SmallMemberCard = ({ member, i }: { member: TeamMember; i: number }) => (
  <FadeIn key={member.name} delay={i * 0.1}>
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300"
    >
      {/* Image / Avatar Container */}
      <div className="aspect-[4/3] relative overflow-hidden bg-muted">
        {images[member.image] ? (
          <img
            src={images[member.image]}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/50">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
              {member.name.charAt(0)}
            </div>
          </div>
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <a href={member.linkedin || "#"} className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <Linkedin size={14} />
          </a>
          <a href={`mailto:${member.email || "hello@fuertedevelopers.in"}`} className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <Mail size={14} />
          </a>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display text-base font-bold group-hover:text-primary transition-colors leading-tight">
          {member.name}
        </h3>
        <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-0.5 opacity-80">
          {member.role}
        </p>
        <div className="mt-3 border-t border-border/50 pt-2">
          <p className="text-muted-foreground text-xs italic leading-relaxed line-clamp-2">
            "{member.quote}"
          </p>
        </div>
      </div>
    </motion.div>
  </FadeIn>
);

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-secondary/30">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 grayscale opacity-70">
                  OUR TEAM
                </p>
                <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-gradient mb-6">
                  Meet the Brilliant Minds Behind Our Innovations
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We are a diverse group of thinkers, builders, and dreamers dedicated to
                  creating world-class digital solutions. Together, we turn complex challenges
                  into elegant experiences.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold text-center mb-12">
                Founders
              </h2>
            </FadeIn>
            {/* Centered row — spans 2 columns on md+, centered via justify-center */}
            <div className="flex flex-wrap justify-center gap-10">
              {founders.map((member, i) => (
                <div key={member.name} className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.667rem)]">
                  <MemberCard member={member} i={i} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <hr className="border-border" />
        </div>

        {/* Employees Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold text-center mb-12">
                Our Team
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {employees.map((member, i) => (
                <SmallMemberCard key={member.name} member={member} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Culture / Mission Section — video removed */}
        <section className="py-20 relative overflow-hidden border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                  Driven by Innovation, Defined by Collaboration
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg">
                  <p>
                    At Fuerte Developers, we believe that the best work happens when diverse
                    perspectives come together. Our culture is built on transparency,
                    continuous learning, and a relentless focus on quality.
                  </p>
                  <p>
                    Every line of code we write and every pixel we place is a testament to
                    our commitment to excellence and our passion for our clients' success.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;