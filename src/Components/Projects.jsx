import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Projects.css";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

const API = import.meta.env.VITE_API_URL;

const breakpoints = {
  default: 2,
  576: 1,
};

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API}/project`)
      .then(async (r) => {
        const data = await r.json().catch(() => null);
        if (!r.ok) throw new Error(data?.message || `HTTP ${r.status}`);
        return data;
      })
      .then(setProjects)
      .catch((err) => console.error("PROJECT FETCH ERROR:", err));
  }, []);

  return (
    <div className="projects-page">
      {/* Hero */}
      <div className="projects-hero">
        <h1 className="mb-3">
          Our <span className="gradient-text-blue">Projects</span>
        </h1>
        <p>
          Explore our portfolio of successful campaigns and solutions that have
          helped businesses achieve remarkable growth and engagement.
        </p>
      </div>

      {/* Grid */}
      <div className="container pb-5" style={{ maxWidth: "1100px" }}>
        {projects.length === 0 ? (
          <div className="projects-empty">No projects yet.</div>
        ) : (
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {projects.map((p, index) => (
              <div key={p._id}>
                <div
                  className={`project-card ${
                    index % 3 === 0
                      ? "project-tall"
                      : index % 3 === 1
                      ? "project-medium"
                      : "project-small"
                  }`}
                >
                  <img
                    src={
                      p.image ||
                      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                    }
                    alt={p.title}
                    className="project-image"
                  />

                  <div className="project-footer">
                    <h5 className="project-footer-title">{p.title}</h5>
                    <div className="project-actions">
                      <Link to={`/project/${p._id}`} className="project-action-btn">
                        View →
                      </Link>
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-action-btn"
                        >
                          Live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        )}
      </div>
    </div>
  );
}
