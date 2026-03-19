import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks } from "@/data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };
  const toggleMobileDropdown = (label) =>
    setMobileDropdown(mobileDropdown === label ? null : label);

  // ── Mobile Drawer rendered via Portal directly into document.body ────────────
  // This ESCAPES any parent stacking context (overflow, transform, z-index)
  const mobileDrawer = createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99998,
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(300px, 85vw)",
              zIndex: 99999,
              background: "hsl(var(--background))",
              borderLeft: "1px solid hsl(var(--border))",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "-8px 0 48px rgba(0,0,0,0.22)",
            }}
          >
            {/* Drawer header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 18px",
                borderBottom: "1px solid hsl(var(--border))",
                flexShrink: 0,
              }}
            >
              <video
                src="/Logo_animation_fuerte_developers_6836436ffe.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  height: 32,
                  width: "auto",
                  objectFit: "contain",
                }}
              />

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  border: "1px solid hsl(var(--border))",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "hsl(var(--foreground))",
                  flexShrink: 0,
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Drawer links — scrollable */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                overflowX: "hidden",
                padding: "8px 12px",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {navLinks.map((link, i) => (
                <div
                  key={link.label}
                  style={{
                    borderBottom:
                      i < navLinks.length - 1
                        ? "1px solid hsl(var(--border)/0.5)"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "13px 6px",
                    }}
                  >
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: "hsl(var(--foreground))",
                          textDecoration: "none",
                          flex: 1,
                        }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => !link.dropdown && setIsOpen(false)}
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: "hsl(var(--foreground))",
                          textDecoration: "none",
                          flex: 1,
                        }}
                      >
                        {link.label}
                      </Link>
                    )}
                    {link.dropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          border: "1px solid hsl(var(--border))",
                          background:
                            mobileDropdown === link.label
                              ? "hsl(var(--primary)/0.1)"
                              : "transparent",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color:
                            mobileDropdown === link.label
                              ? "hsl(var(--primary))"
                              : "hsl(var(--muted-foreground))",
                          transform:
                            mobileDropdown === link.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "all .2s",
                        }}
                      >
                        <ChevronDown size={15} />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {link.dropdown && mobileDropdown === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ overflow: "hidden", paddingBottom: 10 }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                          }}
                        >
                          {link.dropdown.map((sub) => (
                            <div key={sub.label} style={{ display: "flex", flexDirection: "column" }}>
                              {link.label === "Products" && sub.subItems ? (
                                <>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 10,
                                      padding: "10px 12px",
                                      borderRadius: 10,
                                      background: "hsl(var(--muted)/0.4)",
                                    }}
                                  >
                                    {sub.icon && (
                                      <div
                                        style={{
                                          width: 30,
                                          height: 30,
                                          flexShrink: 0,
                                          borderRadius: 7,
                                          background: "hsl(var(--background))",
                                          border: "1px solid hsl(var(--border))",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          color: "hsl(var(--primary))",
                                        }}
                                      >
                                        <sub.icon size={15} />
                                      </div>
                                    )}
                                    <div style={{ fontSize: 13, fontWeight: 700, color: "hsl(var(--foreground))" }}>
                                      {sub.label}
                                    </div>
                                  </div>
                                  <div style={{ paddingLeft: 40, display: "flex", flexDirection: "column", gap: 2, marginBlock: "4px 8px" }}>
                                    {sub.subItems.map((item) => (
                                      <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                          fontSize: 12,
                                          padding: "6px 8px",
                                          color: "hsl(var(--muted-foreground))",
                                          textDecoration: "none",
                                          borderLeft: "1px solid hsl(var(--border))",
                                        }}
                                      >
                                        {item.label}
                                      </a>
                                    ))}
                                  </div>
                                </>
                              ) : (
                                <Link
                                  to={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "10px 12px",
                                    borderRadius: 10,
                                    background: "hsl(var(--muted)/0.4)",
                                    textDecoration: "none",
                                  }}
                                >
                                  {sub.icon && (
                                    <div
                                      style={{
                                        width: 30,
                                        height: 30,
                                        flexShrink: 0,
                                        borderRadius: 7,
                                        background: "hsl(var(--background))",
                                        border: "1px solid hsl(var(--border))",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "hsl(var(--primary))",
                                      }}
                                    >
                                      <sub.icon size={15} />
                                    </div>
                                  )}
                                  <div style={{ minWidth: 0 }}>
                                    <div style={{ fontSize: 13, fontWeight: 700, color: "hsl(var(--foreground))" }}>
                                      {sub.label}
                                    </div>
                                    {sub.description && (
                                      <div style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", marginTop: 1, WebkitLineClamp: 1, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                        {sub.description}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Drawer footer CTA */}
            <div
              style={{
                padding: "16px 18px",
                borderTop: "1px solid hsl(var(--border))",
                flexShrink: 0,
              }}
            >
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  padding: "13px 0",
                  borderRadius: 12,
                  background: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                  fontSize: 13,
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px hsl(var(--primary)/0.3)",
                }}
              >
                Start a Project
                <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </>
      )
      }
    </AnimatePresence >,
    document.body,
  );

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all .3s ease",
          background: scrolled
            ? "hsl(var(--background)/0.97)"
            : "hsl(var(--background)/0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid hsl(var(--border))"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "0 20px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              flexShrink: 0,
              height: "100%",
            }}
          >
            <video
              src="/Logo_animation_fuerte_developers_6836436ffe.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />

          </Link>

          {/* Desktop Links */}
          <div
            className="nav-desktop-links"
            style={{
              alignItems: "center",
              gap: 2,
              flex: 1,
              justifyContent: "center",
            }}
          >
            {navLinks.map((link) => (
              <DesktopNavItem
                key={link.label}
                link={link}
                active={activeDropdown === link.label}
                onEnter={handleMouseEnter}
                onLeave={handleMouseLeave}
              />
            ))}
          </div>

          {/* Desktop CTA */}
          <div
            className="nav-desktop-cta"
            style={{ alignItems: "center", gap: 10, flexShrink: 0 }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "7px 16px",
                background: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 800,
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 3px 12px hsl(var(--primary)/0.35)",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px hsl(var(--primary)/0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow =
                  "0 3px 12px hsl(var(--primary)/0.35)";
              }}
            >
              Download
              <ArrowRight size={12} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-mobile-toggle"
            style={{
              width: 38,
              height: 38,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              border: "1px solid hsl(var(--border))",
              background: isOpen ? "hsl(var(--primary)/0.08)" : "transparent",
              cursor: "pointer",
              color: isOpen ? "hsl(var(--primary))" : "hsl(var(--foreground))",
              transition: "all .2s",
              flexShrink: 0,
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <style>{`
          @media (min-width: 1024px) {
            .nav-desktop-links { display: flex !important; }
            .nav-desktop-cta   { display: flex !important; }
            .nav-mobile-toggle { display: none  !important; }
          }
          @media (max-width: 1023px) {
            .nav-desktop-links { display: none  !important; }
            .nav-desktop-cta   { display: none  !important; }
            .nav-mobile-toggle { display: flex  !important; }
          }
        `}</style>
      </nav>

      {/* Drawer portal — rendered directly in document.body, outside all stacking contexts */}
      {mobileDrawer}
    </>
  );
};

// ─── Desktop Nav Item ─────────────────────────────────────────────────────────
function DesktopNavItem({ link, active, onEnter, onLeave }) {
  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => link.dropdown && onEnter(link.label)}
      onMouseLeave={onLeave}
    >
      {link.href.startsWith("http") ? (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "5px 11px",
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            transition: "all .2s",
            background: active ? "hsl(var(--primary)/0.08)" : "transparent",
            color: active
              ? "hsl(var(--primary))"
              : "hsl(var(--muted-foreground))",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            if (!active) e.currentTarget.style.color = "hsl(var(--foreground))";
          }}
          onMouseLeave={(e) => {
            if (!active)
              e.currentTarget.style.color = "hsl(var(--muted-foreground))";
          }}
        >
          {link.label}
          {link.dropdown && (
            <ChevronDown
              size={13}
              style={{
                transform: active ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform .25s",
                opacity: 0.7,
              }}
            />
          )}
        </a>
      ) : (
        <Link
          to={link.href}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "5px 11px",
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            transition: "all .2s",
            background: active ? "hsl(var(--primary)/0.08)" : "transparent",
            color: active
              ? "hsl(var(--primary))"
              : "hsl(var(--muted-foreground))",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            if (!active) e.currentTarget.style.color = "hsl(var(--foreground))";
          }}
          onMouseLeave={(e) => {
            if (!active)
              e.currentTarget.style.color = "hsl(var(--muted-foreground))";
          }}
        >
          {link.label}
          {link.dropdown && (
            <ChevronDown
              size={13}
              style={{
                transform: active ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform .25s",
                opacity: 0.7,
              }}
            />
          )}
        </Link>
      )}

      {link.dropdown && (
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                left: "50%",
                transform: "translateX(-50%)",
                width: link.label === "Products" ? 220 : 280,
                background: "hsl(var(--background)/0.98)",
                border: "1px solid hsl(var(--border))",
                borderRadius: 16,
                padding: 10,
                zIndex: 100,
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {link.dropdown.map((sub) => (
                  <DropdownItem key={sub.label} sub={sub} parentLabel={link.label} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

// ─── Dropdown Item ────────────────────────────────────────────────────────────
function DropdownItem({ sub, parentLabel }) {
  const [hov, setHov] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const isExternal = sub.href && sub.href.startsWith("http");
  const isProducts = parentLabel === "Products";

  const content = (
    <>
      {sub.icon && (
        <div
          style={{
            width: isProducts ? 32 : 34,
            height: isProducts ? 32 : 34,
            flexShrink: 0,
            borderRadius: isProducts ? 8 : 9,
            background: (hov || showSub) ? "hsl(var(--primary)/0.12)" : "hsl(var(--muted))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: (hov || showSub) ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
            transition: "all .18s",
          }}
        >
          <sub.icon size={isProducts ? 16 : 17} />
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            fontSize: 13,
            fontWeight: 700,
            color: (hov || showSub) ? "hsl(var(--primary))" : "hsl(var(--foreground))",
            transition: "color .18s",
          }}
        >
          {sub.label}
          {(sub.subItems || isExternal) && (
            <ArrowRight
              size={11}
              style={{
                opacity: (hov || showSub) ? 1 : (isProducts ? 0.4 : 0),
                transform: (hov || showSub) ? "translateX(0)" : "translateX(-4px)",
                transition: "all .18s",
              }}
            />
          )}
        </div>
        {!isProducts && sub.description && (
          <p
            style={{
              fontSize: 11,
              color: "hsl(var(--muted-foreground))",
              margin: "3px 0 0",
              lineHeight: 1.5,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {sub.description}
          </p>
        )}
      </div>

      {/* --- Second Level Dropdown (Desktop) --- */}
      {isProducts && sub.subItems && (
        <AnimatePresence>
          {showSub && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{
                position: "absolute",
                top: -6,
                left: "100%",
                paddingLeft: 12,
                zIndex: 110,
              }}
            >
              <div
                style={{
                  width: 200,
                  background: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 12,
                  padding: 8,
                  boxShadow: "10px 10px 30px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {sub.subItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      padding: "8px 12px",
                      borderRadius: 8,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "hsl(var(--muted-foreground))",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "hsl(var(--primary)/0.05)";
                      e.currentTarget.style.color = "hsl(var(--primary))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "hsl(var(--muted-foreground))";
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );

  const style: any = {
    display: "flex",
    alignItems: isProducts ? "center" : "flex-start",
    gap: 12,
    padding: "10px 12px",
    borderRadius: 10,
    background: (hov || showSub) ? "hsl(var(--primary)/0.06)" : "transparent",
    textDecoration: "none",
    transition: "background .18s",
    position: "relative",
    cursor: "pointer",
  };

  return isExternal ? (
    <a
      href={sub.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => { setHov(true); if (isProducts && sub.subItems) setShowSub(true); }}
      onMouseLeave={() => { setHov(false); if (isProducts && sub.subItems) setShowSub(false); }}
      style={style}
    >
      {content}
    </a>
  ) : (
    <Link
      to={sub.href}
      onMouseEnter={() => { setHov(true); if (isProducts && sub.subItems) setShowSub(true); }}
      onMouseLeave={() => { setHov(false); if (isProducts && sub.subItems) setShowSub(false); }}
      style={style}
    >
      {content}
    </Link>
  );
}

export default Navbar;
