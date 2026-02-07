import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/About.css";
import heroImage from "../images/bitiko-about-1.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import {
  Video,
  Target,
  Users,
  Zap,
  Award,
  TrendingUp,
  Building2,
  Globe2,
  Sparkles,
  CheckCircle2,
  Quote,
  ArrowRight,
} from "lucide-react";

const About = () => {
const teamMembers = [
    { name: "Sarah Chen", role: "CEO & Founder", description: "15+ years in digital marketing and video production" },
    { name: "Marcus Johnson", role: "Creative Director", description: "Award-winning filmmaker and brand strategist" },
    { name: "Emily Rodriguez", role: "Head of Strategy", description: "Data-driven marketing expert with Fortune 500 experience" },
    { name: "David Park", role: "Lead Producer", description: "Specializes in corporate video and animation" },
  ];

  const values = [
    { icon: Video,  title: "Innovation First",  description: "We stay ahead of video trends and technology to deliver cutting-edge solutions" },
    { icon: Target, title: "Results Driven",    description: "Every video we create is designed with measurable business outcomes in mind" },
    { icon: Users,  title: "Client Partnership",description: "We work alongside you as an extension of your team, not just a vendor" },
    { icon: Zap,    title: "Speed & Quality",   description: "Fast turnaround without compromising on production excellence" },
  ];


  return (
    <div className="min-vh-100 bg-white">

      {/* 🌟 Hero Section */}
      <section className="min-vh-100 d-flex align-items-center pt-5 pb-4 mt-5">
        <div className="container mt-5">
          <div className="row align-items-center g-5">
            {/* Left content */}
            <div className="col-12 col-lg-6">
              <p className="text-uppercase text-muted small letter-spacing-3 mb-2">
                About Us
              </p>
              <h1 className="display-5 fw-bold lh-1">
                Helping businesses succeed through the{" "}
                <span className="position-relative d-inline-block">
                  <span className="position-relative" style={{ zIndex: 1 }}>
                    power of video.
                  </span>
                  <span
                    className="position-absolute start-1 end-1"
                    style={{
                      bottom: "0.35em",
                      height: "0.6em",
                      background:
                        "linear-gradient(90deg, rgba(147,51,234,.25), rgba(59,130,246,.25), rgba(34,211,238,.25))",
                      zIndex: 0,
                    }}
                  />
                </span>
              </h1>

              <p className="lead text-muted mt-4" style={{ maxWidth: "44rem" }}>
                Video is the future of business in this digital-focused world. Bitiko uses
                video to change the way companies connect and communicate. We help
                organizations of all sizes humanize their communications and personalize
                their customer experiences.
              </p>

              <Link
                to="/consultation"
                className="btn btn-blue px-2 py-2 shadow-sm mt-3 rounded-5"
              >
                Sign Up for Free
              </Link>
            </div>

            {/* Right visual */}
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <div className="position-relative">
                {/* Glow behind image */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-circle"
                  style={{
                    filter: "blur(70px)",
                    background:
                      "linear-gradient(135deg, rgba(147,51,234,.2), rgba(59,130,246,.2), rgba(34,211,238,.2))",
                  }}
                />
                <img
                  src={heroImage}
                  alt="Business professional using video communication apps"
                  className="w-100 h-100 position-relative"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .letter-spacing-3 { letter-spacing: .3em; }
        `}</style>
      </section>

{/* Mission Section */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: 1200 }}>
          <div className="row align-items-center g-5">
            <div className="col-12 col-md-6">
              <h2 className="h1 fw-bold mb-3">Our Mission</h2>
              <p className="text-secondary mb-3">
                To empower businesses of all sizes to harness the storytelling power of video,
                creating authentic connections that drive growth and success.
              </p>
              <p className="text-secondary">
                We've helped over 500+ companies transform their marketing strategies through
                compelling video content that resonates with audiences and delivers real results.
              </p>
            </div>

            {/* Stats */}
            <div className="col-12 col-md-6">
              <div className="row g-3" >
                {[
                  { kpi: "500+", label: "Happy Clients" },
                  { kpi: "2000+", label: "Videos Created" },
                  { kpi: "95%", label: "Client Retention" },
                  { kpi: "50M+", label: "Total Views" },
                ].map((item, i) => (
                  <div className="col-6" key={i}>
                    <div className="card text-center h-100 border-0 shadow-sm  rounded-4">
                      <div className="card-body rounded-4"  style={{ boxShadow: '0 14px 28px rgba(69, 166, 226, 0.17)', overflow: 'hidden' }}>
                        <div className="fs-1 fw-bold btn-blue-text mb-1">{item.kpi}</div>
                        <div className="text-muted small">{item.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Company History Section
      <section className="py-5" style={{ background: "rgba(13,110,253,0.06)" }}>
        <div className="container" style={{ maxWidth: 1200 }}>
          <div className="text-center mb-4">
            <h2 className="h1 fw-bold mb-2">Our Journey</h2>
            <p className="text-secondary">From startup to industry leader</p>
          </div>

          <div className="mx-auto" style={{ maxWidth: 800 }}>
            {/* 2018 }
            <div className="d-flex gap-3 mb-4">
              <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle"
                   style={{ width: 96, height: 96, background: "rgba(13,110,253,0.1)" }}>
                <span className="fw-bold text-primary fs-4">2018</span>
              </div>
              <div className="pt-2">
                <h3 className="h4 fw-bold mb-2">The Beginning</h3>
                <p className="text-secondary mb-0">
                  Founded by Sarah Chen with a vision to democratize professional video production.
                  Started with just 3 team members in a small studio, focusing on helping local businesses tell their stories.
                </p>
              </div>
            </div>
            {/* 2020 }
            <div className="d-flex gap-3 mb-4">
              <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle"
                   style={{ width: 96, height: 96, background: "rgba(13,110,253,0.1)" }}>
                <span className="fw-bold text-primary fs-4">2020</span>
              </div>
              <div className="pt-2">
                <h3 className="h4 fw-bold mb-2">Rapid Growth</h3>
                <p className="text-secondary mb-0">
                  Expanded to serve Fortune 500 companies and reached 100+ clients milestone.
                  Launched our innovative AI-powered video analytics platform that revolutionized content optimization.
                </p>
              </div>
            </div>
            {/* 2023 }
            <div className="d-flex gap-3 mb-4">
              <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle"
                   style={{ width: 96, height: 96, background: "rgba(13,110,253,0.1)" }}>
                <span className="fw-bold text-primary fs-4">2023</span>
              </div>
              <div className="pt-2">
                <h3 className="h4 fw-bold mb-2">Industry Recognition</h3>
                <p className="text-secondary mb-0">
                  Won Best Video Marketing Agency Award and reached 500+ satisfied clients.
                  Expanded team to 25+ professionals and opened offices in three major cities.
                </p>
              </div>
            </div>
            {/* Today & Beyond }
            <div className="d-flex gap-3">
              <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle"
                   style={{ width: 96, height: 96, background: "linear-gradient(135deg, rgba(13,110,253,.15), rgba(111,66,193,.15))" }}>
                <Sparkles className="text-primary" size={28} />
              </div>
              <div className="pt-2">
                <h3 className="h4 fw-bold mb-2">Today & Beyond</h3>
                <p className="text-secondary mb-0">
                  Leading the charge in next-generation video marketing with AI integration, interactive video experiences,
                  and immersive storytelling. Committed to helping 10,000+ businesses transform their communication by 2026.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container py-5 rounded-4" style={{ background: "rgba(13,110,253,0.08)" }}>
        <div className="container" style={{ maxWidth: 1200 }}>
          <div className="text-center mb-4">
            <h2 className="h1 fw-bold mb-2">Our Values</h2>
            <p className="text-secondary">The principles that guide everything we do</p>
          </div>

          <div className="row g-3">
            {values.map((value, i) => (
              <div className="col-12 col-md-6 col-lg-3" key={i}>
                <div className="card text-center h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body">
                    <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                         style={{ width: 48, height: 48, background: "rgba(13,110,253,0.1)" }}>
                      <value.icon className="text-primary" size={22} />
                    </div>
                    <h3 className="h5">{value.title}</h3>
                    <p className="text-secondary small mb-0">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Section }
      <section className="py-5">
        <div className="container" style={{ maxWidth: 1200 }}>
          <div className="text-center mb-4">
            <h2 className="h1 fw-bold mb-2">Meet Our Team</h2>
            <p className="text-secondary">The creative minds behind your success stories</p>
          </div>

          <div className="row g-4">
            {teamMembers.map((m, i) => (
              <div className="col-12 col-md-6 col-lg-3" key={i}>
                <div className="card h-100 border-0 shadow-sm text-center">
                  <div className="card-body">
                    <div className="mx-auto mb-3 rounded-circle"
                         style={{
                           width: 96,
                           height: 96,
                           background: "linear-gradient(135deg, rgba(13,110,253,.2), rgba(111,66,193,.2))",
                         }} />
                    <h3 className="h5 mb-1">{m.name}</h3>
                    <div className="text-primary fw-semibold small mb-2">{m.role}</div>
                    <p className="text-secondary small mb-0">{m.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* Industry Expertise Section */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: 1200 }}>
          <div className="text-center mb-4">
            <h2 className="h1 fw-bold mb-2">Industry Expertise</h2>
            <p className="text-secondary">Specialized video solutions across multiple sectors</p>
          </div>

          <div className="row g-4">
            {[
              { icon: Building2, title: "Technology & SaaS", desc: "Product demos, explainer videos, and onboarding content that simplify complex tech solutions." },
              { icon: Globe2,    title: "E-commerce & Retail", desc: "Product showcases, brand stories, and social commerce videos that drive conversions." },
              { icon: Users,     title: "Healthcare", desc: "Patient education, medical device demos, and healthcare marketing that builds trust." },
              { icon: Target,    title: "Finance & Insurance", desc: "Compliance-friendly educational content and customer testimonials that establish credibility." },
              { icon: Sparkles,  title: "Education & Training", desc: "E-learning modules, course promos, and training videos that engage and educate effectively." },
              { icon: Video,     title: "Real Estate", desc: "Property tours, neighborhood guides, and agent profiles that sell listings faster." },
            ].map((item, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body rounded-4" style={{ boxShadow: '0 14px 28px rgba(69, 166, 226, 0.17)', overflow: 'hidden' }}>
                    <item.icon className="text-primary mb-3" size={42} />
                    <h3 className="h5">{item.title}</h3>
                    <p className="text-secondary small mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container py-5 rounded-4" style={{ background: "linear-gradient(180deg, rgba(13,110,253,0.08) 0%, rgba(255,255,255,1) 100%)" }}>
        <div className="container" style={{ maxWidth: 1200 }}>
          <div className="text-center mb-4">
            <h2 className="h1 fw-bold mb-2">Why Choose Bitiko?</h2>
            <p className="text-secondary">We're more than just a video production company</p>
          </div>

          <div className="row g-4">
            {[
              { icon: Award,       title: "Award-Winning Work", desc: "Our videos have won multiple industry awards and generated millions in ROI for our clients." },
              { icon: TrendingUp,  title: "Proven Results",     desc: "On average, our clients see 3x increase in engagement and 2x boost in conversion rates." },
              { icon: Zap,         title: "Fast Turnaround",    desc: "From concept to delivery in as little as 2 weeks, without compromising on quality." },
            ].map((item, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body text-center">
                    <item.icon className="text-primary mb-3" size={48} />
                    <h3 className="h5">{item.title}</h3>
                    <p className="text-secondary mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* {/* Client Testimonials Section }
      <section className="py-5">
        <div className="container" style={{ maxWidth: 1200 }}>
          <div className="text-center mb-4">
            <h2 className="h1 fw-bold mb-2">What Our Clients Say</h2>
            <p className="text-secondary">Real stories from businesses we've helped grow</p>
          </div>

          <div className="row g-4">
            {[
              {
                quote: `“Bitiko transformed our product launch with a stunning video campaign. We saw a 300% increase in engagement and our best quarter ever.”`,
                name: "Jennifer Martinez",
                title: "CMO, TechFlow Solutions",
              },
              {
                quote: `“The team at Bitiko understood our vision perfectly. The video they created captured our brand essence and resonated with our audience immediately.”`,
                name: "Robert Chen",
                title: "Founder, GreenEarth Co.",
              },
              {
                quote: `“Professional, creative, and always on time. Bitiko has become our go-to partner for all video marketing needs. Highly recommended!”`,
                name: "Amanda Foster",
                title: "VP Marketing, HealthPlus",
              },
            ].map((t, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <Quote className="text-primary opacity-50 mb-3" size={32} />
                    <p className="fst-italic">{t.quote}</p>
                    <div className="d-flex align-items-center gap-3 mt-3">
                      <div className="rounded-circle"
                           style={{
                             width: 48,
                             height: 48,
                             background: "linear-gradient(135deg, rgba(13,110,253,.25), rgba(111,66,193,.25))",
                           }} />
                      <div>
                        <div className="fw-semibold">{t.name}</div>
                        <div className="text-secondary small">{t.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* Awards & Certifications */}
      {/* <section className="py-5" style={{ background: "rgba(13,110,253,0.06)" }}>
        <div className="container" style={{ maxWidth: 1200 }}>
          <div className="text-center mb-4">
            <h2 className="h1 fw-bold mb-2">Awards & Recognition</h2>
            <p className="text-secondary">Honored to be recognized by industry leaders</p>
          </div>

          <div className="row g-4">
            {[
              { icon: Award,         title: "Best Video Marketing Agency", sub: "Marketing Excellence Awards 2023" },
              { icon: Award,         title: "Top 10 Creative Studios",     sub: "Creative Business Review 2023" },
              { icon: CheckCircle2,  title: "Google Partner Certified",    sub: "Video Advertising Specialist" },
              { icon: CheckCircle2,  title: "HubSpot Partner",              sub: "Certified Video Marketing" },
            ].map((a, i) => (
              <div className="col-12 col-md-6 col-lg-3" key={i}>
                <div className="card h-100 border-0 shadow-sm text-center p-3">
                  <div className="card-body">
                    <a.icon className="text-primary mb-3" size={56} />
                    <div className="fw-bold mb-1">{a.title}</div>
                    <div className="text-secondary small">{a.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* CTA Section */}
      <section className="container py-5 rounded-4 mb-5" style={{ background: "linear-gradient(90deg, rgba(13,110,253,0.08), rgba(111,66,193,0.08), rgba(13,110,253,0.08))" }}>
        <div className="container text-center" style={{ maxWidth: 900 }}>
          <h2 className="h1 fw-bold mb-3">Ready to Tell Your Story?</h2>
          <p className="text-secondary mb-4">
            Let's create something amazing together. Schedule a free consultation to discuss your video marketing goals.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/consultation" className="btn btn-blue btn-lg d-flex align-items-center justify-content-center gap-2 rounded-4">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/projects" className="btn btn-outline-secondary btn-lg rounded-4">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* tiny helpers */}
      <style>{`
        .text-gradient {
          background: linear-gradient(90deg, #0d6efd 0%, #6f42c1 50%, #0d6efd 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default About;