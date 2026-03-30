import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigateTo } from "../hooks/useRouter";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#founders" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (window.location.pathname !== "/") {
        navigateTo("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigateTo(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-card" : "border-b border-border"
      }`}
      style={{
        background:
          "linear-gradient(160deg, oklch(0.985 0.004 62) 0%, oklch(0.978 0.005 60) 100%)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigateTo("/");
          }}
          data-ocid="nav.link"
          className="flex-shrink-0"
        >
          <img
            src="/assets/uploads/whatsapp_image_2026-03-30_at_12.11.10_am-019d3d6d-cc36-7599-92ef-9fe0a9abcef6-1.jpeg"
            alt="Chicxulub"
            style={{
              height: "44px",
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              data-ocid="nav.link"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://wa.me/919916961245?text=Hi%20Chicxulub%2C%20I%27d%20like%20to%20get%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.primary_button"
            className="inline-flex items-center px-4 py-2 bg-foreground text-primary-foreground text-sm font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Get Quote
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          className="md:hidden border-t border-border px-4 py-4 space-y-3"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.985 0.004 62) 0%, oklch(0.978 0.005 60) 100%)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="block text-sm font-medium text-foreground py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919916961245?text=Hi%20Chicxulub%2C%20I%27d%20like%20to%20get%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 bg-foreground text-primary-foreground text-sm font-semibold rounded-lg mt-2"
          >
            Get Quote
          </a>
        </div>
      )}
    </header>
  );
}
