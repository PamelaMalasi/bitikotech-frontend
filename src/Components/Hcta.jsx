// src/Components/Hcta.jsx
import React from "react";

export default function Hcta({ onConsult, onViewWork }) {
  return (
    <section className="py-5" style={{backgroundColor : "white"}}>
      <div className="container px-4">
        <div className="card text-center text-white border-0 shadow-lg rounded-4" style={{
  background: 'linear-gradient(90deg, var(--bs-primary), var(--bs-info))'
}}>
          <div className="card-body p-5">
            <h2 className="display-4 fw-bold mb-4">
              Ready to Scale Your Business?
            </h2>

            {/* style must be an object */}
            <p className="lead mb-5 mx-auto" style={{ maxWidth: 700 }}>
              Join hundreds of successful businesses who have transformed their
              growth with our proven strategies.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              {/* Use buttons if there’s no real link */}
              <button
                type="button"
                className="btn btn-light btn-lg text-primary rounded-4"
                onClick={onConsult}
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
