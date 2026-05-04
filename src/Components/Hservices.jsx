import { TrendingUp, Share2, Search, Globe, Palette, Target } from "lucide-react";
import { Link } from "react-router-dom";
import '../Styles/Hservices.css';

const SERVICES = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven campaigns that put your brand in front of the right people at the right time.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Consistent, engaging content that builds your audience and keeps your brand top of mind.",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Get found before your competitors. We optimize your presence for the searches that matter.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, clean, conversion-focused websites built to turn visitors into clients.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces that make people stop, click, and stay — design that genuinely converts.",
  },
  {
    icon: Target,
    title: "Brand Strategy",
    description: "A brand people recognize, remember, and trust — built with purpose from the ground up.",
  },
];

export default function Hservices() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p style={{
            fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--brand)", fontWeight: 700, marginBottom: 10,
          }}>
            What We Do
          </p>
          <h2 className="fw-bold" style={{ color: "var(--dark)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Six Services. One Goal: Your Growth.
          </h2>
        </div>

        <div className="row g-4">
          {SERVICES.map(({ icon: Icon, title, description }, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card-services h-100 rounded-4 p-4" style={{ background: "#fff" }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 10,
                  background: "#eff6ff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}>
                  <Icon size={20} color="#149be3" />
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--dark)", marginBottom: 8 }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/services" className="btn btn-blue rounded-4 px-4 py-2" style={{ fontSize: "0.9rem" }}>
            See All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
