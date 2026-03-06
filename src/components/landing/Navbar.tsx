import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/siteData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        {/* <a href="#" className="flex items-center gap-2.5 group">
          <motion.img
            src="/favicon.ico"
            alt="Fuerte Logo"
            className="w-8 h-8 rounded-md object-contain"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 8, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </a>
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          Fuerte<span className="text-muted-foreground"> Developers</span>
        </a> */}
        {/* Logo + Text */}
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
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="text-sm bg-primary text-primary-foreground px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
            Get in Touch
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-border bg-background overflow-hidden">
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-center hover:opacity-90 transition-opacity">
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

