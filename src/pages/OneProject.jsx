import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import "../Styles/OneProject.css";

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
    <div className="one-project-page">
      <div className="container" style={{ maxWidth: 860 }}>

        <Link to="/projects" className="one-project-back">
          <ArrowLeft size={15} /> Back to Projects
        </Link>

        <div className="one-project-header">
          <div>
            <h1 className="one-project-title">{project.title}</h1>
            {project.description && (
              <p className="one-project-desc">{project.description}</p>
            )}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-blue rounded-4 d-inline-flex align-items-center gap-2 flex-shrink-0"
            >
              <ExternalLink size={15} /> Visit Site
            </a>
          )}
        </div>

        {/* Screenshot — vertical rectangle, centred */}
        <div className="one-project-screenshot-wrap">
          {project.screenshot ? (
            <img
              src={project.screenshot}
              alt={project.title}
              className="one-project-screenshot"
            />
          ) : (
            <div className="one-project-empty">
              No screenshot uploaded yet.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
