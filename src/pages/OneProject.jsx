import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = "http://localhost:5003";

export default function OneProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${API}/project/${id}`, {
        credentials: "include",
      });
      const data = await res.json();
      setProject(data);
    };

    load();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: 700, margin: "120px auto", padding: 16 }}>
      <button onClick={() => navigate("/admin/projects")}>← Back</button>



      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}
