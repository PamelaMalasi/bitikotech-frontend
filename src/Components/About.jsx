import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/About.css";
import heroImage from "../images/bitiko-about-1.png";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Zap,
  TrendingUp,
  Globe2,
  Building2,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Results First",
    description: "Everything we do is measured against one thing: your growth. Strategy, creativity, execution — all in service of outcomes you can see.",
  },
  {
    icon: Users,
    title: "Real Partnership",
    description: "We work alongside you, not just for you. You stay informed, involved, and in control — always.",
  },
  {
    icon: Zap,
    title: "Speed Without Shortcuts",
    description: "Fast delivery is a promise, not an excuse to cut corners. Quality and speed are not opposites here.",
  },
  {
    icon: TrendingUp,
    title: "Zero Fluff",
    description: "No jargon. No filler. Just clear strategies, honest communication, and work that actually moves the needle.",
  },
];

const EXPERTISE = [
  { icon: ShoppingBag,  title: "E-commerce & Retail",     desc: "Brand and grow online stores that convert browsers into buyers." },
  { icon: Building2,    title: "Startups & SMEs",          desc: "From zero to visible — we help young businesses build a brand that competes." },
  { icon: Globe2,       title: "Hospitality & Tourism",    desc: "Attract more guests and bookings with a strong digital presence." },
  { icon: Users,        title: "Professional Services",    desc: "Position experts, consultants, and agencies as the go-to in their field." },
  { icon: Sparkles,     title: "Lifestyle & Wellness",     desc: "Build communities and loyal followings around lifestyle brands." },
  { icon: Target,       title: "Real Estate",              desc: "Generate leads and build trust with a polished, professional online identity." },
];

const REASONS = [
  { title: "One Team, Everything Covered", desc: "Marketing, web, social, SEO, branding — handled by one team with a unified strategy, not five different agencies." },
  { title: "Tailored, Not Templated", desc: "Every client gets a custom approach. No copy-paste strategies, no off-the-shelf solutions." },
  { title: "Measurable Outcomes", desc: "You'll always know what you're getting. We set clear goals and report against them — transparently." },
];

const About = () => {
  return (
    <div className="min-vh-100 bg-white">

      {/* ── Hero ── */}
      <section className="min-vh-100 d-flex align-items-center pt-5 pb-4 mt-5">
        <div className="container mt-5">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <p style={{
                fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase",
                color: "var(--brand)", fontWeight: 700, marginBottom: 14,
              }}>
                About Bitiko
              </p>
              <h1 className="display-5 fw-bold lh-1 mb-4" style={{ color: "var(--dark)", letterSpacing: "-0.02em" }}>
                The agency built to grow your business.
              </h1>
              <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "44rem" }}>
                Bitiko is a full-service digital agency. We exist for one reason: to help businesses attract more
                clients, increase their visibility, and grow faster. We handle the strategy, the creative, and the
                execution — you focus on what you do best.
              </p>
              <Link to="/contact" className="btn btn-blue rounded-4 px-4 py-2 d-inline-flex align-items-center gap-2">
                Work With Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <div className="position-relative">
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                  style={{
                    filter: "blur(60px)",
                    background: "linear-gradient(135deg, rgba(20,155,227,.18), rgba(99,102,241,.18))",
                  }}
                />
                <img
                  src={heroImage}
                  alt="Bitiko digital agency"
                  className="w-100 position-relative"
                  style={{ objectFit: "cover", borderRadius: 20, maxWidth: 460 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-5" style={{ background: "var(--light)" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="row g-3 text-center">
            {[
              { kpi: "50+",  label: "Brands Grown" },
              { kpi: "3×",   label: "Avg. Visibility" },
              { kpi: "6",    label: "Core Services" },
              { kpi: "100%", label: "Dedicated" },
            ].map((item, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="rounded-4 p-4" style={{ background: "#fff", border: "1px solid var(--border)" }}>
                  <div className="fw-bold mb-1 btn-blue-text" style={{ fontSize: "2rem" }}>{item.kpi}</div>
                  <div className="text-muted small">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="text-center mb-5">
            <p style={{
              fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--brand)", fontWeight: 700, marginBottom: 10,
            }}>
              How We Work
            </p>
            <h2 className="fw-bold" style={{ color: "var(--dark)", letterSpacing: "-0.02em" }}>
              Our Values
            </h2>
          </div>
          <div className="row g-4">
            {VALUES.map(({ icon: Icon, title, description }, i) => (
              <div className="col-12 col-md-6" key={i}>
                <div className="d-flex gap-4 p-4 rounded-4 h-100" style={{ background: "var(--light)", border: "1px solid var(--border)" }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 10, flexShrink: 0,
                    background: "#eff6ff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={20} color="#149be3" />
                  </div>
                  <div>
                    <h3 className="fw-bold mb-2" style={{ fontSize: "1rem", color: "var(--dark)" }}>{title}</h3>
                    <p className="mb-0 text-secondary" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Expertise ── */}
      <section className="py-5" style={{ background: "var(--light)" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="text-center mb-5">
            <p style={{
              fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--brand)", fontWeight: 700, marginBottom: 10,
            }}>
              Industries We Serve
            </p>
            <h2 className="fw-bold" style={{ color: "var(--dark)", letterSpacing: "-0.02em" }}>
              We Work Across Sectors
            </h2>
          </div>
          <div className="row g-4">
            {EXPERTISE.map(({ icon: Icon, title, desc }, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="rounded-4 p-4 h-100" style={{ background: "#fff", border: "1px solid var(--border)" }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 10,
                    background: "#eff6ff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 14,
                  }}>
                    <Icon size={20} color="#149be3" />
                  </div>
                  <h3 className="fw-bold mb-2" style={{ fontSize: "0.95rem", color: "var(--dark)" }}>{title}</h3>
                  <p className="mb-0 text-secondary" style={{ fontSize: "0.87rem", lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Bitiko ── */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="text-center mb-5">
            <p style={{
              fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--brand)", fontWeight: 700, marginBottom: 10,
            }}>
              Why Us
            </p>
            <h2 className="fw-bold" style={{ color: "var(--dark)", letterSpacing: "-0.02em" }}>
              Why Choose Bitiko?
            </h2>
          </div>
          <div className="row g-4">
            {REASONS.map(({ title, desc }, i) => (
              <div className="col-12 col-md-4" key={i}>
                <div className="rounded-4 p-4 h-100 text-center" style={{ background: "var(--light)", border: "1px solid var(--border)" }}>
                  <CheckCircle size={32} color="#149be3" className="mb-3" />
                  <h3 className="fw-bold mb-2" style={{ fontSize: "1rem", color: "var(--dark)" }}>{title}</h3>
                  <p className="mb-0 text-secondary" style={{ fontSize: "0.88rem", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: 700 }}>
          <div className="rounded-4 p-5 text-center" style={{
            background: "var(--dark)",
            boxShadow: "0 24px 60px rgba(15,23,42,0.15)",
          }}>
            <p style={{
              fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--brand)", fontWeight: 700, marginBottom: 14,
            }}>
              Let's Talk
            </p>
            <h2 className="fw-bold mb-3" style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "#fff", letterSpacing: "-0.02em",
            }}>
              Ready to Tell Your Story?
            </h2>
            <p className="mb-4" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.75 }}>
              Book a free consultation and let's talk about what growth looks like for your business.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/contact" className="btn btn-blue btn-lg rounded-4 d-inline-flex align-items-center gap-2">
                Get Started <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn btn-lg rounded-4" style={{
                background: "rgba(255,255,255,0.08)", color: "#fff",
                border: "1px solid rgba(255,255,255,0.15)",
              }}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
