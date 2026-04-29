import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Admin.css";

const API = import.meta.env.VITE_API_URL;

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!title || !description || !image) {
      setMsg("Please fill all required fields and choose a cover image.");
      return;
    }

    setLoading(true);
    const fd = new FormData();
    fd.append("title", title);
    fd.append("description", description);
    fd.append("link", link);
    fd.append("image", image);
    if (screenshot) fd.append("screenshot", screenshot);

    const res = await fetch(`${API}/project`, {
      method: "POST",
      credentials: "include",
      body: fd,
    });
    setLoading(false);

    if (!res.ok) return setMsg("Failed to create project.");

    setMsg("success");
    setTitle(""); setDescription(""); setLink("");
    setImage(null); setScreenshot(null);
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">Add Project</h1>
          <button className="btn-admin-secondary" onClick={() => navigate("/admin/panel")}>
            ← Back
          </button>
        </div>

        <div className="admin-card">
          {msg === "success" && <p className="admin-msg-success">Project created successfully.</p>}
          {msg && msg !== "success" && <p className="admin-msg-error">{msg}</p>}

          <form onSubmit={submit} className="admin-form">
            <div className="mb-3">
              <label className="form-label fw-semibold small">Title</label>
              <input
                className="form-control"
                placeholder="Project title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold small">Description</label>
              <textarea
                className="form-control"
                rows={4}
                placeholder="Describe this project..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold small">
                Live Link <span className="text-muted fw-normal">(optional)</span>
              </label>
              <input
                className="form-control"
                placeholder="https://..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold small">Cover Image</label>
              <p className="text-muted small mb-1">Shown on the projects grid.</p>
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold small">
                Website Screenshot <span className="text-muted fw-normal">(optional)</span>
              </label>
              <p className="text-muted small mb-1">Shown inside the project page as a mockup.</p>
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
              />
            </div>

            <button type="submit" className="btn-admin-primary w-100" disabled={loading}>
              {loading ? "Creating…" : "Create Project"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
