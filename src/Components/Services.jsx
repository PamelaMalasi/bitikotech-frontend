import { TrendingUp, Share2, Search, Globe, Palette, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: TrendingUp,
    category: "Grow",
    categoryColor: { bg: "#eff6ff", text: "#1d4ed8" },
    title: "Digital Marketing",
    description: "Data-driven campaigns that put your brand in front of the right audience at the right time — and convert them into clients.",
    features: ["Campaign Strategy & Planning", "Paid Advertising (Meta, Google)", "Email Marketing", "Analytics & Reporting"],
  },
  {
    icon: Share2,
    category: "Grow",
    categoryColor: { bg: "#eff6ff", text: "#1d4ed8" },
    title: "Social Media Management",
    description: "Consistent, engaging content that builds your community, increases brand awareness, and keeps you top of mind.",
    features: ["Content Creation & Scheduling", "Community Management", "Platform Strategy", "Growth Tracking"],
  },
  {
    icon: Search,
    category: "Grow",
    categoryColor: { bg: "#eff6ff", text: "#1d4ed8" },
    title: "SEO",
    description: "Get found before your competitors. We optimize your online presence for the searches that actually bring in clients.",
    features: ["Technical SEO Audits", "Keyword Research & Strategy", "On-Page Optimization", "Monthly Performance Reports"],
  },
  {
    icon: Globe,
    category: "Build",
    categoryColor: { bg: "#f0fdf4", text: "#15803d" },
    title: "Website Development",
    description: "Fast, clean, conversion-focused websites that look great, load instantly, and turn visitors into paying clients.",
    features: ["Custom Design & Development", "Responsive & Mobile-First", "CMS Integration", "Speed & Performance Optimization"],
  },
  {
    icon: Palette,
    category: "Build",
    categoryColor: { bg: "#f0fdf4", text: "#15803d" },
    title: "UI/UX Design",
    description: "Interfaces that make people stop, click, and stay. Good design isn't decoration — it's a conversion tool.",
    features: ["User Research & Wireframing", "Prototyping & Usability Testing", "Design Systems", "Interaction Design"],
  },
  {
    icon: Target,
    category: "Define",
    categoryColor: { bg: "#fdf4ff", text: "#7e22ce" },
    title: "Brand Strategy",
    description: "A brand people recognize, remember, and trust. We build your identity from the ground up with purpose and clarity.",
    features: ["Brand Identity & Visual Language", "Positioning & Messaging", "Brand Guidelines", "Tone of Voice"],
  },
];

const Services = () => {
  return (
    <div style={{ background: "var(--light)", minHeight: "100vh", paddingBottom: 80 }}>

      {/* ── Hero ── */}
      <div style={{
        background: "var(--dark)",
        padding: "160px 0 80px",
        textAlign: "center",
      }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <p style={{
            fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--brand)", fontWeight: 700, marginBottom: 16,
          }}>
            What We Do
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 800, color: "#fff",
            letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 20,
          }}>
            Everything Your Brand Needs to Win
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.62)", fontSize: "1rem",
            lineHeight: 1.75, margin: "0 auto 36px",
          }}>
            Six specialized services. One unified strategy. Built to attract more clients,
            increase your visibility, and grow your business.
          </p>
          <Link to="/contact" className="btn btn-blue rounded-4 px-5 py-3" style={{ fontSize: "0.95rem" }}>
            Book Free Consultation <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div className="container py-5" style={{ maxWidth: 1080 }}>
        <div className="row g-4">
          {SERVICES.map(({ icon: Icon, category, categoryColor, title, description, features }, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "28px 24px 32px",
                  border: "1px solid var(--border)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.22s ease, transform 0.22s ease",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 10px 32px rgba(20,155,227,0.13)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Category badge */}
                <span style={{
                  background: categoryColor.bg, color: categoryColor.text,
                  fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", padding: "3px 10px",
                  borderRadius: 999, marginBottom: 18, display: "inline-block", alignSelf: "flex-start",
                }}>
                  {category}
                </span>

                {/* Icon */}
                <div style={{
                  width: 46, height: 46, borderRadius: 11,
                  background: "#eff6ff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <Icon size={21} color="#149be3" />
                </div>

                <h3 style={{
                  fontSize: "1.05rem", fontWeight: 700,
                  color: "var(--dark)", marginBottom: 10,
                }}>
                  {title}
                </h3>

                <p style={{
                  fontSize: "0.875rem", color: "var(--muted)",
                  lineHeight: 1.7, marginBottom: 20, flexGrow: 1,
                }}>
                  {description}
                </p>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {features.map((f, j) => (
                    <li key={j} style={{
                      display: "flex", alignItems: "flex-start", gap: 8,
                      marginBottom: 8, fontSize: "0.84rem", color: "#475569",
                    }}>
                      <CheckCircle size={13} color="#149be3" style={{ flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA Block ── */}
        <div style={{
          background: "var(--dark)",
          borderRadius: 20, padding: "64px 40px",
          textAlign: "center", marginTop: 72,
        }}>
          <p style={{
            fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--brand)", fontWeight: 700, marginBottom: 14,
          }}>
            Let's Work Together
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 800, color: "#fff",
            letterSpacing: "-0.02em", marginBottom: 16,
          }}>
            Ready to start growing?
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.6)", maxWidth: 500,
            margin: "0 auto 36px", fontSize: "0.95rem", lineHeight: 1.75,
          }}>
            Book a free consultation and we'll map out exactly how Bitiko can help
            your business attract more clients and grow faster.
          </p>
          <Link to="/contact" className="btn btn-blue rounded-4 px-5 py-3" style={{ fontSize: "0.95rem" }}>
            Book Free Consultation <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
