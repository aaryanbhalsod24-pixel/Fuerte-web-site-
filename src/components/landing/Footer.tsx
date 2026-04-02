import { footerLinks } from "@/data/navigation";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/contexts/LanguageContext";

// ─── Instagram posts (@fuerte_developers) ────────────────────────────────────
const INSTA_POSTS = [
  {
    url: "https://www.instagram.com/p/DWgkr73jYGy/",
    thumb:
      "https://wsrv.nl/?url=instagram.com/p/DWgkr73jYGy/media/?size=m&w=400&h=400&fit=cover&output=jpg",
  },
  {
    url: "https://www.instagram.com/p/DWTqel3jZzp/",
    thumb:
      "https://wsrv.nl/?url=instagram.com/p/DWTqel3jZzp/media/?size=m&w=400&h=400&fit=cover&output=jpg",
  },
  {
    url: "https://www.instagram.com/p/DWRHHWYjz_J/",
    thumb:
      "https://wsrv.nl/?url=instagram.com/p/DWRHHWYjz_J/media/?size=m&w=400&h=400&fit=cover&output=jpg",
  },
  {
    url: "https://www.instagram.com/p/DVyPNGzAN-i/",
    thumb:
      "https://wsrv.nl/?url=instagram.com/p/DVyPNGzAN-i/media/?size=m&w=400&h=400&fit=cover&output=jpg",
  },
  {
    url: "https://www.instagram.com/p/DVs7putDHL3/",
    thumb:
      "https://wsrv.nl/?url=instagram.com/p/DVs7putDHL3/media/?size=m&w=400&h=400&fit=cover&output=jpg",
  },
  {
    url: "https://www.instagram.com/p/DVqD5rxDsV7/",
    thumb:
      "https://wsrv.nl/?url=instagram.com/p/DVqD5rxDsV7/media/?size=m&w=400&h=400&fit=cover&output=jpg",
  },
];

const INSTA_PROFILE = "https://www.instagram.com/fuerte_developers?igshid=ky7ulp42smfv";
const INSTA_FOLLOWERS = "3.16K";
const INSTA_POSTS_CT = "1,660+";

// ─── Instagram photo tile ─────────────────────────────────────────────────────
function InstaPost({ url, thumb }: { url: string; thumb: string }) {
  const [hov, setHov] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        display: "block",
        borderRadius: 10,
        overflow: "hidden",
        aspectRatio: "1/1",
        background: "hsl(var(--muted))",
        boxShadow: hov
          ? "0 8px 28px hsl(var(--primary)/0.35)"
          : "0 2px 8px rgba(0,0,0,0.08)",
        transition: "box-shadow .3s",
        textDecoration: "none",
      }}
    >
      <img
        src={
          imgError
            ? `https://picsum.photos/seed/${url.slice(-8)}/400/400`
            : thumb
        }
        alt="Instagram post"
        onError={() => setImgError(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          transform: hov ? "scale(1.08)" : "scale(1)",
          transition: "transform .4s cubic-bezier(.25,.8,.25,1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hov
            ? "linear-gradient(135deg,hsl(var(--primary)/0.75),rgba(0,0,0,0.45))"
            : "rgba(0,0,0,0)",
          transition: "background .3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Instagram
          size={24}
          color="white"
          style={{
            opacity: hov ? 1 : 0,
            transform: hov ? "scale(1)" : "scale(0.6)",
            transition: "all .25s",
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))",
          }}
        />
      </div>
    </a>
  );
}

// ─── Reusable sub-components ─────────────────────────────────────────────────
const SLabel = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontSize: 11,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: "hsl(var(--foreground))",
      marginBottom: 24,
      marginTop: 0,
      opacity: 0.9,
    }}
  >
    {children}
  </p>
);

const FLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        color: hov ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
        textDecoration: "none",
        transition: "color .2s",
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: hov ? "hsl(var(--primary))" : "hsl(var(--primary)/0.3)",
          flexShrink: 0,
          transition: "background .2s",
        }}
      />
      {children}
    </a>
  );
};

const CItem = ({
  Icon,
  href,
  text,
}: {
  Icon: React.ElementType;
  href: string;
  text: string;
}) => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        textDecoration: "none",
        color: hov ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
        transition: "color .2s",
      }}
    >
      <span
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          flexShrink: 0,
          marginTop: 1,
          background: "hsl(var(--primary)/0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={13} style={{ color: "hsl(var(--primary))" }} />
      </span>
      <span style={{ fontSize: 13, lineHeight: 1.6 }}>{text}</span>
    </a>
  );
};

const CItemLink = ({ href, text }: { href: string; text: React.ReactNode }) => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: 13,
        lineHeight: 1.6,
        textDecoration: "none",
        color: hov ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
        transition: "color .2s",
        display: "block",
      }}
    >
      {text}
    </a>
  );
};

const CMultiItem = ({
  Icon,
  items,
}: {
  Icon: React.ElementType;
  items: { href: string; text: React.ReactNode }[];
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
      }}
    >
      <span
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          flexShrink: 0,
          marginTop: 1,
          background: "hsl(var(--primary)/0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={13} style={{ color: "hsl(var(--primary))" }} />
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item, idx) => (
          <CItemLink key={idx} href={item.href} text={item.text} />
        ))}
      </div>
    </div>
  );
};

const SocBtn = ({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ElementType;
}) => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 36,
        height: 36,
        borderRadius: 9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .2s",
        border: `1px solid ${hov ? "hsl(var(--primary))" : "hsl(var(--border))"}`,
        background: hov ? "hsl(var(--primary))" : "transparent",
        color: hov ? "hsl(var(--primary-foreground))" : "inherit",
      }}
    >
      <Icon size={15} />
    </a>
  );
};

// ─── Policy Link ─────────────────────────────────────────────────────────────
function PolicyLink({ label }: { label: string }) {
  const [h, setH] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setH(h === true ? true : true)} // Just to trigger re-renders or fix h logic if needed
      onMouseLeave={() => setH(false)}
      style={{
        fontSize: 12,
        textDecoration: "none",
        transition: "color .2s",
        color: h ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
      }}
    >
      {label}
    </a>
  );
}

// ─── MAIN FOOTER ─────────────────────────────────────────────────────────────
export default function Footer() {
  const { t } = useTranslation();

  // Map quick links
  const getTranslatedLabel = (label: string) => {
    switch (label) {
      case "Home": return t.navHome;
      case "About Us": return t.navAbout;
      case "Services": return t.navServices;
      case "Contact": return t.navContact;
      default: return label;
    }
  };

  return (
    <>
      <style>{`
        .footer-outer {
          background: hsl(var(--background));
          border-top: 1px solid hsl(var(--border));
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 56px 24px 40px;
        }

        .footer-grid {
          display: grid;
          gap: 36px;
          grid-template-columns: 1fr;
        }

        .footer-col-brand,
        .footer-col-links,
        .footer-col-contact,
        .footer-col-insta {
          grid-column: 1 / -1;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-col-brand { grid-column: 1 / -1; }
          .footer-col-links { grid-column: 1 / 2; }
          .footer-col-contact { grid-column: 2 / 3; }
          .footer-col-insta { grid-column: 1 / -1; }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.4fr 1fr 1.3fr 1.5fr;
            gap: 40px;
          }
          .footer-col-brand { grid-column: 1 / 2; }
          .footer-col-links { grid-column: 2 / 3; }
          .footer-col-contact { grid-column: 3 / 4; }
          .footer-col-insta { grid-column: 4 / 5; }
        }

        .footer-bottom {
          border-top: 1px solid hsl(var(--border));
          padding: 16px 24px;
        }

        .footer-bottom-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .footer-policy-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        @media (max-width: 480px) {
          .footer-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
      <footer className="footer-outer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-col-brand">
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <img src="/favicon.ico" alt="Fuerte Developers" style={{ width: 46, height: 46, borderRadius: 12, border: "2px solid hsl(var(--primary)/0.3)", boxShadow: "0 4px 16px hsl(var(--primary)/0.2)" }} />
                <div>
                  <div style={{ fontWeight: 900, fontSize: 16, lineHeight: 1.2 }}>Fuerte</div>
                  <div style={{ fontWeight: 900, fontSize: 16, color: "hsl(var(--primary))", lineHeight: 1.2 }}>Developers</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", lineHeight: 1.7, marginBottom: 22, maxWidth: 360 }}>
                {t.footerDesc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {footerLinks.socialLinks.map((l) => (
                  <SocBtn key={l.label} href={l.href} label={l.label} Icon={l.icon} />
                ))}
              </div>
            </div>

            <div className="footer-col-links">
              <SLabel>{t.quickLinks}</SLabel>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {footerLinks.quickLinks.map((l) => (
                  <li key={l.label}>
                    <FLink href={l.href}>{getTranslatedLabel(l.label)}</FLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col-contact">
              <SLabel>{t.contactUs}</SLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <CItem Icon={Mail} href="mailto:contact@fuertedevelopers.com" text="contact@fuertedevelopers.com" />
                <CMultiItem Icon={Phone} items={[{ href: "tel:+919724000697", text: "+91 97240 00697" }, { href: "tel:+917990486477", text: "+91 79904 86477" }]} />
                <CMultiItem Icon={MapPin} items={[
                  { href: "https://maps.app.goo.gl/3KByJ3zYynQ7yZsM8", text: (<><span style={{ fontWeight: 800, color: "hsl(var(--foreground))" }}>Head Office:</span> 405 - The Spire, Nr. Sheetal Park, 150 Ft. Ring Road, Rajkot-360005</>) },
                  { href: "https://maps.app.goo.gl/GR7ZDNAdsnHziB5R6", text: (<><span style={{ fontWeight: 800, color: "hsl(var(--foreground))" }}>Branch Office:</span> 806 - The Platinum Tower, Sector 47, Gurugram, Haryana-122018</>) },
                  { href: "https://maps.app.goo.gl/BMYy65wdPPNAtEup6", text: (<><span style={{ fontWeight: 800, color: "hsl(var(--foreground))" }}>Dubai Office:</span> FZ Meydan Grandstand, Dubai UAE</>) }
                ]} />
              </div>
            </div>

            <div className="footer-col-insta">
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 12, marginBottom: 16, background: "hsl(var(--muted)/0.3)", backdropFilter: "blur(8px)", border: "1px solid hsl(var(--border)/0.5)" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", padding: 2.5, flexShrink: 0, background: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}>
                  <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "hsl(var(--background))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Instagram size={17} style={{ color: "#dc2743" }} />
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: 13 }}>fuerte_developers</div>
                  <div style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", marginTop: 2 }}>{INSTA_FOLLOWERS} followers · {INSTA_POSTS_CT} posts</div>
                </div>
                <a href={INSTA_PROFILE} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, fontWeight: 800, padding: "6px 14px", borderRadius: 8, background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))", textDecoration: "none", flexShrink: 0, whiteSpace: "nowrap" }}>
                  {t.followUs}
                </a>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {INSTA_POSTS.slice(0, 6).map((p, i) => (
                  <InstaPost key={i} url={p.url} thumb={p.thumb} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", margin: 0 }}>
              © {new Date().getFullYear()} <span style={{ color: "hsl(var(--primary))", fontWeight: 800 }}>FUERTE DEVELOPERS</span> | {t.allRightsReserved}.
            </p>
            <div className="footer-policy-links">
              {[
                { key: "privacy", label: t.privacyPolicy },
                { key: "terms", label: t.termsOfService },
                { key: "cookie", label: t.cookiePolicy },
              ].map((item) => (
                <PolicyLink key={item.key} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
