import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function EditBlog({ blog, goBack }) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [msg, setMsg] = useState("");
    const navigate = useNavigate();

  useEffect(() => {
    setTitle(blog.title);
    setExcerpt(blog.excerpt);
    setContent(blog.content);
  }, [blog]);

  const save = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API}/blog/${blog._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ title, excerpt, content }),
    });

    if (!res.ok) return setMsg("Update failed");
    goBack();
  };

  return (
    <div style={{ maxWidth: 600, margin: "120px auto" }}>
      <h2>Edit Blog</h2>

      <form onSubmit={save} style={{ display: "grid", gap: 10 }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
        <textarea
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button>Save</button>
       <button onClick={() => navigate("/admin/blogs")}>← Cancel</button>
      </form>

      {msg && <p>{msg}</p>}
    </div>
  );
}
