import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, User, Tag } from "lucide-react";
import "../Styles/Blog.css";

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
    month: "short", day: "numeric", year: "numeric",
  });
}

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch(`${API}/blog`, { credentials: "include" })
      .then(async (r) => {
        const data = await r.json().catch(() => null);
        if (!r.ok) throw new Error(data?.message || `HTTP ${r.status}`);
        return data;
      })
      .then(setBlogs)
      .catch((err) => console.error("BLOG FETCH ERROR:", err));
  }, []);

  const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category).filter(Boolean)))];

  const filtered = activeCategory === "All"
    ? blogs
    : blogs.filter((b) => b.category === activeCategory);

  return (
    <section className="min-vh-100" style={{ background: "#f8fafc" }}>
      {/* Hero */}
      <div className="blog-hero">
        <div className="container" style={{ maxWidth: 900 }}>
          <p className="blog-hero-kicker">Insights &amp; Resources</p>
          <h1 className="blog-hero-title">The Bitiko Blog</h1>
          <p className="blog-hero-sub">
            Strategy, design, and digital marketing insights to help your business grow.
          </p>
        </div>
      </div>

      <div className="container py-5" style={{ maxWidth: 1100 }}>
        {/* Category tabs */}
        <div className="blog-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`blog-tab ${activeCategory === cat ? "blog-tab-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              <span className="blog-tab-count">
                {cat === "All" ? blogs.length : blogs.filter((b) => b.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        <div className="row g-4 mt-2">
          {/* Blog cards */}
          <main className="col-lg-8">
            {filtered.length === 0 && (
              <p className="text-muted text-center py-5">No posts in this category yet.</p>
            )}

            {filtered.map((b, i) => {
              const colors = CATEGORY_COLORS[b.category] || { bg: "#f1f5f9", text: "#475569" };
              const featured = i === 0 && activeCategory === "All";

              return (
                <Link
                  key={b._id}
                  to={`/blog/${b._id}`}
                  className="blog-card text-decoration-none d-block mb-4"
                >
                  <div className={`blog-card-inner ${featured ? "blog-card-featured" : ""}`}>
                    {b.image && (
                      <div className={featured ? "blog-card-img-featured" : "blog-card-img"}>
                        <img src={b.image} alt={b.title} />
                      </div>
                    )}

                    <div className="blog-card-body">
                      <span
                        className="blog-category-badge"
                        style={{ background: colors.bg, color: colors.text }}
                      >
                        {b.category || "General"}
                      </span>

                      <h2 className={featured ? "blog-card-title-featured" : "blog-card-title"}>
                        {b.title}
                      </h2>

                      <p className="blog-card-excerpt">{b.excerpt}</p>

                      <div className="blog-card-meta">
                        <span><User size={13} /> {b.author || "Bitiko Team"}</span>
                        <span><Clock size={13} /> {b.readTime || 1} min read</span>
                        <span>{formatDate(b.createdAt)}</span>
                        <span className="blog-read-more ms-auto">Read article →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </main>

          {/* Sidebar */}
          <aside className="col-lg-4 d-none d-lg-block">
            <div className="position-sticky" style={{ top: 120 }}>
              {/* Categories */}
              <div className="blog-sidebar-card mb-4">
                <h6 className="blog-sidebar-title"><Tag size={14} /> Categories</h6>
                <ul className="list-unstyled mb-0">
                  {categories.filter((c) => c !== "All").map((cat) => {
                    const count = blogs.filter((b) => b.category === cat).length;
                    const colors = CATEGORY_COLORS[cat] || { bg: "#f1f5f9", text: "#475569" };
                    return (
                      <li key={cat} className="blog-sidebar-category" onClick={() => setActiveCategory(cat)}>
                        <span
                          className="blog-category-badge"
                          style={{ background: colors.bg, color: colors.text, cursor: "pointer" }}
                        >
                          {cat}
                        </span>
                        <span className="text-muted small ms-auto">{count}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="blog-sidebar-card">
                <h6 className="blog-sidebar-title">Newsletter</h6>
                <p className="small text-muted mb-3">
                  Weekly insights on design, marketing, and business growth. No spam.
                </p>
                <input
                  type="email"
                  className="form-control form-control-sm mb-2"
                  placeholder="your@email.com"
                />
                <button className="btn btn-blue w-100 btn-sm rounded-3">Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
