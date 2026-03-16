import { useState } from "react";
import FadeIn from "./FadeIn";
import { toast } from "@/hooks/use-toast";

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

const blogPosts = [
  {
    title: "How to Choose the Right Website for Your Business",
    description:
      "A practical guide to picking the best website type—landing page, e-commerce, or custom web app—based on your goals.",
  },
  {
    title: "SEO Basics That Actually Move the Needle",
    description:
      "From technical fixes to content strategy, here are the essentials we focus on to improve rankings and leads.",
  },
  {
    title: "From Idea to App: A Clear Roadmap",
    description:
      "Learn the steps we follow to turn an idea into a scalable mobile app—planning, design, development, and launch.",
  },
] as const;

const CTASection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Requested!",
      description: "We'll get back to you shortly.",
    });
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
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
                We Have Served
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gradient">
                Diverse industry &amp; The list goes on
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4 mb-8 max-w-3xl">
                From manufacturing to services, we’ve helped brands across
                multiple sectors with websites, apps, SEO, and performance
                marketing.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {industriesServed.map((industry) => (
                  <li key={industry}>
                    <div className="h-full border border-border rounded-full px-4 py-2 text-sm bg-background hover:bg-secondary transition-colors">
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
                    Blog
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gradient">
                    Insights &amp; Updates
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-2xl">
                    Quick reads on branding, development, SEO, and marketing to
                    help you make better digital decisions.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    toast({
                      title: "Blog coming soon",
                      description:
                        "We’re publishing new articles shortly. For now, book a free consultation.",
                    })
                  }
                  className="shrink-0 bg-black text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
                >
                  View All Posts
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <div
                    key={post.title}
                    className="border border-border rounded-2xl p-8 hover:bg-secondary transition-colors duration-300"
                  >
                    <h4 className="font-display text-lg font-semibold mb-3">
                      {post.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {post.description}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        toast({
                          title: post.title,
                          description: "Full post coming soon.",
                        })
                      }
                      className="text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
                    >
                      Read more
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
                    Ready to Transform Your Business?
                  </h2>
                  <br></br>
                </FadeIn>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Partner with Fuerte Developers to bring your ideas to life.
                  Our team delivers innovative digital solutions in branding,
                  web &amp; app development, SEO, and marketing to help your
                  business grow.
                </p>
                <a
                  href="mailto:hello@fuertedevelopers.com"
                  className="inline-block bg-black text-white px-3 py-3 mt-1 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
                >
                  Get a Free Consultation
                </a>

                {/* Maps Start */}
                <div className="mt-10 grid md:grid-cols-2 gap-6">
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
                  Book Your Appointment
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
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring text-muted-foreground"
                >
                  <option value="">Select a Service</option>
                  <option>Shopify Store Development</option>
                  <option>Custom App Development</option>
                  <option>SEO</option>
                  <option>Local SEO</option>
                  <option>Social Media Marketing</option>
                  <option>Google / Meta Ads</option>
                </select>
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
                  Book Your Appointment
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
