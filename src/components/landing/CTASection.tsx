import { useState } from "react";
import FadeIn from "./FadeIn";
import { toast } from "@/hooks/use-toast";
import { useTranslation } from "@/contexts/LanguageContext";

const industriesServed = [
  "Jewellery Manufacturing",
  "Clothing & Accessories",
  "Food & Beverages",
  "Interior",
  "Ceramic",
  "Transportation",
  "Hospital",
  "Real Estate",
  "Construction",
  "Accommodation",
  "Courier",
  "Education",
  "Electric Equipment",
  "Finance & Insurance",
  "Furniture & Furnishing",
  "Appliances",
  "Agriculture",
  "Machinery Manufacturing",
  "Paper Manufacturing",
  "Telecommunications",
  "Textiles Mills",
  "Wholesale Trade & Many More",
  "Building Material",
  "Stores",
] as const;

const CTASection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    date: "",
    message: "",
  });

  const blogPosts = [
    {
      title: t.test1Name, // Reusing some keys or using generic ones if needed
      description: t.blogDesc,
    },
    // Adding logic for blog posts later if needed, but for now let's just use what's in translations.ts
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.appointmentTitle,
      description: t.appointmentDescription,
    });
    setForm({
      name: "",
      email: "",
      phone: "",
      requirement: "",
      date: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-20">
          <FadeIn>
            <div className="border border-border rounded-2xl p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {t.industriesLabel}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gradient">
                {t.industriesTitle}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4 mb-8 max-w-3xl">
                {t.industriesDesc}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {industriesServed.map((industry) => (
                  <li key={industry}>
                    <div className="h-full border border-border rounded-full px-4 py-2 text-sm bg-background hover:bg-secondary transition-colors text-center">
                      {industry}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <div className="flex items-end justify-between gap-6 mb-10">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    {t.blogLabel}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gradient">
                    {t.blogTitle}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-2xl">
                    {t.blogDesc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    toast({
                      title: t.blogTitle,
                      description: t.readMore,
                    })
                  }
                  className="shrink-0 bg-black text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
                >
                  {t.viewAllPosts}
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((post) => (
                  <div
                    key={post}
                    className="border border-border rounded-2xl p-8 hover:bg-secondary transition-colors duration-300"
                  >
                    <h4 className="font-display text-lg font-semibold mb-3">
                      {t[`test${post}Name` as keyof typeof t] || "Blog Post"}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {t.blogDesc}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        toast({
                          title: t.blogTitle,
                          description: t.readMore,
                        })
                      }
                      className="text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
                    >
                      {t.readMore}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div>
                <FadeIn delay={0.1}>
                  <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
                    {t.ctaTitle}
                  </h2>
                  <br></br>
                </FadeIn>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {t.heroSubtitle}
                </p>
                <a
                  href="mailto:hello@fuertedevelopers.com"
                  className="inline-block bg-black text-white px-3 py-3 mt-1 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
                >
                  {t.getFreeConsultation}
                </a>

                {/* Maps Start */}
                <div className="mt-10 grid md:grid-cols-2 gap-6">
                  {/* Rajkot Office */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">
                      Rajkot Office
                    </h4>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.98!2d70.76715!3d22.31888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9909e845a83%3A0x4863465519cad832!2sFuerte%20Developers!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="180"
                      className="w-full h-64 rounded-lg border-0 shadow-xl"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  {/* Delhi Office */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">
                      Delhi Office
                    </h4>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.12!2d77.04088!3d28.41974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23e7a452e89b%3A0x3fd39361c1f7c21d!2sFuerte%20Developers!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="180"
                      className="w-full h-64 rounded-lg border-0 shadow-xl"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                {/* Maps End */}
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <form
                onSubmit={handleSubmit}
                className="border border-border rounded-2xl p-8 space-y-4"
              >
                <h3 className="font-display text-xl font-semibold mb-2">
                  {t.appointmentTitle}
                </h3>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="text"
                  placeholder="Your Requirement"
                  required
                  value={form.requirement}
                  onChange={(e) =>
                    setForm({ ...form, requirement: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="datetime-local"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring text-muted-foreground"
                />
                <textarea
                  placeholder="Message / Notes"
                  rows={3}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
                >
                  {t.bookAppointment}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
