import { footerLinks } from "@/data/siteData";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="section-padding-sm border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <a href="#" className="flex items-center gap-2 group">
  <motion.img
    src="/favicon.ico"
    alt="Fuerte Logo"
    className="w-8 h-8 rounded-md object-contain"
    initial={{ rotate: 0 }}
    whileHover={{ rotate: 8, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  />

  <span className="font-display text-xl font-bold tracking-tight">
    Fuerte<span className="text-muted-foreground"> Developers</span>
  </span>
</a>
            <br></br>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Empowering Businesses with Innovative Digital Solutions
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              {/* <p>Email: contact@fuertedevelopers.com</p>
              <p>Phone: +91 79039 55297</p> */}
              {/* <p><span className="font-semibold">Email:</span> contact@fuertedevelopers.com</p>
              <p><span className="font-semibold">Phone:</span> +91 79904 86477</p>
              <p>The Spire, 405, 150 Feet Ring Rd, Sheetal Park,
                  Manharpura 1, Madhapar, Rajkot, Gujarat 360007</p> */}
              <div className="text-sm text-muted-foreground space-y-3">

  <a
    href="mailto:contact@fuertedevelopers.com"
    className="flex items-center gap-2 hover:text-foreground transition-colors"
  >
    <Mail size={16} />
    contact@fuertedevelopers.com
  </a>

  <a
    href="tel:+917990486477"
    className="flex items-center gap-2 hover:text-foreground transition-colors"
  >
    <Phone size={16} />
    +91 79904 86477
  </a>

  <div className="flex items-start gap-2">
    <MapPin size={16} className="mt-1 flex-shrink-0" />
    The Spire, 405, 150 Feet Ring Rd, Sheetal Park,
    Manharpura 1, Madhapar, Rajkot, Gujarat 360007
  </div>

</div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</p>
            <div className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-4 uppercase tracking-wider">Follow Us</p>
            <div className="flex gap-4">
              {footerLinks.socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href} aria-label={link.label} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fuerte Developers  | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
