import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { navigateTo } from "../hooks/useRouter";

interface PlanFeature {
  name: string;
  features: string[];
}

interface ServiceData {
  title: string;
  tagline: string;
  what: string;
  why: string[];
  whatWeDo: string[];
  whatYouGet: string[];
  plans: PlanFeature[];
  timeline: string;
  results: string[];
}

const serviceData: Record<string, ServiceData> = {
  "qr-menu": {
    title: "QR Menu & POS Systems",
    tagline:
      "Modernize your ordering. Increase table turnover. Delight every customer.",
    what: "A QR Menu & POS system replaces traditional paper menus with a digital experience accessible via smartphone camera. Combined with a Point-of-Sale system, it streamlines order management, reduces errors, and improves operational efficiency from front-of-house to kitchen.",
    why: [
      "Reduce wait times and serve more customers per hour",
      "Cut printing costs for menus entirely",
      "Enable contactless, hygiene-friendly ordering",
      "Collect customer data for retargeting campaigns",
      "Real-time menu updates without reprinting",
    ],
    whatWeDo: [
      "Design a branded, mobile-optimized digital menu",
      "Integrate QR code generation for each table",
      "Set up and configure your POS system",
      "Train your staff on the new system",
      "Connect orders to kitchen display systems",
    ],
    whatYouGet: [
      "Custom-branded digital menu with your logo and colors",
      "Unlimited QR code generation for all tables",
      "Cloud-based POS with real-time order tracking",
      "Sales analytics and inventory reports",
      "Ongoing technical support",
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "Digital QR menu (up to 50 items)",
          "Single location",
          "Basic analytics",
          "Email support",
        ],
      },
      {
        name: "Standard",
        features: [
          "Digital QR menu (up to 200 items)",
          "POS integration",
          "Advanced analytics",
          "Staff training",
          "Priority support",
        ],
      },
      {
        name: "Premium",
        features: [
          "Unlimited menu items",
          "Multi-location POS",
          "Custom branding",
          "Kitchen display system",
          "Inventory tracking",
          "Dedicated account manager",
        ],
      },
    ],
    timeline:
      "Basic setup in 3–5 days. Full POS integration within 7–14 days depending on your hardware requirements.",
    results: [
      "Cafes see 25–40% reduction in order errors",
      "Average table turnover improves by 20%",
      "Staff can focus on service rather than order-taking",
    ],
  },
  "website-design": {
    title: "Website Design & Development",
    tagline: "Your website is your best salesperson. Make it work harder.",
    what: "We design and develop high-converting, fast-loading websites that turn visitors into customers. Every website we build is strategically crafted with conversion optimization, SEO fundamentals, and brand storytelling at its core.",
    why: [
      "83% of customers research online before buying",
      "A professional website builds instant credibility",
      "Your website works 24/7 without a salary",
      "Outperform competitors with faster, better design",
      "Mobile-first design captures the smartphone audience",
    ],
    whatWeDo: [
      "Comprehensive discovery and brand audit",
      "Custom UI/UX design with wireframes",
      "Responsive development for all screen sizes",
      "SEO foundation setup (meta, schema, sitemap)",
      "Performance optimization for Core Web Vitals",
    ],
    whatYouGet: [
      "Fully custom, mobile-responsive website",
      "CMS integration for easy content updates",
      "Contact forms and lead capture mechanisms",
      "Google Analytics integration",
      "3 months of post-launch support",
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "5-page website",
          "Mobile responsive",
          "Contact form",
          "Basic SEO setup",
          "2 revision rounds",
        ],
      },
      {
        name: "Standard",
        features: [
          "Up to 15 pages",
          "CMS integration",
          "Blog setup",
          "Advanced SEO",
          "Analytics setup",
          "5 revision rounds",
        ],
      },
      {
        name: "Premium",
        features: [
          "Unlimited pages",
          "E-commerce functionality",
          "Custom integrations",
          "Full SEO audit",
          "A/B testing setup",
          "Priority support",
          "Dedicated project manager",
        ],
      },
    ],
    timeline:
      "Discovery and design: 5–7 days. Development and launch: 7–14 days. Total: 2–3 weeks.",
    results: [
      "Average 60% improvement in user engagement",
      "3× increase in contact form submissions",
      "Page load under 2 seconds for better SEO ranking",
    ],
  },
  seo: {
    title: "SEO Optimization",
    tagline: "Rank higher. Get found. Own your market.",
    what: "Search Engine Optimization is the process of improving your website's visibility in Google and other search engines. When your ideal customers search for what you offer, SEO ensures your business appears at the top — not your competitors.",
    why: [
      "Organic search drives 53% of all web traffic",
      "First-page results get 95% of all clicks",
      "SEO leads have a 14.6% close rate vs 1.7% for outbound",
      "Long-term, compounding returns unlike paid ads",
      "Build authority and trust in your industry",
    ],
    whatWeDo: [
      "Comprehensive technical SEO audit",
      "Keyword research and strategy mapping",
      "On-page optimization (title tags, meta, content)",
      "Link building and domain authority growth",
      "Monthly reporting and performance tracking",
    ],
    whatYouGet: [
      "Full technical SEO audit report",
      "Keyword strategy document",
      "Optimized page titles, meta descriptions, H-tags",
      "Monthly performance reports with rankings",
      "Competitor gap analysis",
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "10-page on-page optimization",
          "Monthly keyword report",
          "Google Search Console setup",
          "Basic link building",
        ],
      },
      {
        name: "Standard",
        features: [
          "Full site audit and fix",
          "25 target keywords",
          "Content optimization",
          "Link building (5 DA40+ links/month)",
          "Bi-weekly reports",
        ],
      },
      {
        name: "Premium",
        features: [
          "Unlimited page optimization",
          "50+ target keywords",
          "Blog content strategy",
          "High-authority link building",
          "Weekly reporting",
          "Competitor monitoring",
        ],
      },
    ],
    timeline:
      "Initial audit and setup: 7 days. First visible results: 30–60 days. Significant ranking improvements: 90–120 days.",
    results: [
      "Clients see 2–5× organic traffic growth in 6 months",
      "Average 40% increase in inbound leads",
      "Reduced dependence on paid advertising",
    ],
  },
  "google-ads": {
    title: "Google Ads",
    tagline: "Appear at the top when your customers are searching. Right now.",
    what: "Google Ads (Pay-Per-Click) puts your business in front of people actively searching for exactly what you offer. Unlike social ads, Google captures high-intent buyers — people ready to purchase, book, or contact you immediately.",
    why: [
      "Reach customers at the exact moment of purchase intent",
      "Only pay when someone clicks on your ad",
      "Highly measurable ROI down to the last rupee",
      "Outrank competitors instantly",
      "Scale budget based on what's working",
    ],
    whatWeDo: [
      "Campaign strategy and keyword research",
      "Ad copywriting and creative development",
      "Landing page optimization for conversion",
      "Bid management and budget optimization",
      "Conversion tracking setup and reporting",
    ],
    whatYouGet: [
      "Fully managed Google Ads account",
      "Search, Display, and Shopping campaigns",
      "A/B tested ad copy and landing pages",
      "Weekly performance reports",
      "Dedicated campaign manager",
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "1 campaign (Search)",
          "Up to 10 keywords",
          "Monthly reporting",
          "Ad copy creation",
        ],
      },
      {
        name: "Standard",
        features: [
          "3 campaigns",
          "Up to 50 keywords",
          "Conversion tracking",
          "Landing page optimization",
          "Bi-weekly reports",
        ],
      },
      {
        name: "Premium",
        features: [
          "Unlimited campaigns",
          "Search + Display + Shopping",
          "Advanced audience targeting",
          "CRO and A/B testing",
          "Weekly optimization",
          "Real-time dashboard",
        ],
      },
    ],
    timeline:
      "Campaign setup and launch: 3–5 days. First performance data: within 7 days. Optimization phase: ongoing monthly.",
    results: [
      "Average 4× return on ad spend (ROAS)",
      "30–50% lower cost per lead after 90 days of optimization",
      "Immediate traffic from day one of launch",
    ],
  },
  "meta-ads": {
    title: "Meta Ads",
    tagline: "Reach your exact audience on Facebook and Instagram at scale.",
    what: "Meta Ads (Facebook & Instagram advertising) allow you to target billions of users based on demographics, interests, behaviors, and lookalike audiences. It's the most powerful platform for brand awareness, lead generation, and retargeting campaigns.",
    why: [
      "3+ billion monthly active users across Meta platforms",
      "Laser-precise audience targeting capabilities",
      "Visual, story-driven ad formats that convert",
      "Retarget website visitors and past customers",
      "Cost-effective for both B2C and B2B",
    ],
    whatWeDo: [
      "Audience research and persona building",
      "Creative strategy, ad copy, and visual design",
      "Campaign structure: awareness → consideration → conversion",
      "Pixel setup and event tracking",
      "Ongoing split testing and optimization",
    ],
    whatYouGet: [
      "Fully managed Meta Ads account",
      "Custom audience and lookalike builds",
      "Ad creatives (static and video)",
      "Facebook Pixel and conversion API setup",
      "Monthly detailed reports",
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "1 campaign",
          "Facebook + Instagram",
          "2 ad sets",
          "Basic audience targeting",
          "Monthly report",
        ],
      },
      {
        name: "Standard",
        features: [
          "3 campaigns",
          "Retargeting setup",
          "Lookalike audiences",
          "A/B creative testing",
          "Bi-weekly reports",
        ],
      },
      {
        name: "Premium",
        features: [
          "Full-funnel campaigns",
          "Advanced pixel events",
          "Video + static creatives",
          "Dynamic product ads",
          "Weekly optimization",
          "WhatsApp lead integration",
        ],
      },
    ],
    timeline:
      "Setup and launch: 5–7 days. First results: 7–14 days. Full optimization: 30–60 days.",
    results: [
      "Clients average 5–8× ROAS on conversion campaigns",
      "60% lower cost-per-lead compared to industry average",
      "Cafes see 3× Instagram following growth within 90 days",
    ],
  },
  "video-editing": {
    title: "Video Editing",
    tagline: "Content that stops the scroll and drives real action.",
    what: "Video is the highest-performing content format across every social platform. Our video editing service transforms raw footage into polished, brand-aligned content — from Reels and YouTube Shorts to brand films and product demos.",
    why: [
      "Video content gets 48% more views than static posts",
      "Reels and Shorts drive organic reach at no ad cost",
      "Product videos increase purchase intent by 85%",
      "Video builds brand trust faster than any other medium",
      "Repurpose one video into 10+ pieces of content",
    ],
    whatWeDo: [
      "Raw footage review and content strategy",
      "Professional editing with cuts, transitions, and pacing",
      "Motion graphics, titles, and lower thirds",
      "Color grading and audio mixing",
      "Platform-specific format optimization",
    ],
    whatYouGet: [
      "Edited videos in all required formats (Reels, YouTube, Stories)",
      "Captions and subtitles for accessibility",
      "Branded intro/outro sequences",
      "Thumbnail design for YouTube",
      "Up to 2 rounds of revisions",
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "4 short-form videos/month",
          "Basic editing + transitions",
          "Captions included",
          "2 revision rounds",
        ],
      },
      {
        name: "Standard",
        features: [
          "10 short-form videos/month",
          "Motion graphics",
          "Color grading",
          "Brand kit integration",
          "Thumbnail design",
        ],
      },
      {
        name: "Premium",
        features: [
          "20+ videos/month",
          "Long-form + short-form",
          "Full motion design",
          "Ad-ready formats",
          "Multi-platform delivery",
          "Priority turnaround",
        ],
      },
    ],
    timeline:
      "First delivery within 3–5 business days. Monthly packages delivered on a rolling schedule.",
    results: [
      "Average 3× engagement increase on video posts",
      "Reels reaching 10,000+ organic views for clients",
      "Product demo videos increase conversion rates by 40%",
    ],
  },
  branding: {
    title: "Branding",
    tagline:
      "Your brand is what people say about you when you're not in the room.",
    what: "Branding is the foundation of every business. It's more than a logo — it's your identity, voice, values, and the emotional connection you create with your audience. A strong brand commands premium pricing and builds lasting customer loyalty.",
    why: [
      "Consistent branding increases revenue by 23%",
      "Strong brands charge 20% more than competitors",
      "First impressions are formed in 50 milliseconds",
      "Brand recognition reduces customer acquisition cost",
      "A clear brand attracts the right customers automatically",
    ],
    whatWeDo: [
      "Brand discovery workshop and positioning strategy",
      "Logo design and visual identity system",
      "Brand guidelines (colors, typography, tone of voice)",
      "Business card, letterhead, and collateral design",
      "Social media kit and digital asset creation",
    ],
    whatYouGet: [
      "Primary logo + alternate versions",
      "Complete brand guidelines document",
      "Color palette with usage rules",
      "Typography system",
      "Social media templates (10 Canva designs)",
      "All source files in AI, PDF, PNG formats",
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "Logo design (3 concepts)",
          "Basic brand colors",
          "Business card design",
          "PNG and PDF files",
        ],
      },
      {
        name: "Standard",
        features: [
          "Logo + brand identity",
          "Full color system",
          "Typography guidelines",
          "5 social media templates",
          "Brand guidelines PDF",
        ],
      },
      {
        name: "Premium",
        features: [
          "Complete brand system",
          "Brand strategy document",
          "10 social media templates",
          "Stationery design",
          "Brand guidelines",
          "All source files",
          "Brand consultation sessions",
        ],
      },
    ],
    timeline:
      "Brand discovery: 2–3 days. Design concepts: 5–7 days. Refinement and delivery: 3–5 days. Total: 10–15 days.",
    results: [
      "Clients report 35% more professional perception from customers",
      "Consistent branding reduces ad costs by improving CTR",
      "Premium brand positioning enables higher pricing",
    ],
  },
  "chatbot-automation": {
    title: "Chatbot Automation",
    tagline: "Your 24/7 sales rep that never sleeps, never misses a lead.",
    what: "A chatbot automation system handles customer inquiries, qualifies leads, books appointments, and closes sales — all automatically. We build WhatsApp, website, and Instagram chatbots that work while you sleep, ensuring no lead is ever lost.",
    why: [
      "73% of customers expect 24/7 support availability",
      "Chatbots reduce customer service costs by 30%",
      "Automated lead qualification saves 5+ hours per day",
      "Instant response improves conversion rates by 4×",
      "Scale to handle thousands of conversations simultaneously",
    ],
    whatWeDo: [
      "Map your sales and support conversation flows",
      "Build WhatsApp Business API chatbot",
      "Website live chat with chatbot handoff",
      "CRM integration for lead management",
      "Testing, training, and ongoing optimization",
    ],
    whatYouGet: [
      "WhatsApp chatbot with custom conversation flows",
      "Lead qualification and scoring automation",
      "Appointment booking integration",
      "CRM sync for all captured leads",
      "Analytics dashboard for conversation insights",
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "WhatsApp chatbot",
          "5 conversation flows",
          "Lead capture form",
          "Basic analytics",
        ],
      },
      {
        name: "Standard",
        features: [
          "WhatsApp + Website bot",
          "15 conversation flows",
          "CRM integration",
          "Appointment booking",
          "Monthly optimization",
        ],
      },
      {
        name: "Premium",
        features: [
          "Omnichannel automation",
          "Unlimited flows",
          "AI-powered responses",
          "Full CRM integration",
          "E-commerce cart recovery",
          "Weekly reporting",
          "Dedicated bot manager",
        ],
      },
    ],
    timeline:
      "Flow design: 3–5 days. Development and integration: 5–10 days. Testing and go-live: 2–3 days. Total: 10–18 days.",
    results: [
      "Clients see 80% reduction in missed leads",
      "Average response time drops from 4 hours to under 30 seconds",
      "30% increase in qualified leads from automated qualification",
    ],
  },
  "business-analytics": {
    title: "Business Analytics",
    tagline: "Stop guessing. Start knowing. Make decisions that drive growth.",
    what: "Business Analytics transforms your raw business data into actionable insights. We set up comprehensive dashboards and reporting systems that show you exactly where revenue comes from, what's working, what's not, and where the biggest growth opportunities lie.",
    why: [
      "Data-driven companies grow 30% faster than competitors",
      "Most businesses lose 20% of revenue from untracked leaks",
      "Analytics reveals which marketing channels deliver real ROI",
      "Predictive insights allow proactive, not reactive, decisions",
      "Customer behavior data drives higher conversion rates",
    ],
    whatWeDo: [
      "Audit of existing data infrastructure",
      "Google Analytics 4 and Tag Manager setup",
      "Custom KPI dashboard in Looker Studio or Metabase",
      "Sales funnel tracking and attribution modeling",
      "Monthly insights report with strategic recommendations",
    ],
    whatYouGet: [
      "Custom analytics dashboard (real-time)",
      "Revenue attribution model",
      "Customer journey mapping",
      "Monthly strategy report",
      "Actionable recommendations each month",
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "GA4 setup",
          "5-widget dashboard",
          "Monthly report",
          "Conversion tracking",
        ],
      },
      {
        name: "Standard",
        features: [
          "Full funnel tracking",
          "Custom dashboard",
          "Multi-channel attribution",
          "Bi-weekly insights",
          "CRM data integration",
        ],
      },
      {
        name: "Premium",
        features: [
          "Advanced analytics suite",
          "Predictive modeling",
          "Cohort analysis",
          "Revenue forecasting",
          "Weekly strategic review",
          "Direct analyst access",
        ],
      },
    ],
    timeline:
      "Initial setup: 5–7 days. Dashboard deployment: 7–10 days. First insights report: 30 days after data collection.",
    results: [
      "Clients identify 15–25% revenue improvement opportunities",
      "Marketing spend efficiency improves by 40% in first 90 days",
      "Average 2× improvement in conversion rates through data insights",
    ],
  },
};

const WA_URL =
  "https://wa.me/919916961245?text=Hi%20Chicxulub%2C%20I%27d%20like%20to%20get%20a%20quote.";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;
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
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

import { useEffect, useRef } from "react";

export function ServicePage({ slug }: { slug: string }) {
  const data = serviceData[slug];

  if (!data) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-3">
            Service Not Found
          </h1>
          <button
            type="button"
            onClick={() => navigateTo("/")}
            className="text-sm font-medium underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-16">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          type="button"
          onClick={() => navigateTo("/")}
          data-ocid="service.link"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>

      {/* Hero */}
      <section className="bg-foreground text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              {data.title}
            </h1>
            <p className="text-xl opacity-80 max-w-2xl">{data.tagline}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is this */}
      <section
        className="py-16"
        style={{ background: "oklch(0.982 0.005 60)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What Is This Service
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {data.what}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why + What We Do + What You Get */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 57)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0}>
              <h3 className="text-lg font-bold text-foreground mb-5 uppercase tracking-wide text-sm">
                Why You Need This
              </h3>
              <ul className="space-y-3">
                {data.why.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-foreground mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h3 className="text-lg font-bold text-foreground mb-5 uppercase tracking-wide text-sm">
                What We Do
              </h3>
              <ul className="space-y-3">
                {data.whatWeDo.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-foreground mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h3 className="text-lg font-bold text-foreground mb-5 uppercase tracking-wide text-sm">
                What You Get
              </h3>
              <ul className="space-y-3">
                {data.whatYouGet.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-foreground mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section
        className="py-16"
        style={{ background: "oklch(0.982 0.005 60)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground">
              Choose Your Plan
            </h2>
            <p className="text-muted-foreground mt-2">
              All plans include a dedicated point of contact. No pricing listed
              — we quote based on your specific needs.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.plans.map(({ name, features }, i) => (
              <AnimatedSection key={name} delay={i * 100}>
                <div
                  data-ocid={`service.plans.item.${i + 1}`}
                  className={`rounded-2xl border p-6 ${
                    i === 1
                      ? "border-foreground bg-foreground text-primary-foreground"
                      : "border-border bg-card"
                  }`}
                >
                  {i === 1 && (
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60 block mb-2">
                      Most Popular
                    </span>
                  )}
                  <h3
                    className={`text-xl font-bold mb-5 ${i === 1 ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {name}
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-sm ${i === 1 ? "opacity-90" : "text-muted-foreground"}`}
                      >
                        <CheckCircle2
                          size={14}
                          className={`mt-0.5 flex-shrink-0 ${i === 1 ? "opacity-75" : "text-foreground"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`service.plans.primary_button.${i + 1}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      i === 1
                        ? "bg-card text-foreground hover:bg-muted"
                        : "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    }`}
                  >
                    Get Quote <ArrowRight size={14} />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline + Results */}
      <section className="py-16" style={{ background: "oklch(0.96 0.008 57)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <h3 className="font-bold text-foreground mb-3">Timeline</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {data.timeline}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <h3 className="font-bold text-foreground mb-3">
                  Typical Results
                </h3>
                <ul className="space-y-2">
                  {data.results.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-foreground mt-0.5 flex-shrink-0"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold mb-4">
              Ready to Get Started?
            </h2>
            <p className="opacity-75 mb-8">
              Let's talk about how {data.title} can grow your business. No
              commitment, just a conversation.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="service.primary_button"
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
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
