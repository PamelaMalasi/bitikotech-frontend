import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import EditBlog from "./EditBlog";
import "../Styles/Admin.css";

const API = import.meta.env.VITE_API_URL;

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [msg, setMsg] = useState("");
  const [editing, setEditing] = useState(null);
  const navigate = useNavigate();

  const loadBlogs = async () => {
    const res = await fetch(`${API}/blog`);
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => { loadBlogs(); }, []);

  const remove = async (id) => {
    if (!window.confirm("Delete this blog post?")) return;
    const res = await fetch(`${API}/blog/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) return setMsg("Delete failed.");
    setMsg("deleted");
    setBlogs((prev) => prev.filter((b) => b._id !== id));
  };

  if (editing) {
    return (
      <EditBlog
        blog={editing}
        goBack={() => { setEditing(null); loadBlogs(); }}
      />
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">Manage Blogs</h1>
          <div className="d-flex gap-2">
            <button
              className="btn-admin-primary"
              onClick={() => navigate("/admin/blogs/add")}
            >
              + Add Blog
            </button>
            <button
              className="btn-admin-secondary"
              onClick={() => navigate("/admin/panel")}
            >
              ← Back
            </button>
          </div>
        </div>

        {msg === "deleted" && (
          <p className="admin-msg-success">Blog post deleted.</p>
        )}
        {msg && msg !== "deleted" && (
          <p className="admin-msg-error">{msg}</p>
        )}

        {blogs.length === 0 ? (
          <div className="admin-card text-center text-muted py-5">
            No blog posts yet. Add your first one!
          </div>
        ) : (
          blogs.map((b) => (
            <div className="admin-list-item" key={b._id}>
              <span className="item-title">{b.title}</span>
              <div className="d-flex gap-2 flex-shrink-0">
                <Link
                  to={`/blog/${b._id}`}
                  className="btn-admin-secondary"
                  style={{ fontSize: "0.85rem", padding: "0.35rem 0.85rem" }}
                >
                  Read
                </Link>
                <button className="btn-admin-edit" onClick={() => setEditing(b)}>
                  Edit
                </button>
                <button className="btn-admin-danger" onClick={() => remove(b._id)}>
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
