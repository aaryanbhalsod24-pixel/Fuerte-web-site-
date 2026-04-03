import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Globe, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks } from "@/data/navigation";
import { useTranslation } from "@/contexts/LanguageContext";
import { Language } from "@/data/translations";
import { useModal } from "@/contexts/ModalContext";

const Navbar = () => {
  const { language, setLanguage, direction, t } = useTranslation();
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);
  const langMenuRef = useRef(null);

  // Helper to get translated nav data
  const getNavTranslations = (label: string) => {
    switch (label) {
      case "Home": return t.navHome;
      case "About": return t.navAbout;
      case "Services": return t.navServices;
      case "Products": return t.navProducts;
      case "Press & Media": return t.navPress;
      case "Blog": return t.navBlog;
      case "Contact": return t.navContact;
      default: return label;
    }
  };

  const getDropdownTranslations = (label: string) => {
    switch (label) {
      case "Company Overview": return { label: t.navAboutCompany, desc: t.navAboutCompanyDesc };
      case "Customer Stories": return { label: t.navAboutStories, desc: t.navAboutStoriesDesc };
      case "Our Team": return { label: t.navAboutTeam, desc: t.navAboutTeamDesc };
      case "Shopify Development": return { label: t.serShopify, desc: t.serShopifyDesc };
      case "App Development": return { label: t.serAppDev, desc: t.serAppDevDesc };
      case "On/Off Page SEO": return { label: t.serSEO, desc: t.serSEODesc };
      case "Local SEO": return { label: t.serLocalSEO, desc: t.serLocalSEODesc };
      case "Social Media": return { label: t.serSMM, desc: t.serSMMDesc };
      case "Google / Meta Ads": return { label: t.serAds, desc: t.serAdsDesc };
      // Products
      case "Inventory & Billing": return { label: t.prodInventory, desc: t.prodInventoryDesc };
      case "Aapka Care": return { label: t.prodHealthcare, desc: t.prodHealthcareDesc };
      case "Customize CRM": return { label: t.prodCRM, desc: t.prodCRMDesc };
      case "HRMS": return { label: t.prodHRMS, desc: t.prodHRMSDesc };
      case "Smart Parking": return { label: t.prodParking, desc: t.prodParkingDesc };
      // Sub-items
      case "Billing Sphere": return { label: t.subBillingSphere };
      case "Billing Sphere POS": return { label: t.subPOS };
      case "Delivery App": return { label: t.subDelivery };
      case "Laboratory": return { label: t.subLab };
      case "Appointment Booking": return { label: t.subAppointment };
      case "Hospital Management": return { label: t.subHospital };
      case "Spa Management": return { label: t.subSpa };
      case "Be On Time": return { label: t.subBeOnTime };
      case "Aapka Parking": return { label: t.subParking };
      default: return { label };
    }
  };  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
    { code: "gu", label: "ગુજરાતી", flag: "🇮🇳" },
    { code: "nl", label: "Dutch", flag: "🇳🇱" },
    { code: "fr", label: "French", flag: "🇫🇷" },
    { code: "ar", label: "العربية", flag: "🇦🇪" },
  ];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setShowLangMenu(false);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const mobileDrawer = createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
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

          <motion.div
            initial={{ x: direction === "rtl" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction === "rtl" ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            style={{
              position: "fixed",
              top: 0,
              right: direction === "rtl" ? "auto" : 0,
              left: direction === "rtl" ? 0 : "auto",
              bottom: 0,
              width: "min(300px, 85vw)",
              zIndex: 99999,
              background: "hsl(var(--background))",
              borderLeft: direction === "rtl" ? "none" : "1px solid hsl(var(--border))",
              borderRight: direction === "rtl" ? "1px solid hsl(var(--border))" : "none",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: direction === "rtl" ? "8px 0 48px rgba(0,0,0,0.22)" : "-8px 0 48px rgba(0,0,0,0.22)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderBottom: "1px solid hsl(var(--border))", flexShrink: 0 }}>
              <video src="/Logo_animation_fuerte_developers_6836436ffe.mp4" autoPlay loop muted playsInline preload="metadata" style={{ height: 32, width: "auto", objectFit: "contain" }} />
              <button onClick={() => setIsOpen(false)} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid hsl(var(--border))", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "hsl(var(--foreground))", flexShrink: 0 }}>
                <X size={16} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "8px 12px" }}>
              {navLinks.map((link, i) => {
                const translatedLabel = getNavTranslations(link.label);
                return (
                  <div key={link.label} style={{ borderBottom: i < navLinks.length - 1 ? "1px solid hsl(var(--border)/0.5)" : "none" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 6px" }}>
                      {link.href.startsWith("http") ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} style={{ fontSize: 15, fontWeight: 700, color: "hsl(var(--foreground))", textDecoration: "none", flex: 1 }}>{translatedLabel}</a>
                      ) : (
                        <Link to={link.href} onClick={() => !link.dropdown && setIsOpen(false)} style={{ fontSize: 15, fontWeight: 700, color: "hsl(var(--foreground))", textDecoration: "none", flex: 1 }}>{translatedLabel}</Link>
                      )}
                      {link.dropdown && (
                        <button onClick={() => toggleMobileDropdown(link.label)} style={{ width: 30, height: 30, borderRadius: 8, border: "1px solid hsl(var(--border))", background: mobileDropdown === link.label ? "hsl(var(--primary)/0.1)" : "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transform: mobileDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)", transition: "all .2s" }}><ChevronDown size={15} /></button>
                      )}
                    </div>
                  </div>
                );
              })}

              <div style={{ marginTop: 20, padding: "12px 6px", borderTop: "1px solid hsl(var(--border))" }}>
                <p style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "hsl(var(--muted-foreground))", marginBottom: 12 }}>{t.selectLanguage}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      style={{
                        padding: "10px",
                        borderRadius: 10,
                        border: "1px solid hsl(var(--border))",
                        background: language === lang.code ? "hsl(var(--primary)/0.1)" : "transparent",
                        color: language === lang.code ? "hsl(var(--primary))" : "hsl(var(--foreground))",
                        fontSize: 13,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        cursor: "pointer"
                      }}
                    >
                      <span>{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: "16px 18px", borderTop: "1px solid hsl(var(--border))" }}>
              <button 
                onClick={() => { setIsOpen(false); openModal(); }} 
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "13px 0", borderRadius: 12, background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", fontSize: 13, fontWeight: 800, border: "none", cursor: "pointer" }}
              >
                {t.startProject}
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, transition: "all .3s ease",
          background: scrolled ? "hsl(var(--background)/0.97)" : "hsl(var(--background)/0.85)",
          backdropFilter: "blur(20px)", borderBottom: scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent",
          padding: "0 20px"
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link to="/" style={{ height: "100%", display: "flex", alignItems: "center" }}>
            <video src="/Logo_animation_fuerte_developers_6836436ffe.mp4" autoPlay loop muted playsInline preload="metadata" style={{ height: 40, width: "auto" }} />
          </Link>

          <div className="nav-desktop-links" style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, justifyContent: "center" }}>
            {navLinks.map((link) => (
              <DesktopNavItem 
                key={link.label} 
                link={link} 
                label={getNavTranslations(link.label)}
                active={activeDropdown === link.label} 
                onEnter={() => handleMouseEnter(link.label)} 
                onLeave={handleMouseLeave}
                getDropdownTranslations={getDropdownTranslations}
              />
            ))}
          </div>

          <div className="nav-desktop-cta" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ position: "relative" }} ref={langMenuRef}>
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                style={{
                  display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 100, border: "1px solid hsl(var(--border))",
                  background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 700, color: "hsl(var(--foreground))", transition: "all 0.2s"
                }}
              >
                <Globe size={14} className="text-primary" />
                {languages.find(l => l.code === language)?.label}
                <ChevronDown size={12} style={{ transform: showLangMenu ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    style={{
                      position: "absolute", top: "calc(100% + 8px)", right: direction === "rtl" ? "auto" : 0, left: direction === "rtl" ? 0 : "auto",
                      width: 160, background: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: 16, padding: 8,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)", zIndex: 1100
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      {languages.map((lang) => (
                        <button
                          key={lang.code} onClick={() => handleLanguageChange(lang.code)}
                          style={{
                            display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", borderRadius: 12, background: language === lang.code ? "hsl(var(--primary)/0.08)" : "transparent",
                            color: language === lang.code ? "hsl(var(--primary))" : "hsl(var(--foreground))", fontSize: 13, fontWeight: 700, border: "1px solid", borderColor: language === lang.code ? "hsl(var(--primary)/0.2)" : "transparent", cursor: "pointer", transition: "all 0.2s", textAlign: direction === "rtl" ? "right" : "left"
                          }}
                        >
                          <span style={{ fontSize: 18 }}>{lang.flag}</span>
                          <span style={{ flex: 1 }}>{lang.label}</span>
                          {language === lang.code && <Check size={12} strokeWidth={3} />}
                        </button>

                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Hidden Google Translate Element to serve as the 'backend' */}
            <div id="google_translate_element"></div>

            <button 
              onClick={openModal} 
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 20px", background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", borderRadius: 100, fontSize: 13, fontWeight: 800, border: "none", cursor: "pointer", boxShadow: "0 4px 12px hsl(var(--primary)/0.3)" }}
            >
              {t.startProject}
              <ArrowRight size={14} />
            </button>
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
function DesktopNavItem({ link, label, active, onEnter, onLeave, getDropdownTranslations }) {
  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => link.dropdown && onEnter()}
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
          {label}
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
          {label}
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
                {link.dropdown.map((sub) => {
                  const translated = getDropdownTranslations(sub.label);
                  const subItems = sub.subItems ? sub.subItems.map(si => ({
                    ...si,
                    label: getDropdownTranslations(si.label).label
                  })) : undefined;

                  return (
                    <DropdownItem 
                      key={sub.label} 
                      sub={{ ...sub, label: translated.label, description: translated.desc, subItems }} 
                      parentLabel={link.label} 
                    />
                  );

                })}
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
                      textAlign: (typeof document !== 'undefined' && document.documentElement.dir === 'rtl') ? 'right' : 'left'
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
