import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Blogs from "./Components/Blogs";
import Projects from "./Components/Projects";
import BackgroundVideo from "./Components/BackgroundVideo";

import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import ManageBlogs from "./pages/ManageBlogs";
import ManageProjects from "./pages/ManageProjects";
import AddBlog from "./pages/AddBlog";
import AddProject from "./pages/AddProject";
import OneBlog from "./pages/OneBlog";
import OneProject from "./pages/OneProject";

import RequireAdmin from "./pages/RequireAdmin";


function AppRoutes({ loggedIn, setLoggedIn }) {
  const location = useLocation();
  const showBackgroundVideo = location.pathname === "/";

  return (
    <div className="hero-section">
      {showBackgroundVideo && <BackgroundVideo />}
      <Navigation />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blogs />} />
<Route path="/projects" element={<Projects />} />

        <Route path="/blog/:id" element={<OneBlog />} />
        <Route path="/project/:id" element={<OneProject />} />

        {/* ADMIN LOGIN */}
        <Route path="/admin" element={<AdminLogin setLoggedIn={setLoggedIn} />} />

        {/* PROTECTED ADMIN */}
        <Route
          path="/admin/panel"
          element={
            <RequireAdmin loggedIn={loggedIn}>
              <AdminPanel />
            </RequireAdmin>
          }
        />

        <Route
          path="/admin/blogs"
          element={
            <RequireAdmin loggedIn={loggedIn}>
              <ManageBlogs />
            </RequireAdmin>
          }
        />

        <Route
          path="/admin/projects"
          element={
            <RequireAdmin loggedIn={loggedIn}>
              <ManageProjects />
            </RequireAdmin>
          }
        />

        <Route
          path="/admin/blogs/add"
          element={
            <RequireAdmin loggedIn={loggedIn}>
              <AddBlog />
            </RequireAdmin>
          }
        />

        <Route
          path="/admin/projects/add"
          element={
            <RequireAdmin loggedIn={loggedIn}>
              <AddProject />
            </RequireAdmin>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <AppRoutes loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </BrowserRouter>
  );
}
