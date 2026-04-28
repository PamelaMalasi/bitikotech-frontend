import { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import AddBlog from "./AddBlog";
import ManageBlogs from "./ManageBlogs";
import AddProject from "./AddProject";
import ManageProjects from "./ManageProjects";
import "../Styles/Admin.css";
import logo from "../images/logo.png";

const API = import.meta.env.VITE_API_URL;

export default function AdminLogin() {
  const [screen, setScreen] = useState("panel");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${API}/admin/me`, { credentials: "include" });
        if (res.ok) setLoggedIn(true);
      } catch {}
    };
    checkAuth();
  }, []);

  const login = async (e) => {
    e.preventDefault();
    setMsg("");
    const res = await fetch(`${API}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) return setMsg("Wrong email or password.");
    setLoggedIn(true);
    setScreen("panel");
  };

  const logout = async () => {
    await fetch(`${API}/admin/logout`, { method: "POST", credentials: "include" });
    setLoggedIn(false);
    setScreen("panel");
    setMsg("");
    setEmail("");
    setPassword("");
  };

  const go = (where) => setScreen(where);

  if (loggedIn) {
    if (screen === "addBlog")    return <AddBlog />;
    if (screen === "blogs")      return <ManageBlogs />;
    if (screen === "addProject") return <AddProject />;
    if (screen === "projects")   return <ManageProjects />;
    return <AdminPanel onLogout={logout} go={go} />;
  }

  return (
    <div className="admin-login-wrap">
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div className="admin-card">
          <div className="text-center mb-4">
            <img src={logo} alt="Bitiko" style={{ height: 72, width: 72, marginBottom: 12 }} />
            <h2 className="admin-title">Admin Login</h2>
            <p className="text-muted small mt-1">Sign in to manage your content</p>
          </div>

          <form onSubmit={login} className="admin-form">
            <div className="mb-3">
              <label className="form-label fw-semibold small">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="admin@bitiko.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold small">Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {msg && <p className="admin-msg-error">{msg}</p>}

            <button type="submit" className="btn-admin-primary w-100">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
