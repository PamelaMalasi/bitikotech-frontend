import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import "../Styles/Navigation.css";
import "../Styles/Home.css";



function Navigation() {



  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const menuRef = useRef(null);

  // ✅ navbar style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ close menu when clicking outside (mobile)
  useEffect(() => {
    if (!expanded) return;
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, [expanded]);



  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
      className={`${scrolled ? "bg-white shadow-sm nav-white" : "bg-transparent"} ${
        scrolled ? "navbar-elevated1" : "navbar-elevated"
      }`}
    >
      <Container
        className="home-text position-relative d-flex align-items-center justify-content-between"
        style={{ zIndex: 1 }}
      >
        {/* ✅ Clickable logo */}
        <Link
          to="/"
          onClick={() => setExpanded(false)}
          className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src={logo} alt="logo" style={{ height: "100px", width: "100px" }} />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger-button" />

        <Navbar.Collapse id="basic-navbar-nav" className="mobile-menu" ref={menuRef}>
          <Nav className="mx-auto nav-margin">
            <Nav className="collapsed-menu mx-auto d-flex justify-content-start">
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setExpanded(false)}
                className="nav-underline"
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
                className="nav-underline"
              >
                About
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => setExpanded(false)}
                className="nav-underline"
              >
                Our Projects
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/blog"
                onClick={() => setExpanded(false)}
                className="nav-underline"
              >
                Blog
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/services"
                onClick={() => setExpanded(false)}
                className="nav-underline"
              >
                Services
              </Nav.Link>

            
            
            </Nav>
          </Nav>

          {/* ✅ Contact button (no refresh) */}
          <Link
            to="/contact"
            className={`rounded-4 btn d-none d-md-inline-flex ${
              scrolled ? "button-card-nav" : "btn-light"
            }`}
            onClick={() => setExpanded(false)}
          >
            Free consultation
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
