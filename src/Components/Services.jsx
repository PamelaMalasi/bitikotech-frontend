import { Video, Target, TrendingUp, Palette, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import '../Styles/Services.css';
import img1 from "../images/bitiko-robot-new.png";
import vid1 from "../images/bitiko-services-marketing.mp4";
import vid2 from "../images/bitiko-services-web.mp4";
import vid3 from "../images/bitiko-services-ui:ux.mp4";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video production from concept to final cut",
      features: [
        "Commercial & Corporate Videos",
        "Social Media Content",
        "Event Coverage",
        "Documentary Production",
        "Post-Production & Editing"
      ],
      badge: "Popular"
    },
    {
      icon: Target,
      title: "Content Strategy",
      description: "Strategic content planning and audience engagement",
      features: [
        "Content Audits",
        "Editorial Calendar Planning",
        "Brand Voice Development",
        "Multi-Platform Strategy",
        "Performance Analytics"
      ]
    },
    {
      icon: TrendingUp,
      title: "Marketing Campaigns",
      description: "Data-driven marketing campaigns that deliver results",
      features: [
        "Campaign Strategy & Planning",
        "Social Media Marketing",
        "Digital Advertising",
        "Influencer Partnerships",
        "ROI Tracking & Optimization"
      ],
      badge: "Results Driven"
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Innovative creative solutions for your brand",
      features: [
        "Brand Identity Development",
        "Visual Design Systems",
        "Creative Concept Development",
        "Art Direction",
        "Brand Guidelines"
      ]
    }

  ];
  const media = [
    { type: "video", src: vid1, poster: img1 }, // index 0
    { type: "video", src: vid2, poster: img1 },                // index 1
    { type: "video", src: vid3, poster: img1 }, // index 2
    { type: "video", src: vid1, poster: img1 }, // index 2
  ];

  return (
    <div className="min-vh-100 position-relative overflow-hidden bg-light">
      {/* Background shapes (optional, needs custom CSS or inline styles) */}
      {/* <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: "800px",
          background:
            "linear-gradient(to bottom right, rgba(34,211,238,0.2), rgba(59,130,246,0.2), rgba(147,51,234,0.2))",
          borderBottomLeftRadius: "50%",
          borderBottomRightRadius: "50%",
          filter: "blur(30px)",
          zIndex: 0
        }}
      />
      <div
        className="position-absolute"
        style={{
          top: "10rem",
          right: 0,
          width: "600px",
          height: "600px",
          background: "linear-gradient(to bottom left, rgba(147,51,234,0.3), rgba(236,72,153,0.2))",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0
        }}
      />
      <div
        className="position-absolute"
        style={{
          bottom: 0,
          left: 0,
          width: "800px",
          height: "400px",
          background: "linear-gradient(to top right, rgba(34,211,238,0.2), rgba(59,130,246,0.2))",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0
        }}
      /> */}


      <main className="pt-5 pb-5 position-relative" style={{ zIndex: 1, marginTop: '55px' }}>

        <div className="bg-img12 bg-img1 px-3 px-md-1 px-lg-1">
          <div className="container">
            <div className="row g-5 align-items-center mb-5" style={{ marginTop: '-100px' }}>
              <div className="col-md-6">
                <span className="badge rounded-pill border text-body-secondary bg-white bg-opacity-10 backdrop-blur-sm d-inline-flex align-items-center mb-3">
                  <Sparkles className="me-1" size={14} />
                  Our Services
                </span>
                <h1 className="fw-bold display-4 mb-3">
                  <span className="d-block text-dark">Transform Your</span>
                  <span
                    className="d-block"
                    style={{
                      background: "linear-gradient(to right, #22d3ee, #3b82f6, #9333ea)",
                      WebkitBackgroundClip: "text",
                      color: "transparent"
                    }}
                  >
                    Creative Vision
                  </span>
                </h1>
                <p className="text-muted fs-5 mb-0">
                  We blend strategy with creativity to deliver extraordinary experiences that captivate your audience and
                  drive real results.
                </p>
              </div>
              <div className="col-md-6">
                <div
                  className="position-relative mx-auto"
                  style={{ maxWidth: "340px", aspectRatio: "1/1" }}
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background:
                        "linear-gradient(to bottom right, rgba(34,211,238,0.2), rgba(147,51,234,0.2))",
                      borderRadius: "40% 60% 70% 30%",
                      filter: "blur(30px)"
                    }}
                  />
                  <div
                    className="position-relative d-flex align-items-center justify-content-center "
                  // style={{
                  //   width: "100%",
                  //   height: "100%",
                  //   borderRadius: "40% 60% 70% 30%",
                  //   backdropFilter: "blur(10px)"
                  // }}
                  >
                    <img src={img1} alt="marketing" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-3 px-md-4 px-lg-5">
          {/* Hero Section - Split Layout */}





          {/* Services - Flowing Layout */}
          <div className="mb-5">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="row g-5 align-items-center mb-5"
                >
                  {/* Text / Content side */}
                  <div
                    className={`col-md-6 ${isEven ? "" : "order-md-2"}`}
                  >
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="position-relative">
                        <div
                          className="position-absolute w-100 h-100"
                          style={{
                            top: 0,
                            left: 0,
                            background:
                              "linear-gradient(to bottom right, rgba(34,211,238,0.3), rgba(147,51,234,0.3))",
                            borderRadius: "1rem",
                            filter: "blur(12px)"
                          }}
                        />
                        <div
                          className="position-relative p-3 bg-white bg-opacity-10"
                          style={{
                            borderRadius: "1rem",
                            backdropFilter: "blur(10px)"
                          }}
                        >
                          <Icon className="text-primary" size={40} />
                        </div>
                      </div>
                      {service.badge && (
                        <span className="badge rounded-pill text-white border-0"
                          style={{
                            background: "linear-gradient(to right, #22d3ee, #3b82f6)"
                          }}
                        >
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <div className="mb-3">
                      <h2
                        className="fw-bold mb-2"
                        style={{
                          fontSize: "2rem",
                          background: "linear-gradient(to right, #111827, rgba(17,24,39,0.6))",
                          WebkitBackgroundClip: "text",
                          color: "transparent"
                        }}
                      >
                        {service.title}
                      </h2>
                      <div
                        className="mb-3"
                        style={{
                          width: "80px",
                          height: "4px",
                          background: "linear-gradient(to right, #22d3ee, #3b82f6, #9333ea)",
                          borderRadius: "999px"
                        }}
                      />
                      <p className="text-muted fs-6 mb-0">
                        {service.description}
                      </p>
                    </div>

                    <ul className="list-unstyled mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="d-flex align-items-start mb-2">
                          <div className="position-relative me-2 mt-1">
                            <div
                              className="position-absolute w-100 h-100"
                              style={{
                                top: 0,
                                left: 0,
                                background:
                                  "linear-gradient(to bottom right, rgba(34,211,238,0.2), rgba(147,51,234,0.2))",
                                borderRadius: "999px",
                                filter: "blur(6px)"
                              }}
                            />
                            <CheckCircle className="position-relative text-primary" size={18} />
                          </div>
                          <span className="text-muted">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="btn btn-lg text-white border-0"
                      style={{
                        background: "linear-gradient(to right, #22d3ee, #3b82f6, #9333ea)",
                        boxShadow: "0 0 30px rgba(96,165,250,0.5)"
                      }}
                    >
                      Get Started
                      <ArrowRight className="ms-2" size={20} />
                    </Link>
                  </div>

                  {/* Visual side */}
                  <div className={`col-md-6 ${isEven ? "" : "order-md-1"}`}>
                    <div className="position-relative mx-auto" style={{ maxWidth: "340px", aspectRatio: "1 / 1" }}>
                      {/* soft glow */}
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                          background:
                            index === 0
                              ? "linear-gradient(to bottom right, rgba(34,211,238,0.2), rgba(59,130,246,0.2))"
                              : index === 1
                                ? "linear-gradient(to bottom right, rgba(59,130,246,0.2), rgba(147,51,234,0.2))"
                                : index === 2
                                  ? "linear-gradient(to bottom right, rgba(147,51,234,0.2), rgba(236,72,153,0.2))"
                                  : "linear-gradient(to bottom right, rgba(236,72,153,0.2), rgba(34,211,238,0.2))",
                          borderRadius: isEven ? "60% 40% 40% 60%" : "40% 60% 60% 40%",
                          filter: "blur(50px)"
                        }}
                      />

                      {/* media container (clips to blob) */}
                      <div
                        className="position-relative bg-white bg-opacity-50 border services-video"
                        style={{
                          borderRadius: isEven ? "70% 30% 30% 70%" : "30% 70% 70% 30%",
                          backdropFilter: "blur(10px)",
                          borderColor: "rgba(255,255,255,0.1)",
                          overflow: "hidden",   // IMPORTANT: clip media to blob
                        }}
                      >
                        {media[index]?.type === "video" ? (
                          <video
                            className="w-100 h-100"
                            style={{ objectFit: "cover", display: "block" }}
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={media[index]?.poster}
                          >
                            <source src={media[index]?.src} type="video/mp4" />
                          </video>
                        ) : (
                          <img
                            src={media[index]?.src}
                            alt=""
                            className="w-100 h-100"
                            style={{ objectFit: "cover", display: "block" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="position-relative overflow-hidden rounded-4 border border-white border-opacity-25 p-4 p-md-5 mb-4">
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(34,211,238,0.3), rgba(59,130,246,0.3), rgba(147,51,234,0.3))",
                zIndex: 0
              }}
            />
            <div
              className="position-absolute top-0 end-0"
              style={{
                width: "380px",
                height: "380px",
                background: "linear-gradient(to bottom left, rgba(147,51,234,0.4), transparent)",
                borderRadius: "50%",
                filter: "blur(40px)"
              }}
            />
            <div
              className="position-absolute bottom-0 start-0"
              style={{
                width: "380px",
                height: "380px",
                background: "linear-gradient(to top right, rgba(34,211,238,0.4), transparent)",
                borderRadius: "50%",
                filter: "blur(40px)"
              }}
            />
            <div className="position-relative text-center" style={{ zIndex: 1 }}>
              <span className="badge rounded-pill bg-white bg-opacity-10 border border-white border-opacity-25 mb-3 d-inline-flex align-items-center">
                <Sparkles className="me-1" size={14} />
                Let's Create Together
              </span>
              <h2 className="fw-bold display-5 mb-3">
                <span className="d-block text-dark">Ready to Start Your</span>
                <span
                  className="d-block"
                  style={{
                    background: "linear-gradient(to right, #22d3ee, #3b82f6, #9333ea)",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  Creative Journey?
                </span>
              </h2>
              <p className="text-muted fs-5 mb-4 mx-auto" style={{ maxWidth: "620px" }}>
                Transform your vision into reality with our expert team. Book a free consultation and let's discuss your
                next big project.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link
                  to="/contact"
                  className="btn btn-lg text-white border-0"
                  style={{
                    background: "linear-gradient(to right, #22d3ee, #3b82f6, #9333ea)",
                    boxShadow: "0 0 40px rgba(96,165,250,0.6)"
                  }}
                >
                  Book Free Consultation
                  <ArrowRight className="ms-2" size={20} />
                </Link>
                <Link
                  to="/plans"
                  className="btn btn-lg btn-outline-light border border-white border-opacity-25 bg-white bg-opacity-10"
                >
                  View Our Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
