import React, { useState } from "react";
import "../Styles/Contact.css";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Send,
  Calendar,
  Building2,
  Video,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const consultationTypes = [
  {
    id: "video-production",
    label: "Video Production",
    icon: Video,
    description: "Corporate videos, commercials, and branded content",
  },
  {
    id: "content-strategy",
    label: "Content Strategy",
    icon: Target,
    description: "Strategic planning for video content",
  },
  {
    id: "marketing",
    label: "Marketing Campaigns",
    icon: TrendingUp,
    description: "Video marketing and promotional campaigns",
  },
  {
    id: "creative",
    label: "Creative Direction",
    icon: Sparkles,
    description: "Concept development and creative consulting",
  },
];

const Contact = () => {
  const [selectedType, setSelectedType] = useState("video-production");
  const [activeTab, setActiveTab] = useState("consultation");

  const [consultationForm, setConsultationForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    preferredDate: "",
    projectDetails: "",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [consultationLoading, setConsultationLoading] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  const [consultationSuccess, setConsultationSuccess] = useState("");
  const [consultationError, setConsultationError] = useState("");

  const [contactSuccess, setContactSuccess] = useState("");
  const [contactError, setContactError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleConsultationChange = (e) => {
    const { name, value } = e.target;
    setConsultationForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();

    setConsultationLoading(true);
    setConsultationSuccess("");
    setConsultationError("");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "consultation",
          consultationType: selectedType,
          name: consultationForm.name,
          email: consultationForm.email,
          company: consultationForm.company,
          phone: consultationForm.phone,
          preferredDate: consultationForm.preferredDate,
          projectDetails: consultationForm.projectDetails,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit consultation form.");
      }

      setConsultationSuccess("Consultation request submitted successfully.");
      setConsultationForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        preferredDate: "",
        projectDetails: "",
      });
      setSelectedType("video-production");
    } catch (error) {
      setConsultationError(error.message || "Something went wrong.");
    } finally {
      setConsultationLoading(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    setContactLoading(true);
    setContactSuccess("");
    setContactError("");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setContactSuccess("Message sent successfully.");
      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setContactError(error.message || "Something went wrong.");
    } finally {
      setContactLoading(false);
    }
  };

  return (
    <div className="min-vh-100 bg-contact" style={{ marginTop: "110px" }}>
      <main className="pt-5 pb-5" style={{ marginTop: "100px" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">Get In Touch</h1>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "620px" }}
            >
              Whether you want to book a consultation or send us a message,
              we're here to help.
            </p>
          </div>

          <ul
            className="nav nav-pills justify-content-center align-items-center mb-4 mx-auto rounded-4"
            style={{ maxWidth: "500px" }}
          >
            <li>
              <button
                type="button"
                className={`btn-light-1 px-4 ${
                  activeTab === "consultation" ? "active" : ""
                }`}
                onClick={() => setActiveTab("consultation")}
              >
                Book Consultation
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`btn-light-2 px-4 ${
                  activeTab === "contact" ? "active" : ""
                }`}
                onClick={() => setActiveTab("contact")}
              >
                Contact Us
              </button>
            </li>
          </ul>

          {activeTab === "consultation" && (
            <>
              <div className="text-center mb-5">
                <span className="badge rounded-pill bg-light text-secondary border mb-3">
                  100% Free Consultation
                </span>
              </div>

              <div className="row g-3 mb-5">
                {consultationTypes.map((type) => {
                  const Icon = type.icon;
                  const isActive = selectedType === type.id;

                  return (
                    <div
                      key={type.id}
                      className="col-12 col-md-6 col-lg-3"
                      onClick={() => setSelectedType(type.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className={`card h-100 text-center border-2 ${
                          isActive
                            ? "border-primary bg-primary bg-opacity-10"
                            : "border-light"
                        }`}
                      >
                        <div className="card-body p-4">
                          <Icon
                            size={28}
                            className={`mb-3 ${
                              isActive ? "text-primary" : "text-muted"
                            }`}
                          />
                          <h4 className="h6 fw-semibold mb-2">{type.label}</h4>
                          <p className="text-muted small mb-0">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="card border-2 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h3 className="h4 fw-semibold mb-4">
                        Book Your Free Consultation
                      </h3>

                      {consultationSuccess && (
                        <div className="alert alert-success" role="alert">
                          {consultationSuccess}
                        </div>
                      )}

                      {consultationError && (
                        <div className="alert alert-danger" role="alert">
                          {consultationError}
                        </div>
                      )}

                      <form onSubmit={handleConsultationSubmit}>
                        <div className="mb-3">
                          <label htmlFor="cons-name" className="form-label">
                            Full Name
                          </label>
                          <div className="position-relative">
                            <User
                              className="position-absolute"
                              style={{ left: 10, top: 10 }}
                              size={18}
                            />
                            <input
                              id="cons-name"
                              name="name"
                              type="text"
                              className="form-control ps-5"
                              placeholder="John Doe"
                              value={consultationForm.name}
                              onChange={handleConsultationChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="cons-email" className="form-label">
                            Email Address
                          </label>
                          <div className="position-relative">
                            <Mail
                              className="position-absolute"
                              style={{ left: 10, top: 10 }}
                              size={18}
                            />
                            <input
                              id="cons-email"
                              name="email"
                              type="email"
                              className="form-control ps-5"
                              placeholder="john@company.com"
                              value={consultationForm.email}
                              onChange={handleConsultationChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="company" className="form-label">
                            Company Name
                          </label>
                          <div className="position-relative">
                            <Building2
                              className="position-absolute"
                              style={{ left: 10, top: 10 }}
                              size={18}
                            />
                            <input
                              id="company"
                              name="company"
                              type="text"
                              className="form-control ps-5"
                              placeholder="Your Company"
                              value={consultationForm.company}
                              onChange={handleConsultationChange}
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                            Phone Number (Optional)
                          </label>
                          <div className="position-relative">
                            <Phone
                              className="position-absolute"
                              style={{ left: 10, top: 10 }}
                              size={18}
                            />
                            <input
                              id="phone"
                              name="phone"
                              type="text"
                              className="form-control ps-5"
                              placeholder="+1 (555) 000-0000"
                              value={consultationForm.phone}
                              onChange={handleConsultationChange}
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="preferred-date"
                            className="form-label"
                          >
                            Preferred Date &amp; Time
                          </label>
                          <div className="position-relative">
                            <Calendar
                              className="position-absolute"
                              style={{ left: 10, top: 10 }}
                              size={18}
                            />
                            <input
                              id="preferred-date"
                              name="preferredDate"
                              type="datetime-local"
                              className="form-control ps-5"
                              value={consultationForm.preferredDate}
                              onChange={handleConsultationChange}
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="cons-message" className="form-label">
                            Tell us about your project
                          </label>
                          <textarea
                            id="cons-message"
                            name="projectDetails"
                            className="form-control"
                            rows={5}
                            placeholder="Share your vision, goals, and any specific requirements..."
                            value={consultationForm.projectDetails}
                            onChange={handleConsultationChange}
                            required
                          />
                        </div>

                        <div className="bg-light border rounded-3 p-3 mb-3">
                          <p className="small mb-0 text-muted">
                            <strong>Selected:</strong>{" "}
                            {
                              consultationTypes.find(
                                (t) => t.id === selectedType
                              )?.label
                            }
                          </p>
                        </div>

                        <button
                          type="submit"
                          disabled={consultationLoading}
                          className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2"
                        >
                          {consultationLoading
                            ? "Submitting..."
                            : "Book Free Consultation"}
                          <Send size={16} />
                        </button>

                        <p className="small text-muted text-center mt-3 mb-0">
                          We'll confirm your consultation within 24 hours.
                        </p>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <h3 className="h4 fw-bold mb-3">What to Expect</h3>
                  <div className="d-flex flex-column gap-3">
                    <div className="card shadow-sm">
                      <div className="card-body d-flex gap-3">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 flex-shrink-0"
                          style={{ width: 48, height: 48 }}
                        >
                          <span className="fw-bold text-primary fs-5">1</span>
                        </div>
                        <div>
                          <h4 className="h6 fw-semibold mb-1">
                            Discovery Call
                          </h4>
                          <p className="small text-muted mb-0">
                            30-minute video call to understand your needs and
                            goals.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card shadow-sm">
                      <div className="card-body d-flex gap-3">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 flex-shrink-0"
                          style={{ width: 48, height: 48 }}
                        >
                          <span className="fw-bold text-primary fs-5">2</span>
                        </div>
                        <div>
                          <h4 className="h6 fw-semibold mb-1">
                            Strategy Session
                          </h4>
                          <p className="small text-muted mb-0">
                            Tailored recommendations and initial concept
                            discussion.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="card shadow-sm">
                      <div className="card-body d-flex gap-3">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 flex-shrink-0"
                          style={{ width: 48, height: 48 }}
                        >
                          <span className="fw-bold text-primary fs-5">3</span>
                        </div>
                        <div>
                          <h4 className="h6 fw-semibold mb-1">
                            Proposal &amp; Next Steps
                          </h4>
                          <p className="small text-muted mb-0">
                            Detailed proposal with timeline and investment
                            options.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "contact" && (
            <div className="row g-4 mt-4">
              <div className="col-lg-6">
                <h2 className="h4 fw-bold mb-2">Send us a message</h2>
                <p className="text-muted mb-3">
                  We'll get back to you within 24 hours.
                </p>

                <div className="card border-2 shadow-sm">
                  <div className="card-body p-4">
                    {contactSuccess && (
                      <div className="alert alert-success" role="alert">
                        {contactSuccess}
                      </div>
                    )}

                    {contactError && (
                      <div className="alert alert-danger" role="alert">
                        {contactError}
                      </div>
                    )}

                    <form onSubmit={handleContactSubmit}>
                      <div className="mb-3">
                        <label htmlFor="contact-name" className="form-label">
                          Name
                        </label>
                        <div className="position-relative">
                          <User
                            className="position-absolute"
                            style={{ left: 10, top: 10 }}
                            size={18}
                          />
                          <input
                            id="contact-name"
                            name="name"
                            className="form-control ps-5"
                            placeholder="Your name"
                            value={contactForm.name}
                            onChange={handleContactChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="contact-email" className="form-label">
                          Email
                        </label>
                        <div className="position-relative">
                          <Mail
                            className="position-absolute"
                            style={{ left: 10, top: 10 }}
                            size={18}
                          />
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            className="form-control ps-5"
                            placeholder="your@email.com"
                            value={contactForm.email}
                            onChange={handleContactChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label">
                          Subject
                        </label>
                        <div className="position-relative">
                          <MessageSquare
                            className="position-absolute"
                            style={{ left: 10, top: 10 }}
                            size={18}
                          />
                          <input
                            id="subject"
                            name="subject"
                            className="form-control ps-5"
                            placeholder="How can we help?"
                            value={contactForm.subject}
                            onChange={handleContactChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          rows={5}
                          placeholder="Tell us more about your project..."
                          value={contactForm.message}
                          onChange={handleContactChange}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={contactLoading}
                        className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                      >
                        <Send size={16} />
                        {contactLoading ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <h2 className="h4 fw-bold mb-2">Get in touch</h2>
                <p className="text-muted mb-3">
                  Find the best way to reach us.
                </p>

                <div className="card border-2 shadow-sm mb-3">
                  <div className="card-body">
                    <div className="d-flex mb-3">
                      <div className="me-3 p-3 rounded-3 bg-primary bg-opacity-10 d-flex align-items-center justify-content-center">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="h6 fw-semibold mb-1">Email</h3>
                        <p className="text-muted mb-0">info@bitiko.com</p>
                        <p className="text-muted mb-0">support@bitiko.com</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="me-3 p-3 rounded-3 bg-primary bg-opacity-10 d-flex align-items-center justify-content-center">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="h6 fw-semibold mb-1">Phone</h3>
                        <p className="text-muted mb-0">+1 (555) 123-4567</p>
                        <p className="text-muted mb-0">+1 (555) 987-6543</p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <div className="me-3 p-3 rounded-3 bg-primary bg-opacity-10 d-flex align-items-center justify-content-center">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="h6 fw-semibold mb-1">Office</h3>
                        <p className="text-muted mb-0">123 Video Street</p>
                        <p className="text-muted mb-0">
                          San Francisco, CA 94102
                        </p>
                      </div>
                    </div>

                    <div className="d-flex">
                      <div className="me-3 p-3 rounded-3 bg-primary bg-opacity-10 d-flex align-items-center justify-content-center">
                        <Clock className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="h6 fw-semibold mb-1">
                          Business Hours
                        </h3>
                        <p className="text-muted mb-0">
                          Monday - Friday: 9am - 6pm
                        </p>
                        <p className="text-muted mb-0">
                          Weekend: By appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card border-primary border-opacity-25 bg-primary bg-opacity-10">
                  <div className="card-body">
                    <h3 className="h6 fw-semibold mb-1">Quick Response</h3>
                    <p className="small text-muted mb-0">
                      We typically respond within 24 hours during business days.
                      For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Contact;