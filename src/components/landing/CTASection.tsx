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
              {/* Maps Start */}
{/* <div className="mt-10 space-y-4">
  <iframe
    src="https://www.google.com/maps?q=rajkot&output=embed"
    className="w-full h-40 rounded-lg border"
    loading="lazy"
  ></iframe>

  <iframe
    src="https://www.google.com/maps?q=ahmedabad&output=embed"
    className="w-full h-40 rounded-lg border"
    loading="lazy"
  ></iframe>
</div> */}
{/* Maps End */}

{/* Maps Start */}
<div className="mt-10 space-y-6">
  {/* Delhi Office */}
  <div>
    <h4 className="font-semibold mb-3 text-foreground">Delhi Office</h4>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.12!2d77.04088!3d28.41974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23e7a452e89b%3A0x3fd39361c1f7c21d!2sFuerte%20Developers!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
      width="100%"
      height="250"
      className="w-full h-64 rounded-lg border-0 shadow-xl"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Rajkot Office */}
  <div>
    <h4 className="font-semibold mb-3 text-foreground">Rajkot Office</h4>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.98!2d70.76715!3d22.31888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9909e845a83%3A0x4863465519cad832!2sFuerte%20Developers!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
      width="100%"
      height="250"
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
