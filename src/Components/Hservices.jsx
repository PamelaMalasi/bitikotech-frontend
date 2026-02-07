import React from "react";
import '../Styles/Hservices.css';

export default function Services() {
  const services = [
    {
      icon: (
        <svg
          className="bi"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to boost your online presence and drive qualified leads.",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "PPC Campaigns",
        "Content Strategy",
      ],
    },
    {
      icon: (
        <svg
          className="bi"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Custom websites and web applications built to convert visitors into customers and scale your.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: (
        <svg
          className="bi"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z"
          />
        </svg>
      ),
      title: "Analytics & Insights",
      description:
        "Data-driven insights to optimize your marketing performance and make informed business decisions.",
      features: [
        "Performance Tracking",
        "ROI Analysis",
        "Customer Insights",
        "Conversion Optimization",
      ],
    },
  ];

  return (
    <section id="services" className="services py-5">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Our Services</h2>
          {/* <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            We provide comprehensive solutions to help your business grow and
            succeed in the digital landscape.
          </p> */}
        </div>

        {/* Services grid */}
       <div className="row g-4">
  {services.map((service, index) => (
    <div key={index} className="col-md-4">
      {/* ⬇️ put rounded + shadow here */}
      <div
        className="card-services card h-100 border-0 bg-white rounded-4"
        style={{ boxShadow: '0 14px 28px rgba(69, 166, 226, 0.17)', overflow: 'hidden' }}
      >
        {/* ⬇️ no rounded, no box-shadow here */}
        <div className="card-body text-center p-4">
          <div
            className="d-flex justify-content-center align-items-center text-white rounded-circle mb-4 mx-auto"
            style={{ backgroundColor: '#149be3fc', width: "64px", height: "64px" }}
          >
            {service.icon}
          </div>

          <h3 className="h5 fw-semibold mb-3">{service.title}</h3>
          <p className="text-muted mb-4">{service.description}</p>

          <ul className="list-unstyled text-start mb-4">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="mb-2 d-flex align-items-center">
                <span
                  className="rounded-circle me-2"
                  style={{
                    backgroundColor: '#9569ebff',
                    width: "8px",
                    height: "8px",
                    display: "inline-block"
                  }}
                ></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button className="rounded-4 services-button btn w-100">
            Learn More
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
