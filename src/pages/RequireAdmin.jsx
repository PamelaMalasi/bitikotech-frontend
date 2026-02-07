import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const API = "http://localhost:5003";

export default function RequireAdmin({ children }) {
  const [checking, setChecking] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    fetch(`${API}/admin/me`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) setAuthorized(true);
        setChecking(false);
      })
      .catch(() => setChecking(false));
  }, []);

  if (checking) return <p>Checking access…</p>;

  if (!authorized) return <Navigate to="/admin" replace />;

  return children;
}
