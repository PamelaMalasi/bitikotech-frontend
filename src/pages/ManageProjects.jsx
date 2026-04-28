import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Admin.css";

const API = import.meta.env.VITE_API_URL;

export default function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const res = await fetch(`${API}/project`, { credentials: "include" });
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => { load(); }, []);

  const remove = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    const res = await fetch(`${API}/project/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) return setMsg("Delete failed.");
    setProjects((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">Manage Projects</h1>
          <div className="d-flex gap-2">
            <button
              className="btn-admin-primary"
              onClick={() => navigate("/admin/projects/add")}
            >
              + Add Project
            </button>
            <button
              className="btn-admin-secondary"
              onClick={() => navigate("/admin/panel")}
            >
              ← Back
            </button>
          </div>
        </div>

        {msg && <p className="admin-msg-error">{msg}</p>}

        {projects.length === 0 ? (
          <div className="admin-card text-center text-muted py-5">
            No projects yet. Add your first one!
          </div>
        ) : (
          projects.map((p) => (
            <div className="admin-list-item" key={p._id}>
              <span className="item-title">{p.title}</span>
              <div className="d-flex gap-2 flex-shrink-0">
                <Link
                  to={`/project/${p._id}`}
                  className="btn-admin-secondary"
                  style={{ fontSize: "0.85rem", padding: "0.35rem 0.85rem" }}
                >
                  View
                </Link>
                <button className="btn-admin-danger" onClick={() => remove(p._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
