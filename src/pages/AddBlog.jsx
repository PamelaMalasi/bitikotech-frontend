import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Admin.css";

const API = import.meta.env.VITE_API_URL;

const CATEGORIES = [
  "Marketing",
  "Web Development",
  "Design",
  "Business",
  "Technology",
  "Analytics",
];

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Marketing");
  const [author, setAuthor] = useState("Bitiko Team");
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!title || !excerpt || !content || !image) {
      setMsg("Please fill all fields and choose an image.");
      return;
    }

    setLoading(true);
    const fd = new FormData();
    fd.append("title", title);
    fd.append("excerpt", excerpt);
    fd.append("content", content);
    fd.append("category", category);
    fd.append("author", author);
    fd.append("image", image);

    const res = await fetch(`${API}/blog`, {
      method: "POST",
      credentials: "include",
      body: fd,
    });
    setLoading(false);

    if (!res.ok) return setMsg("Failed to create blog post.");

    setMsg("success");
    setTitle(""); setExcerpt(""); setContent("");
    setCategory("Marketing"); setAuthor("Bitiko Team"); setImage(null);
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">Add Blog Post</h1>
          <button className="btn-admin-secondary" onClick={() => navigate("/admin/panel")}>
            ← Back
          </button>
        </div>

        <div className="admin-card">
          {msg === "success" && <p className="admin-msg-success">Blog post created successfully.</p>}
          {msg && msg !== "success" && <p className="admin-msg-error">{msg}</p>}

          <form onSubmit={submit} className="admin-form">
            <div className="row g-3 mb-3">
              <div className="col-md-8">
                <label className="form-label fw-semibold small">Title</label>
                <input
                  className="form-control"
                  placeholder="Post title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold small">Category</label>
                <select
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold small">Author</label>
              <input
                className="form-control"
                placeholder="Bitiko Team"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold small">Excerpt</label>
              <input
                className="form-control"
                placeholder="Short summary shown in the listing"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold small">Content</label>
              <textarea
                className="form-control"
                rows={8}
                placeholder="Write the full content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold small">Cover Image</label>
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
            </div>

            <button type="submit" className="btn-admin-primary w-100" disabled={loading}>
              {loading ? "Creating…" : "Create Post"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
