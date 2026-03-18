import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Projects.css";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

const API = import.meta.env.VITE_API_URL;

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

  const breakpoints = {
    default: 2,
  };

  return (
    <div className="min-vh-100 bg-img pb-5">
      <section className="bg-img-projects">
        <div className="container text-center" style={{ maxWidth: "1100px" }}>
          <div style={{ marginTop: "110px", minHeight: "200px" }}>
            <h1 className="display-4 fw-bold mb-3 gradient-text-blue pt-2">
              Our Projects
            </h1>

            <p className="lead text-muted mb-4 pt-1">
              Explore our portfolio of successful video campaigns and solutions
              that have helped businesses achieve remarkable growth and engagement.
            </p>
          </div>

          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {projects.map((p, index) => (
              <div key={p._id}>
                <div
                  className={`card border-0 shadow-sm overflow-hidden project-card rounded-4 ${index % 3 === 0
                      ? "project-tall"
                      : index % 3 === 1
                        ? "project-medium"
                        : "project-small"
                    }`}
                >
                  <div className="position-relative project-image-wrapper">
                    <img
                      src={
                        p.image
                          ? p.image
                          : "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                      }
                      alt={p.title}
                      className="w-100 h-100 project-image"
                    />
                    <div className="project-overlay" />
                  </div>

                  <div className="card-body text-start">
                    <h5 className="card-title mb-2">{p.title}</h5>
                    <p className="card-text text-muted mb-0">{p.description}</p>

                    <div className="d-flex gap-3 mt-3">
                      <Link to={`/project/${p._id}`} className="project-link">
                        View
                      </Link>

                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          Live link
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>
    </div>
  );
}