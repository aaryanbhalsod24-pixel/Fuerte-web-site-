import { Globe, Mail, Share2, MapPin, Phone, AtSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-bold text-xs">
                A
              </div>
              <span className="font-bold text-xs tracking-widest uppercase text-foreground">
                Fuerte Developers
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building the pillars of modern society through disciplined
              investment, innovative engineering, and visionary leadership.
            </p>
            <div className="flex gap-3">
              {[Globe, Mail, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-foreground mb-4">
              Group
            </h4>
            {["Our Vision", "History", "Leadership", "Governance"].map((l) => (
              <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-foreground mb-2 transition-colors">
                {l}
              </a>
            ))}
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-foreground mb-4">
              Divisions
            </h4>
            {["Technology", "Real Estate", "Logistics", "Capital"].map((l) => (
              <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-foreground mb-2 transition-colors">
                {l}
              </a>
            ))}
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-foreground mb-4">
              HQ Contact
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <span>100 Financial Plaza, Suite 400<br />New York, NY 10005, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                <span>+1 (555) 900-4000</span>
              </div>
              <div className="flex items-center gap-2">
                <AtSign size={14} className="text-primary shrink-0" />
                <span>hq@fuertedevelopers.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            © 2024 Fuerte Developers Group. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Compliance"].map((l) => (
              <a key={l} href="#" className="text-xs text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
