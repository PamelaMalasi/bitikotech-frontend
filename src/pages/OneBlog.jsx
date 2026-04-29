import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Clock, User, ArrowLeft } from "lucide-react";

const API = import.meta.env.VITE_API_URL;

const CATEGORY_COLORS = {
  "Marketing":       { bg: "#eff6ff", text: "#1d4ed8" },
  "Web Development": { bg: "#f0fdf4", text: "#15803d" },
  "Design":          { bg: "#fdf4ff", text: "#7e22ce" },
  "Business":        { bg: "#fff7ed", text: "#c2410c" },
  "Technology":      { bg: "#f0f9ff", text: "#0369a1" },
  "Analytics":       { bg: "#fefce8", text: "#a16207" },
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });
}

export default function OneBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API}/blog/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(setBlog)
      .catch(() => setError("Blog post not found."));
  }, [id]);

  if (error) {
    return (
      <div className="container text-center py-5" style={{ marginTop: 100 }}>
        <p className="text-muted">{error}</p>
        <Link to="/blog" className="btn btn-blue rounded-4 mt-3">← Back to Blog</Link>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container text-center py-5" style={{ marginTop: 100 }}>
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  const colors = CATEGORY_COLORS[blog.category] || { bg: "#f1f5f9", text: "#475569" };

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingTop: 140 }}>
      {/* Hero image */}
      {blog.image && (
        <div style={{ width: "100%", maxHeight: 480, overflow: "hidden" }}>
          <img
            src={blog.image}
            alt={blog.title}
            style={{ width: "100%", height: 480, objectFit: "cover" }}
          />
        </div>
      )}

      <div className="container py-5" style={{ maxWidth: 760 }}>
        {/* Back link */}
        <Link
          to="/blog"
          className="d-inline-flex align-items-center gap-1 text-decoration-none mb-4"
          style={{ color: "#149be3", fontWeight: 600, fontSize: "0.9rem" }}
        >
          <ArrowLeft size={15} /> Back to Blog
        </Link>

        {/* Category */}
        <div className="mb-3">
          <span
            style={{
              background: colors.bg,
              color: colors.text,
              padding: "3px 12px",
              borderRadius: 999,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {blog.category || "General"}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 800,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          {blog.title}
        </h1>

        {/* Meta */}
        <div
          className="d-flex align-items-center gap-3 mb-4"
          style={{ fontSize: "0.85rem", color: "#94a3b8" }}
        >
          <span className="d-flex align-items-center gap-1">
            <User size={13} /> {blog.author || "Bitiko Team"}
          </span>
          <span className="d-flex align-items-center gap-1">
            <Clock size={13} /> {blog.readTime || 1} min read
          </span>
          <span>{formatDate(blog.createdAt)}</span>
        </div>

        <hr style={{ borderColor: "#e2e8f0", marginBottom: 32 }} />

        {/* Excerpt */}
        <p
          style={{
            fontSize: "1.15rem",
            color: "#475569",
            lineHeight: 1.75,
            fontStyle: "italic",
            marginBottom: 28,
            paddingLeft: 16,
            borderLeft: "3px solid #149be3",
          }}
        >
          {blog.excerpt}
        </p>

        {/* Content */}
        <div
          style={{
            fontSize: "1rem",
            color: "#334155",
            lineHeight: 1.85,
            whiteSpace: "pre-wrap",
          }}
        >
          {blog.content}
        </div>

        <hr style={{ borderColor: "#e2e8f0", marginTop: 48, marginBottom: 32 }} />

        <Link to="/blog" className="btn btn-blue rounded-4">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
