import { useState } from "react";
import FadeIn from "./FadeIn";
import { toast } from "@/hooks/use-toast";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Appointment Requested!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", service: "", date: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
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
                Partner with Fuerte Developers to bring your ideas to life. Our team delivers innovative digital solutions in branding, web & app development, SEO, and marketing to help your business grow.
              </p>
              <a
                href="mailto:hello@fuertedevelopers.com"
                className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Get a Free Consultation
              </a>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <form onSubmit={handleSubmit} className="border border-border rounded-2xl p-8 space-y-4">
              <h3 className="font-display text-xl font-semibold mb-2">Book Your Appointment</h3>
              <input
                type="text" placeholder="Name" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="email" placeholder="Email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="tel" placeholder="Phone" value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <select
                value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
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
                type="datetime-local" value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring text-muted-foreground"
              />
              <textarea
                placeholder="Message / Notes" rows={3} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Book Your Appointment
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
