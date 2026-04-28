import { useNavigate } from "react-router-dom";
import { PlusCircle, List, FolderPlus, Layers, LogOut } from "lucide-react";
import "../Styles/Admin.css";

const API = import.meta.env.VITE_API_URL;

export default function AdminPanel({ onLogout }) {
  const navigate = useNavigate();

  const logout = async () => {
    await fetch(`${API}/admin/logout`, { method: "POST", credentials: "include" });
    navigate("/admin");
  };

  const actions = [
    { label: "Add Blog",        icon: PlusCircle,  color: "#149be3", onClick: () => navigate("/admin/blogs/add") },
    { label: "Manage Blogs",    icon: List,         color: "#6b46c1", onClick: () => navigate("/admin/blogs") },
    { label: "Add Project",     icon: FolderPlus,   color: "#149be3", onClick: () => navigate("/admin/projects/add") },
    { label: "Manage Projects", icon: Layers,        color: "#6b46c1", onClick: () => navigate("/admin/projects") },
  ];

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">Admin Panel</h1>
          <button
            className="btn-admin-secondary"
            onClick={onLogout || logout}
          >
            <LogOut size={15} /> Logout
          </button>
        </div>

        <div className="row g-3">
          {actions.map((a, i) => (
            <div className="col-6 col-md-3" key={i}>
              <button className="admin-action-card" onClick={a.onClick}>
                <a.icon size={34} color={a.color} />
                <span className="action-label">{a.label}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
