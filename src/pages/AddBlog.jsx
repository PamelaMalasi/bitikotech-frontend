import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;


export default function AddBlog({ goBack }) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");
    const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!title || !excerpt || !content || !image) {
      setMsg("Please fill all fields and choose an image.");
      return;
    }

    const fd = new FormData();
    fd.append("title", title);
    fd.append("excerpt", excerpt);
    fd.append("content", content);
    fd.append("image", image);

    const res = await fetch(`${API}/blog`, {
      method: "POST",
      credentials: "include",
      body: fd,
    });

    if (!res.ok) return setMsg("Failed to create blog.");
    setMsg("✅ Blog created!");
    setTitle("");
    setExcerpt("");
    setContent("");
    setImage(null);
  };

  return (
    <div style={{ maxWidth: 520, margin: "120px auto", padding: 16 }}>
      <h2>Add Blog</h2>

      <form onSubmit={submit} style={{ display: "grid", gap: 10 }}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
        <textarea placeholder="Content" rows={6} value={content} onChange={(e) => setContent(e.target.value)} />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        <button type="submit">Create</button>
        <button onClick={() => navigate("/admin/panel")}>← Back</button>
      </form>

      {msg && <p style={{ marginTop: 12 }}>{msg}</p>}
    </div>
  );
}
