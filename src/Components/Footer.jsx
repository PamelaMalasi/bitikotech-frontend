import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row mb-4">
          {/* Logo & About */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">Bitiko</h2>
            <p className="small text-secondary">
              Helping businesses scale with proven marketing strategies and professional web solutions.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-secondary" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" className="text-secondary" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="text-secondary" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Services */}
          <div className="col-md-3 offset-md-1 mb-4 mb-md-0">
            <h5 className="fw-semibold mb-3">Services</h5>
            <ul className="list-unstyled small">
              <li className="mb-1"><Link to="/services" className="text-secondary text-decoration-none">Digital Marketing</Link></li>
              <li className="mb-1"><Link to="/services" className="text-secondary text-decoration-none">Web Development</Link></li>
              <li className="mb-1"><Link to="/services" className="text-secondary text-decoration-none">SEO Optimization</Link></li>
              <li className="mb-1"><Link to="/services" className="text-secondary text-decoration-none">Analytics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="fw-semibold mb-3">Company</h5>
            <ul className="list-unstyled small">
              <li className="mb-1"><Link to="/about" className="text-secondary text-decoration-none">About Us</Link></li>
              <li className="mb-1"><Link to="/projects" className="text-secondary text-decoration-none">Our Projects</Link></li>
              <li className="mb-1"><Link to="/blog" className="text-secondary text-decoration-none">Blog</Link></li>
              <li className="mb-1"><Link to="/contact" className="text-secondary text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h5 className="fw-semibold mb-2">Newsletter</h5>
            <p className="small text-secondary mb-3">
              Stay updated with our latest tips and industry insights.
            </p>
            <form className="d-grid gap-2">
              <input
                type="email"
                className="form-control form-control-sm bg-dark text-light border-secondary"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn btn-blue btn-sm w-100 rounded-3">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-secondary pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 small text-secondary">
            © 2026 Bitiko. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            <a href="#" className="small text-secondary text-decoration-none">Privacy Policy</a>
            <a href="#" className="small text-secondary text-decoration-none">Terms of Service</a>
            <a href="#" className="small text-secondary text-decoration-none">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
