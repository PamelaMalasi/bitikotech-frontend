import { Link } from "react-router-dom";

export default function Hcta() {
  return (
    <section className="py-5" style={{ background: "var(--light)" }}>
      <div className="container px-4">
        <div
          className="rounded-4 text-center text-white p-5"
          style={{
            background: "linear-gradient(135deg, var(--dark) 0%, var(--dark-mid) 100%)",
            boxShadow: "0 24px 60px rgba(15,23,42,0.18)",
          }}
        >
          <p style={{
            fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--brand)", fontWeight: 700, marginBottom: 14,
          }}>
            Let's Work Together
          </p>
          <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}>
            Ready to Grow Your Business?
          </h2>
          <p className="mb-4 mx-auto" style={{
            maxWidth: 560, color: "rgba(255,255,255,0.65)",
            fontSize: "1rem", lineHeight: 1.75,
          }}>
            Bitiko handles everything — marketing, social media, web development, SEO —
            so you can focus on running your business while we grow it.
          </p>
          <Link to="/contact" className="btn btn-blue btn-lg rounded-4 px-5">
            Book Free Consultation →
          </Link>
        </div>
      </div>
    </section>
  );
}
