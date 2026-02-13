import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const API = import.meta.env.VITE_API_URL;

export default function EditProject({ project, goBack }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");
    const navigate = useNavigate();

  useEffect(() => {
    setTitle(project.title);
    setDescription(project.description);
    setLink(project.link || "");
  }, [project]);

  const save = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("link", link);

    if (image) {
      formData.append("image", image);
    }

    const res = await fetch(`${API}/project/${project._id}`, {
      method: "PUT",
      credentials: "include",
      body: formData,
    });

    if (!res.ok) return setMsg("Update failed");
    goBack();
  };

  return (
    <div style={{ maxWidth: 600, margin: "120px auto" }}>
      <h2>Edit Project</h2>

      <form onSubmit={save} style={{ display: "grid", gap: 10 }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input value={link} onChange={(e) => setLink(e.target.value)} />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button>Save</button>
       <button onClick={() => navigate("/admin/projects")}>← Cancel</button>
      </form>

      {msg && <p>{msg}</p>}
    </div>
  );
}
