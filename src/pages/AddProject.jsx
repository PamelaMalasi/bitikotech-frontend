import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function AddProject({ goBack }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState(null);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setMsg("");

        if (!title || !description || !image) {
            setMsg("Fill all required fields + image.");
            return;
        }

        const fd = new FormData();
        fd.append("title", title);
        fd.append("description", description);
        fd.append("link", link);
        fd.append("image", image);

        const res = await fetch(`${API}/project`, {
            method: "POST",
            credentials: "include",
            body: fd,
        });

        if (!res.ok) return setMsg("Failed to create project.");

        setMsg("✅ Project created!");
        setTitle("");
        setDescription("");
        setLink("");
        setImage(null);
    };

    return (
        <div style={{ maxWidth: 520, margin: "120px auto", padding: 16 }}>
            <h2>Add Project</h2>

            <form onSubmit={submit} style={{ display: "grid", gap: 10 }}>
                <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
                <input placeholder="Link (optional)" value={link} onChange={(e) => setLink(e.target.value)} />
                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
                <button type="submit">Create</button>
                <button onClick={() => navigate("/admin/panel")}>← Back</button>
            </form>

            {msg && <p>{msg}</p>}
        </div>
    );
}
