import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = "http://localhost:5003";
export default function ManageProjects({ goBack }) {

  const [projects, setProjects] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const load = async () => {
    const res = await fetch(`${API}/project`, {
      credentials: "include",
    });
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    const res = await fetch(`${API}/project/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!res.ok) return setMsg("Delete failed.");

    setProjects(projects.filter((p) => p._id !== id));
  };

  return (
    <div style={{ maxWidth: 700, margin: "120px auto", padding: 16 }}>
      <h2>Manage Projects</h2>

<button onClick={() => navigate("/admin/panel")}>← Back</button>


      {msg && <p>{msg}</p>}

      <ul style={{ marginTop: 20 }}>
        {projects.map((p) => (
          <li key={p._id} style={{ marginBottom: 10 }}>
            <strong>{p.title}</strong>{" "}
            <Link to={`/project/${p._id}`}>View</Link>

            <button
              style={{ marginLeft: 10 }}
              onClick={() => remove(p._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
