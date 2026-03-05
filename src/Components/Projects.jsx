import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Projects.css";
import { motion } from "framer-motion";
import { Container, Row, Col, Link } from "react-bootstrap";
import PortfolioCard from "../Components/PortfolioCard";

const API = import.meta.env.VITE_API_URL;
console.log("API:", API);

export default function Projects() {
  const [projects, setProjects] = useState([]);

useEffect(() => {
  fetch(`${API}/project`, { credentials: "include" })
    .then(async (r) => {
      const data = await r.json().catch(() => null);
      if (!r.ok) throw new Error(data?.message || `HTTP ${r.status}`);
      return data;
    })
    .then(setProjects)
    .catch((err) => console.error("PROJECT FETCH ERROR:", err));
}, []);


  return (
       <div className="min-vh-100 bg-background position-relative overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb bg-primary position-absolute" style={{ width: 500, height: 500, top: -100, left: -100 }} />
      <div
        className="glow-orb bg-secondary position-absolute"
        style={{ width: 400, height: 400, bottom: 200, right: -100 }}
      />
      <div
        className="glow-orb bg-accent position-absolute"
        style={{ width: 300, height: 300, top: "50%", left: "30%" }}
      />

      <Navbar />

      {/* Hero */}
      <section className="pt-5 pb-5 position-relative" style={{ paddingTop: "9rem" }}>
        <Container className="position-relative" style={{ zIndex: 10 }}>
          <Row className="justify-content-center text-center">
            <Col lg={8} xl={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="font-display fw-bold mb-3" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>
                  <span className="gradient-text">PORTFOLIO</span>
                </h1>
                <p className="text-muted fs-6 mx-auto" style={{ maxWidth: 520 }}>
                  A curated collection of creative work spanning digital art, branding, and interactive design.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="pb-5 position-relative">
        <Container className="position-relative" style={{ zIndex: 10, maxWidth: 960 }}>
          {/* Keep your existing masonry styles OR swap to a Bootstrap grid below */}
          <div className="masonry-grid">
      {projects.map((p) => (
              <PortfolioCard
               key={p._id}               
 image={p.image
                          ? `${API}${p.image}`
                          : "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
}
               alt={p.title}
            
              />
            ))}
          </div>
          {/* --- Optional: Bootstrap grid instead of masonry (uncomment to use) ---
          <Row className="g-4">
            {projects.map((project, i) => (
              <Col key={project.title} xs={12} sm={6} lg={4}>
                <PortfolioCard
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  index={i}
                />
              </Col>
            ))}
          </Row>
          */}
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-top py-4 position-relative" style={{ zIndex: 10 }}>
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <span className="font-display fw-bold gradient-text">STUDIO</span>
            <p className="mb-0 small text-muted">© 2026 All rights reserved</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
