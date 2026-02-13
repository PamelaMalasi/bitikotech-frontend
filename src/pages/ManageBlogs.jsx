import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import EditBlog from "./EditBlog";



const API = import.meta.env.VITE_API_URL;

export default function ManageBlogs({ goBack }) {
  const [blogs, setBlogs] = useState([]);
  const [msg, setMsg] = useState("");
  const [editing, setEditing] = useState(null);
    const navigate = useNavigate();



  const loadBlogs = async () => {
    const res = await fetch(`${API}/blog`);
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const remove = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    const res = await fetch(`${API}/blog/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!res.ok) return setMsg("Delete failed.");

    setMsg("Blog deleted.");
    setBlogs(blogs.filter((b) => b._id !== id));
  };

  if (editing) {
  return (
    <EditBlog
      blog={editing}
      goBack={() => {
        setEditing(null);
        loadBlogs();
      }}
    />
  );
}


  return (
    <div style={{ maxWidth: 700, margin: "120px auto", padding: 16 }}>
      <h2>Manage Blogs</h2>

      <button onClick={() => navigate("/admin/panel")}>← Back</button>

      {msg && <p>{msg}</p>}

      <ul style={{ marginTop: 20 }}>
        {blogs.map((b) => (
      <li key={b._id} style={{ marginBottom: 10 }}>
<strong>{b.title}</strong>

<Link to={`/blog/${b._id}`} style={{ marginLeft: 10 }}>
  Read
</Link>

<button style={{ marginLeft: 10 }} onClick={() => setEditing(b)}>
  Edit
</button>

<button style={{ marginLeft: 10 }} onClick={() => remove(b._id)}>
  Delete
</button>


</li>

        ))}
      </ul>
    </div>
  );
}
