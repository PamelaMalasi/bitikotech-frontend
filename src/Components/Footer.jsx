import React from "react";
import { Button } from "react-bootstrap";


const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row mb-4">
                    {/* Logo & About */}
                    <div className="col-md-2 mb-4 mb-md-0">
                        <h2 className="fw-bold mb-3">BusinessPro</h2>
                        <p>
                            Helping businesses scale with proven marketing strategies and professional web solutions.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    {/* Services */}

                    <div className="col-md-3 offset-md-1 mb-4 mb-md-0">
                        <h5 className="fw-semibold mb-3">Services</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-reset text-decoration-none">Digital Marketing</a></li>
                            <li><a href="#" className="text-reset text-decoration-none">Web Development</a></li>
                            <li><a href="#" className="text-reset text-decoration-none">SEO Optimization</a></li>
                            <li><a href="#" className="text-reset text-decoration-none">Analytics</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5 className="fw-semibold mb-3">Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-reset text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-reset text-decoration-none">Our Team</a></li>
                            <li><a href="#" className="text-reset text-decoration-none">Careers</a></li>
                            <li><a href="#" className="text-reset text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                        <div className="col-md-3">
            
                            <h4 className="fw-bold mb-2">Newsletter</h4>
                            <p className="mb-1">
                                Stay updated with our latest tips and industry insights.
                            </p>

                            <form className="d-grid gap-3 mb-2">
                                <div>
                                    <label htmlFor="newsletterEmail" className="form-label visually-hidden">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="newsletterEmail"
                                        className="form-control bg-dark text-light border-secondary"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Subscribe
                                </button>
                            </form>
                        </div>


          


                    <div className="border-top pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <p className="mb-2 mb-md-0 small">
                            © 2024 BusinessPro. All rights reserved.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="small text-decoration-none">Privacy Policy</a>
                            <a href="#" className="small text-decoration-none">Terms of Service</a>
                            <a href="#" className="small text-decoration-none">Cookie Policy</a>
                        </div>
                    </div>
                </div>
                 </div>
        </footer>
    );
};

export default Footer;
