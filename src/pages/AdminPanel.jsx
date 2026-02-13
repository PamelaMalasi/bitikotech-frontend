import { useNavigate } from "react-router-dom";


    const API = import.meta.env.VITE_API_URL;
export default function AdminPanel({ onLogout }) {


  const navigate = useNavigate();
  
const logout = async () => {
  await fetch(`${API}/admin/logout`, {
    method: "POST",
    credentials: "include",
  });

  navigate("/admin");
};



  return (
    <div style={{ maxWidth: 520, margin: "120px auto", padding: 16 }}>
      <h2>Admin Panel</h2>

      <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
        <button onClick={() => navigate("/admin/blogs/add")}>Add Blog</button>
        <button onClick={() => navigate("/admin/blogs")}>Manage Blogs</button>

        <button onClick={() => navigate("/admin/projects/add")}>Add Project</button>
        <button onClick={() => navigate("/admin/projects")}>Manage Projects</button>

      <button onClick={logout} style={{ marginTop: 10 }}>
          Logout
        </button>
      </div>
    </div>
  );
}
