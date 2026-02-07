import { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";
import AddBlog from "./AddBlog";
import ManageBlogs from "./ManageBlogs";
import AddProject from "./AddProject";
import ManageProjects from "./ManageProjects";



const API = "http://localhost:5003";

export default function AdminLogin() {
  const [screen, setScreen] = useState("panel"); // "panel" | "addBlog" | "blogs" | "addProject" | "projects"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  

  useEffect(() => {
  const checkAuth = async () => {
    try {
    const res = await fetch(`${API}/admin/me`, {
  credentials: "include",
});


      if (res.ok) {
        setLoggedIn(true);
      }
    } catch (err) {
      // not logged in → do nothing
    }
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
  setScreen("panel"); // ✅ reset screen
};

const logout = async () => {
  await fetch(`${API}/admin/logout`, {
    method: "POST",
    credentials: "include",
  });

  setLoggedIn(false);
  setScreen("panel"); // ✅ reset screen
  setMsg("");
  setEmail("");
  setPassword("");
};


const go = (where) => setScreen(where);

if (loggedIn) {
  if (screen === "addBlog") {
    return <AddBlog goBack={() => setScreen("panel")} />;
  }

  if (screen === "blogs") {
    return <ManageBlogs goBack={() => setScreen("panel")} />;
  }

  if (screen === "addProject") {
    return <AddProject goBack={() => setScreen("panel")} />;
  }

  if (screen === "projects") {
    return <ManageProjects goBack={() => setScreen("panel")} />;
  }

  return <AdminPanel onLogout={logout} go={go} />;
}

  return (
    <div style={{ maxWidth: 420, margin: "120px auto", padding: 16 }}>
      <h2>Admin Login</h2>

      <form onSubmit={login} style={{ display: "grid", gap: 10 }}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {msg && <p style={{ marginTop: 12 }}>{msg}</p>}
    </div>
  );
}
