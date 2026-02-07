import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const API = "http://localhost:5003";

export default function OneBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`${API}/blog/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(setBlog)
      .catch(() => setError("Blog not found"));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!blog) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: 800, margin: "80px auto", padding: 16 }}>
      <h1>{blog.title}</h1>

<button onClick={() => navigate("/admin/blogs")}>← Back</button>
      {blog.image && (
        <img
          src={`http://localhost:5003${blog.image}`}
          alt=""
          style={{ width: "100%", margin: "20px 0" }}
        />
      )}

      <p>{blog.content}</p>
    </div>
  );
}
