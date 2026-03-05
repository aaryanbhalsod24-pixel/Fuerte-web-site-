import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Group Profile", "Divisions", "Portfolio", "Investors"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-bold text-sm">
            A
          </div>
          <span className="font-bold text-sm tracking-widest uppercase text-foreground">
            Fuerte Developers
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
            Enquire
          </a>
          <a
            href="#"
            className="bg-primary text-primary-foreground text-sm px-5 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link} href="#" className="block text-sm text-muted-foreground hover:text-foreground">
              {link}
            </a>
          ))}
          <a href="#" className="block text-sm text-primary">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
