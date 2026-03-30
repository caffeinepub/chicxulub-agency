import { Instagram, Mail, Phone } from "lucide-react";
import { navigateTo } from "../hooks/useRouter";

const services = [
  { label: "QR Menu & POS", href: "/services/qr-menu" },
  { label: "Website Design", href: "/services/website-design" },
  { label: "SEO Optimization", href: "/services/seo" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "Video Editing", href: "/services/video-editing" },
  { label: "Branding", href: "/services/branding" },
  { label: "Chatbot Automation", href: "/services/chatbot-automation" },
  { label: "Business Analytics", href: "/services/business-analytics" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border"
      style={{ background: "oklch(0.948 0.009 56)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img
              src="/assets/generated/chicxulub-logo-transparent.dim_400x100.png"
              alt="Chicxulub"
              className="h-7 w-auto mb-3"
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              We Build Systems That Grow Your Business. Digital marketing and
              automation for cafes, startups, and growing businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(s.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/chicxulubdigital?utm_source=qr&igsh=MTJ6dXcweGs2Mjkzag=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram size={16} />
                @chicxulubdigital
              </a>
              <a
                href="https://wa.me/919916961245"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} />
                +91 9916961245
              </a>
              <a
                href="mailto:chicxulub.2026@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={16} />
                chicxulub.2026@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Chicxulub. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with &#x2665; using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
