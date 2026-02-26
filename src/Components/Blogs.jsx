import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark, MoreHorizontal, Star, Twitter } from "lucide-react";

const API = import.meta.env.VITE_API_URL;
console.log("API:", API);

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

useEffect(() => {
  fetch(`${API}/blog`, { credentials: "include" })
    .then(async (r) => {
      const data = await r.json().catch(() => null);
      if (!r.ok) throw new Error(data?.message || `HTTP ${r.status}`);
      return data;
    })
    .then(setProjects)
    .catch((err) => console.error("PROJECT FETCH ERROR:", err));
}, []);


  return (
    <section className="min-vh-100 bg-light">
      <div className="container py-5" style={{ marginTop: 120 }}>
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="fw-bold">Design Collective</h1>
          <MoreHorizontal />
        </div>

        {/* NAV TABS */}
        <ul className="nav border-bottom mb-4 flex-nowrap overflow-auto">
          {[
            "Home",
            "About",
            "Editors' picks",
            "Newsletter",
            "Publish",
          ].map((tab, i) => (
            <li key={tab} className="nav-item">
              <span
                className={`nav-link ${i === 0 ? "fw-semibold text-dark" : "text-muted"}`}
                style={{ cursor: "pointer" }}
              >
                {tab}
              </span>
            </li>
          ))}
        </ul>

        <div className="row g-5">
          {/* MAIN CONTENT */}
          <main className="col-lg-8">
            {blogs.map((b) => (
              <article
                key={b._id}
                className="border-bottom pb-4 mb-4"
                style={{ cursor: "pointer" }}
              >
                {/* AUTHOR ROW */}
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div
                    className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
                    style={{ width: 24, height: 24, fontSize: 12 }}
                  >
                    {b.author ? b.author[0] : "A"}
                  </div>
                  <span className="small fw-medium">
                    {b.author || "Admin"}
                  </span>

                  {b.pinned && (
                    <>
                      <span className="text-muted">·</span>
                      <span className="small text-muted">Pinned</span>
                      <Star size={14} className="text-warning" />
                    </>
                  )}
                </div>

                <div className="d-flex gap-4">
                  {/* TEXT */}
                  <div className="flex-grow-1">
                    <h2 className="h5 fw-bold mb-2">{b.title}</h2>

                    <p className="text-muted mb-3" style={{ maxWidth: 520 }}>
                      {b.excerpt}
                    </p>

                    <div className="d-flex align-items-center gap-3">
                      {b.category && (
                        <span className="badge rounded-pill bg-secondary-subtle text-secondary">
                          {b.category}
                        </span>
                      )}

                      <span className="small text-muted">
                        {b.readTime || "4 min read"}
                      </span>

                      <div className="ms-auto d-flex gap-3">
                        <Bookmark size={18} className="text-muted" />
                        <MoreHorizontal size={18} className="text-muted" />
                      </div>
                    </div>
                  </div>

                  {/* IMAGE */}
                  {b.image && (
                    <div className="d-none d-sm-block">
                      <img
                        src={`${API}${b.image}`}
                        alt={b.title}
                        className="rounded"
                        style={{
                          width: 120,
                          height: 120,
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  <Link
                    to={`/blog/${b._id}`}
                    className="text-decoration-none fw-semibold"
                    style={{ color: "#149be3" }}
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            ))}

            {blogs.length === 0 && (
              <p className="text-center text-muted mt-5">
                No blog posts yet.
              </p>
            )}
          </main>

          {/* SIDEBAR */}
          <aside className="col-lg-4 d-none d-lg-block">
            <div className="position-sticky" style={{ top: 120 }}>
              {/* ABOUT */}
              <div className="mb-5">
                <div
                  className="rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 64, height: 64 }}
                >
                  🎨
                </div>
                <p className="small text-muted">
                  Curated stories on UX, Visual & Product Design.
                </p>
                <button className="btn btn-outline-primary btn-sm rounded-pill">
                  Following
                </button>
              </div>

              {/* SOCIAL */}
              <div className="mb-5">
                <p className="small text-muted mb-2">
                  Connect with us
                </p>
                <Twitter />
              </div>

              {/* NEWSLETTER */}
              <div className="border rounded p-4">
                <h6 className="fw-bold mb-1">Newsletter</h6>
                <p className="small text-muted mb-3">
                  Weekly insights, no spam.
                </p>
                <button className="btn btn-primary w-100 rounded-pill btn-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
