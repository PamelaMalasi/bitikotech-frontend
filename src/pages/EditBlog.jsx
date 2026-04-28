import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Admin.css";

const API = import.meta.env.VITE_API_URL;

export default function EditBlog({ blog, goBack }) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(blog.title);
    setExcerpt(blog.excerpt);
    setContent(blog.content);
  }, [blog]);

  const save = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`${API}/blog/${blog._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ title, excerpt, content }),
    });
    setLoading(false);
    if (!res.ok) return setMsg("Update failed. Please try again.");
    goBack();
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">Edit Blog Post</h1>
          <button
            className="btn-admin-secondary"
            onClick={() => navigate("/admin/blogs")}
          >
            ← Cancel
          </button>
        </div>

        <div className="admin-card">
          {msg && <p className="admin-msg-error">{msg}</p>}

          <form onSubmit={save} className="admin-form">
            <div className="mb-3">
              <label className="form-label fw-semibold small">Title</label>
              <input
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold small">Excerpt</label>
              <input
                className="form-control"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold small">Content</label>
              <textarea
                className="form-control"
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-admin-primary w-100" disabled={loading}>
              {loading ? "Saving…" : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
