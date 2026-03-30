import {
  ArrowRight,
  Award,
  BarChart3,
  Bot,
  CheckCircle2,
  Globe,
  MousePointer2,
  Palette,
  Phone,
  QrCode,
  Search,
  Star,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSubmitLead } from "../hooks/useQueries";
import { navigateTo } from "../hooks/useRouter";

function AnimatedSection({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

const services = [
  {
    slug: "qr-menu",
    icon: QrCode,
    title: "QR Menu & POS Systems",
    benefit: "Modernize ordering and boost table turnover",
  },
  {
    slug: "website-design",
    icon: Globe,
    title: "Website Design & Development",
    benefit: "Convert visitors into paying customers",
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO Optimization",
    benefit: "Rank higher and attract organic leads",
  },
  {
    slug: "google-ads",
    icon: MousePointer2,
    title: "Google Ads",
    benefit: "Reach customers actively searching for you",
  },
  {
    slug: "meta-ads",
    icon: Target,
    title: "Meta Ads",
    benefit: "Scale revenue with precision social targeting",
  },
  {
    slug: "video-editing",
    icon: Video,
    title: "Video Editing",
    benefit: "Content that captures attention and drives action",
  },
  {
    slug: "branding",
    icon: Palette,
    title: "Branding",
    benefit: "Build a brand that commands trust and loyalty",
  },
  {
    slug: "chatbot-automation",
    icon: Bot,
    title: "Chatbot Automation",
    benefit: "Qualify leads and close sales 24/7 automatically",
  },
  {
    slug: "business-analytics",
    icon: BarChart3,
    title: "Business Analytics",
    benefit: "Make data-driven decisions that grow revenue",
  },
];

const whyUs = [
  {
    icon: TrendingUp,
    title: "Real Business Results",
    desc: "Every strategy we deploy is measured by revenue impact, not vanity metrics.",
  },
  {
    icon: Zap,
    title: "Revenue-Generating Systems",
    desc: "We build end-to-end systems — from awareness to conversion to retention.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategies",
    desc: "Every decision is backed by analytics, A/B tests, and market research.",
  },
  {
    icon: Award,
    title: "Long-Term Growth",
    desc: "We architect sustainable growth, not short-lived spikes.",
  },
  {
    icon: Users,
    title: "Your Growth Partner",
    desc: "We become part of your team, invested in your success as deeply as you are.",
  },
];

const process = [
  {
    num: "01",
    title: "Understand Your Business",
    desc: "We deep-dive into your goals, market, and competition to uncover growth opportunities.",
  },
  {
    num: "02",
    title: "Build the Right System",
    desc: "We design a custom marketing and automation system tailored to your business model.",
  },
  {
    num: "03",
    title: "Launch and Execute",
    desc: "Precise, data-backed campaigns and systems go live with real-time monitoring.",
  },
  {
    num: "04",
    title: "Scale and Optimize",
    desc: "Continuous testing and optimization to compound results month over month.",
  },
];

const portfolio = [
  {
    img: "/assets/generated/portfolio-cafe.dim_600x400.jpg",
    title: "Café Increased Orders by 120%",
    tag: "QR Menu + Meta Ads",
    desc: "We implemented a QR ordering system and ran targeted Instagram campaigns. The café saw a 120% jump in dine-in orders within 60 days.",
  },
  {
    img: "/assets/generated/portfolio-ecommerce.dim_600x400.jpg",
    title: "E-commerce Brand Scaled 3× Revenue",
    tag: "Google Ads + SEO",
    desc: "Through aggressive Google Shopping campaigns and on-page SEO, we tripled the brand's monthly revenue in under 4 months.",
  },
  {
    img: "/assets/generated/portfolio-marketing.dim_600x400.jpg",
    title: "Lead Gen Campaign: 400+ Qualified Leads",
    tag: "Meta Ads + Chatbot",
    desc: "A B2B startup generated 400+ qualified leads in 30 days using our Meta Ads funnel combined with WhatsApp chatbot automation.",
  },
];

const founders = [
  {
    name: "Venkatesh",
    role: "Co-Founder",
    tag: "Creative Team",
    img: "/assets/generated/founder-venkatesh.dim_400x400.png",
  },
  {
    name: "Vijay",
    role: "Co-Founder",
    tag: null,
    img: "/assets/generated/founder-vijay.dim_400x400.png",
  },
  {
    name: "Priyanka",
    role: "Co-Founder",
    tag: "Creative Team",
    img: "/assets/generated/founder-priyanka.dim_400x400.png",
  },
  {
    name: "Sushmita",
    role: "Co-Founder",
    tag: null,
    img: "/assets/generated/founder-sushmita.dim_400x400.png",
  },
];

const WA_BASE = "https://wa.me/919916961245";

export function Home() {
  const submitLead = useSubmitLead();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitLead.mutateAsync(form);
    } catch (_) {
      // proceed even if backend fails
    }
    const msg = encodeURIComponent(
      `Hi Chicxulub, I just filled out your contact form. I'm interested in your services.`,
    );
    window.open(`${WA_BASE}?text=${msg}`, "_blank");
    setSubmitting(false);
  };

  return (
    <main className="pt-16">
      {/* HERO */}
      <section
        className="min-h-[90vh] flex items-center bg-background"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.985 0.004 62) 0%, oklch(0.975 0.006 58) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 rounded-full mb-6">
              Digital Marketing Agency
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground leading-tight mb-6">
              We Build Systems That{" "}
              <span className="relative">
                Grow Your
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-foreground/10 rounded" />
              </span>{" "}
              Business
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              We help cafes, startups, and businesses generate more leads,
              increase sales, and scale using digital marketing and automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919916961245?text=Hi%20Chicxulub%2C%20I%27d%20like%20to%20get%20started."
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-primary-foreground font-semibold rounded-xl hover:bg-foreground/90 transition-all hover:shadow-card-hover"
              >
                Get Started <ArrowRight size={16} />
              </a>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-xl hover:border-foreground/50 hover:bg-muted transition-all"
              >
                View Services
              </button>
            </div>
            <div className="flex items-center gap-6 mt-10">
              {["50+ Clients", "3× Avg. ROI", "4.9★ Rating"].map((stat) => (
                <div key={stat} className="text-center">
                  <p className="text-sm font-semibold text-foreground">
                    {stat}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.96_0.008_60)] to-[oklch(0.94_0.012_58)] rounded-3xl" />
              <div className="relative grid grid-cols-3 gap-3 p-8">
                {services.slice(0, 9).map(({ icon: Icon, title }) => (
                  <div
                    key={title}
                    className="bg-card rounded-xl p-3 shadow-card flex flex-col items-center gap-2 hover:shadow-card-hover transition-shadow"
                  >
                    <Icon size={20} className="text-foreground" />
                    <p className="text-[10px] font-medium text-center text-foreground leading-tight">
                      {title.split(" ")[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.962 0.007 58) 0%, oklch(0.955 0.009 56) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.65 0.17 48)" }}
            >
              What We Do
            </p>
            <h2 className="text-4xl font-extrabold text-foreground">
              Our Services
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Nine powerful services, one goal: growing your business.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ slug, icon: Icon, title, benefit }, i) => (
              <AnimatedSection key={slug}>
                <button
                  type="button"
                  onClick={() => navigateTo(`/services/${slug}`)}
                  data-ocid={`services.item.${i + 1}`}
                  className="bg-card border border-border rounded-2xl p-6 group hover:border-orange/30 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 w-full text-left"
                >
                  <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center mb-4 group-hover:bg-[oklch(0.65_0.17_48)] group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {benefit}
                  </p>
                  <span className="text-sm font-medium text-foreground flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="why"
        className="py-24"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.985 0.004 62) 0%, oklch(0.978 0.006 58) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.65 0.17 48)" }}
            >
              Our Edge
            </p>
            <h2 className="text-4xl font-extrabold text-foreground">
              Why Choose Chicxulub
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <AnimatedSection key={title}>
                <div className="flex gap-4 p-6 rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="w-10 h-10 flex-shrink-0 bg-foreground rounded-xl flex items-center justify-center">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-24 bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-4">
              The Outcome
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              More leads. More sales. More growth.
            </h2>
            <p className="text-lg opacity-75 max-w-2xl mx-auto mb-12">
              Our clients see measurable results — not promises. Every campaign,
              every system, every strategy is optimized for one thing: your
              revenue.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { num: "120%", label: "Avg. Order Increase" },
                { num: "3×", label: "Revenue Growth" },
                { num: "30 Days", label: "Time to First Results" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-5xl font-extrabold mb-2">{num}</p>
                  <p className="text-sm opacity-70">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.970 0.007 58) 0%, oklch(0.962 0.009 56) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.65 0.17 48)" }}
            >
              How We Work
            </p>
            <h2 className="text-4xl font-extrabold text-foreground">
              Our Process
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ num, title, desc }) => (
              <AnimatedSection key={num}>
                <div className="p-6 rounded-2xl border border-border shadow-card">
                  <span
                    style={{ color: "oklch(0.75 0.012 58)" }}
                    className="text-4xl font-black"
                  >
                    {num}
                  </span>
                  <h3 className="font-semibold text-foreground mt-3 mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="py-24"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.958 0.008 57) 0%, oklch(0.950 0.010 55) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.65 0.17 48)" }}
            >
              Case Studies
            </p>
            <h2 className="text-4xl font-extrabold text-foreground">
              Results We've Delivered
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map(({ img, title, tag, desc }, i) => (
              <AnimatedSection key={title}>
                <div
                  data-ocid={`portfolio.item.${i + 1}`}
                  className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {tag}
                    </span>
                    <h3 className="font-bold text-foreground mt-1 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section
        id="founders"
        className="py-24"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.982 0.005 60) 0%, oklch(0.975 0.007 58) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.65 0.17 48)" }}
            >
              The Team
            </p>
            <h2 className="text-4xl font-extrabold text-foreground">
              Founders
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map(({ name, role, tag, img }) => (
              <AnimatedSection key={name}>
                <div className="text-center">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 border border-border">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground">{name}</h3>
                  <p className="text-sm text-muted-foreground">{role}</p>
                  {tag && (
                    <p className="text-xs text-muted-foreground/70 mt-0.5">
                      {tag}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.964 0.008 58) 0%, oklch(0.956 0.009 56) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.65 0.17 48)" }}
              >
                Get In Touch
              </p>
              <h2 className="text-4xl font-extrabold text-foreground mb-4">
                Ready to Grow?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Tell us about your business and we'll build a custom growth
                strategy. No generic solutions — everything is tailored to your
                goals.
              </p>
              <a
                href="https://wa.me/919916961245?text=Hi%20Chicxulub%2C%20I%27d%20like%20to%20discuss%20growing%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.primary_button"
                className="inline-flex items-center gap-3 px-6 py-3 bg-whatsapp text-white font-semibold rounded-xl hover:bg-whatsapp-dark transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-label="WhatsApp"
                  role="img"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <div className="mt-8 space-y-3">
                {[
                  { icon: CheckCircle2, text: "Free strategy consultation" },
                  { icon: CheckCircle2, text: "Custom plan for your business" },
                  { icon: CheckCircle2, text: "No long-term lock-in" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Icon size={16} className="text-foreground" />
                    {text}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <form
                onSubmit={handleSubmit}
                data-ocid="contact.modal"
                className="bg-card rounded-2xl border border-border p-6 shadow-card"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-xs font-semibold text-foreground mb-1.5"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      data-ocid="contact.input"
                      placeholder="Your name"
                      className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-foreground mb-1.5"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      data-ocid="contact.input"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-foreground mb-1.5"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      data-ocid="contact.input"
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-foreground mb-1.5"
                      htmlFor="businessType"
                    >
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      value={form.businessType}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, businessType: e.target.value }))
                      }
                      data-ocid="contact.select"
                      className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all bg-card"
                    >
                      <option value="">Select type</option>
                      <option>Cafe / Restaurant</option>
                      <option>E-commerce</option>
                      <option>Startup</option>
                      <option>Retail</option>
                      <option>Healthcare</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-xs font-semibold text-foreground mb-1.5"
                    htmlFor="service"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, service: e.target.value }))
                    }
                    data-ocid="contact.select"
                    className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all bg-card"
                  >
                    <option value="">Select a service</option>
                    <option>QR Menu & POS Systems</option>
                    <option>Website Design & Development</option>
                    <option>SEO Optimization</option>
                    <option>Google Ads</option>
                    <option>Meta Ads</option>
                    <option>Video Editing</option>
                    <option>Branding</option>
                    <option>Chatbot Automation</option>
                    <option>Business Analytics</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label
                    className="block text-xs font-semibold text-foreground mb-1.5"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    data-ocid="contact.textarea"
                    placeholder="Tell us about your business and goals..."
                    className="w-full px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/50 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  data-ocid="contact.submit_button"
                  className="w-full py-3 bg-foreground text-primary-foreground font-semibold rounded-xl hover:bg-foreground/90 transition-colors disabled:opacity-60"
                >
                  {submitting
                    ? "Sending..."
                    : "Send Message & Connect on WhatsApp"}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
