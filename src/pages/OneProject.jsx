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
      <div className="container text-center py-5" style={{ marginTop: 140 }}>
        <p className="text-muted">{error}</p>
        <Link to="/projects" className="btn btn-blue rounded-4 mt-3">← Back to Projects</Link>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container text-center py-5" style={{ marginTop: 140 }}>
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div className="one-project-page">
      <div className="container" style={{ maxWidth: 1000 }}>

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

        {/* Browser mockup */}
        {project.screenshot ? (
          <div className="browser-mockup">
            <div className="browser-bar">
              <div className="browser-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="browser-url">
                {project.link
                  ? project.link.replace(/^https?:\/\//, "")
                  : project.title.toLowerCase().replace(/\s+/g, "") + ".com"}
              </div>
            </div>
            <div className="browser-screen">
              <img src={project.screenshot} alt={`${project.title} screenshot`} />
            </div>
          </div>
        ) : (
          <div className="one-project-empty">
            No screenshot uploaded yet.
          </div>
        )}

      </div>
    </div>
  );
}
