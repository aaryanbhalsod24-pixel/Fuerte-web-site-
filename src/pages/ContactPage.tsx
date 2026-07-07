import { useState } from "react";
import FadeIn from "@/components/landing/FadeIn";
import { toast } from "@/hooks/use-toast";
import { useTranslation } from "@/contexts/LanguageContext";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5050/api";
const CONTACT_SOURCE = "fuertedevelopers.com";

const ContactPage = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    date: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          requirement: form.requirement,
          preferredDate: form.date,
          message: form.message,
          source: CONTACT_SOURCE,
        }),
      });
      const json = await res.json();
      if (json.success) {
        toast({
          title: t.appointmentTitle,
          description: t.appointmentDescription,
        });
        setForm({ name: "", email: "", phone: "", requirement: "", date: "", message: "" });
      } else {
        toast({
          title: "Something went wrong",
          description: json.message || "Please try again in a moment.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Could not reach the server. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div id="contact" className="grid md:grid-cols-2 gap-16 items-start">
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
                  className="inline-block bg-black text-white px-8 py-3 mt-1 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
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
                      Gurgaon Office
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
                  disabled={submitting}
                  className="w-full bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors disabled:opacity-60"
                >
                  {submitting ? "Sending..." : t.bookAppointment}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

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

export default ContactPage;
