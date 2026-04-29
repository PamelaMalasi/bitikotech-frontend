import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";

const API = import.meta.env.VITE_API_URL;

export default function OneProject() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API}/project/${id}`, { credentials: "include" })
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(setProject)
      .catch(() => setError("Project not found."));
  }, [id]);

  if (error) {
    return (
      <div className="container text-center py-5" style={{ marginTop: 100 }}>
        <p className="text-muted">{error}</p>
        <Link to="/projects" className="btn btn-blue rounded-4 mt-3">← Back to Projects</Link>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container text-center py-5" style={{ marginTop: 100 }}>
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingTop: 80 }}>
      {/* Hero image */}
      {project.image && (
        <div style={{ width: "100%", maxHeight: 420, overflow: "hidden" }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: 420, objectFit: "cover" }}
          />
        </div>
      )}

      <div className="container py-5" style={{ maxWidth: 900 }}>
        {/* Back */}
        <Link
          to="/projects"
          className="d-inline-flex align-items-center gap-1 text-decoration-none mb-4"
          style={{ color: "#149be3", fontWeight: 600, fontSize: "0.9rem" }}
        >
          <ArrowLeft size={15} /> Back to Projects
        </Link>

        {/* Title + meta */}
        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            fontWeight: 800,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            marginBottom: 12,
          }}
        >
          {project.title}
        </h1>

        {project.description && (
          <p style={{ color: "#64748b", lineHeight: 1.75, maxWidth: 680, marginBottom: 20 }}>
            {project.description}
          </p>
        )}

        <div className="d-flex gap-3 mb-5">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-blue rounded-4 d-inline-flex align-items-center gap-2"
            >
              <ExternalLink size={15} /> Visit Live Site
            </a>
          )}
          {project.pdf && (
            <a
              href={project.pdf}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-secondary rounded-4 d-inline-flex align-items-center gap-2"
            >
              <Download size={15} /> Download PDF
            </a>
          )}
        </div>

        {/* PDF viewer */}
        {project.pdf ? (
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              background: "#fff",
            }}
          >
            <iframe
              src={project.pdf}
              title={project.title}
              width="100%"
              height="900px"
              style={{ border: "none", display: "block" }}
            />
          </div>
        ) : (
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              border: "2px dashed #e2e8f0",
              padding: "60px 20px",
              textAlign: "center",
              color: "#94a3b8",
            }}
          >
            No PDF uploaded for this project yet.
          </div>
        )}
      </div>
    </div>
  );
}
