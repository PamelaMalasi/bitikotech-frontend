import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TrendingUp, Users, Layers, Zap } from "lucide-react";
import '../Styles/GrowthSection.css';



export default function GrowthSection() {
  const stats = [
    { icon: Users,      value: "50+",  label: "Brands Grown" },
    { icon: TrendingUp, value: "3×",   label: "Avg. Visibility" },
    { icon: Layers,     value: "6",    label: "Core Services" },
    { icon: Zap,        value: "24/7", label: "Dedicated Support" },
  ];

  return (
    <section className="growth-background position-relative py-2 overflow-hidden">
      {/* <div className="ps-md-4 mb-4 text-center text-md-start mx-auto" style={{ maxWidth: "1150px"}}>

          <h2 className="display-4 fw-bold lh-1 mt-4">
            WE LOVE SEEING
            <span className="gradient-text"> YOU GROW</span>
          </h2>
        </div> */}
      <div className="container position-relative" style={{ marginTop: "80px" }}>

        {/* Left vertical + top horizontal shine */}
        {/* <div className="position-absolute top-0 bottom-0 start-0 shine-line-y d-none d-md-block" /> */}
        {/* <div className="position-absolute top-0 start-0 end-0 shine-line-x d-none d-md-block" /> */}

        {/* Stats grid */}
        <div className="row mb-5 ps-md-4 pt-md-4 g-5 justify-content-center">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div className="col-auto d-flex justify-content-center" key={i}>
              <div className="position-relative shine-border my-card rounded-4 h-100">
                <div className="glass-card rounded-4 p-3 text-center  d-flex flex-column justify-content-center align-items-center" style={{ width: 250, height: 150 }}>
                  <Icon size={24} className="mb-2 text-primary" />
                  <div className="fs-2 fw-bold gradient-text mb-1">{value}</div>
                  <div className="small text-muted">{label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Heading */}

        {/* <div className="ps-md-4 mb-4 text-center text-md-start mx-auto" style={{ maxWidth: "1150px" }}>

          <h2 className="display-4 fw-bold lh-1 mt-4">
            WE LOVE SEEING
            <span className="gradient-text"> YOU GROW</span>
          </h2>
        </div> */}

        {/* Video with shiny border */}
        {/* <div className="position-relative ps-md-4">
          <div className="position-absolute top-0 bottom-0 start-0 shine-line-y d-none d-md-block" />
          <div className="position-absolute bottom-0 start-0 end-0 shine-line-x d-none d-md-block" />

          <div className="position-relative group">
            <div className="shine-border rounded-4" style={{ maxWidth: 640 }} />
            <div className="rounded-4 overflow-hidden border border-primary-subtle bg-white bg-opacity-50 backdrop-blur" style={{ maxWidth: 640 }}>
              <div className="ratio ratio-16x9">
               <video className="w-50 h-50 object-fit-cover" autoPlay loop muted playsInline>
                  <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99790-large.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="position-absolute top-0 start-0 w-100 h-100 video-gradient-overlay" />
            </div>
          </div>
        </div> */}

        {/* Right vertical shine */}
        {/* <div className="position-absolute top-0 bottom-0 end-0 shine-line-y d-none d-md-block" /> */}
      </div>
    </section>
  );
}
