import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { TrendingUp, Globe } from "lucide-react";

import '../Styles/Home.css';
import '../Styles/Floating.css';
import '../Styles/GrowthSection.css';

import Hservices from "./Hservices";
import Hcarousel from "./Hcarousel";
import Hcta from "./Hcta";
import GrowthSection from './GrowthSection';

import mp5 from "../images/somecanva7.mp4";  // used in the two ratio boxes
// import mp6 from "../images/somecanva8.mp4";
import mp7 from "../images/somecanva11.mp4";
import mp6 from "../images/somecanva18.mp4";


const Home = () => {
    return (
        <div>

            {/* HERO */}
            <div className="home-section position-relative overflow-hidden" style={{ paddingTop: '140px' }}>
                {/* gradient overlay behind hero */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'linear-gradient(90deg, rgba(107,70,193,0.20), rgba(49,130,206,0.20))',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: 0,
                        pointerEvents: 'none',
                    }}
                />

                <div className="home-text position-relative text-center" style={{ zIndex: 1 }}>
                    <h2 className="fw-bold text-glow" style={{ color: "#fff" }}>
                        Ready to scale up?
                    </h2>
                </div>

                {/* hero cards */}
                <div className="cards d-flex justify-content-center flex-wrap" style={{ gap: '56px' }}>
                    {/* Card 1 */}
                    <div className="position-relative rounded-4">
                        <div className='my-card'></div>
                        <div className="card-1 p-4 rounded-4 shadow text-center glow-soft bg-white">

                            <div
                                style={{
                                    width: 64, height: 64, backgroundColor: "#9758e4",
                                    borderRadius: "50%", display: "flex",
                                    alignItems: "center", justifyContent: "center",
                                    margin: "0 auto 20px"
                                }}
                            >
                                <TrendingUp size={32} color="white" />
                            </div>

                            <p className="fw-semibold fs-2 mb-2">Activate my marketing</p>
                            <p className="mb-4">
                                Drive growth with data-driven marketing strategies, social media management, and audience building techniques.
                            </p>
                            <Button className="button-card w-50 rounded-4">Start now</Button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="position-relative rounded-4">
                        <div className='my-card'></div>
                        <div className="card-2 p-4 rounded-4 shadow text-center bg-white">
                            <div
                                style={{
                                    width: 64, height: 64, backgroundColor: "#3182ce",
                                    borderRadius: "50%", display: "flex",
                                    alignItems: "center", justifyContent: "center",
                                    margin: "0 auto 20px"
                                }}
                            >
                                <Globe size={32} color="white" />
                            </div>

                            <p className="fw-semibold fs-2 mb-2">Launch my website</p>
                            <p className="mb-4">
                                Professional website design and development that converts visitors into customers and grows your business.
                            </p>
                            <Button className="button-card w-50 rounded-4">Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* “ONE” WHITE BAND (kept, but normalized) */}
            <section className="about-section one position-relative overflow-hidden">
                {/* light white gradient behind this band only */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: "linear-gradient(90deg, rgba(255,255,255,0.92), rgba(255,255,255,0.99))",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: -1,
                        pointerEvents: 'none',
                    }}
                />

                <div className="container">
                    {/* your growth section (assumes it has its own layout) */}
                    <GrowthSection />

                    {/* About split with two videos */}
                    <section className="mt-4 py-5 about-section-max rounded-4" style={{ backgroundColor: "#a2d7f493" }}>
                        <div className="container">
                            <div className="mx-auto" style={{ maxWidth: '1100px' }}>
                                <div className="row g-4 align-items-start justify-content-center">

                                    {/* Left */}
                                    <div className="col-12 col-md-12 col-lg-6">
                                        <div className="ratio ratio-16x9 rounded-4 mb-3" style={{ maxWidth: '800px', width: '100%' }}>
                                            <div className='my-card'></div>
                                            <video
                                                className="w-100 h-100"
                                                style={{ objectFit: 'cover', borderRadius: '16px' }}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                controls={false}
                                            >
                                                <source src={mp7} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>

                                        <p className="lead" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                                            Bitiko transforms digital complexity into business momentum. We combine strategic design,
                                            technical excellence, and performance marketing to help brands achieve measurable growth.
                                        </p>
                                    </div>

                                    {/* Right */}
                                    <div className="col-12 col-md-12 col-lg-6">
                                        <h2 className="display-5 fw-bold lh-1 mb-4">
                                            WE LOVE SEEING <span className="gradient-text"> YOU GROW</span>
                                        </h2> 

                                        <div className="ratio ratio-16x9 rounded-4" style={{ maxWidth: '800px', width: '100%' }}>
                                            <div className='my-card'></div>
                                            <video
                                                className="w-100 h-100"
                                                style={{ objectFit: 'cover', borderRadius: '16px' }}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                controls={false}
                                            >
                                                <source src={mp6} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Focused copy block */}
                    <div className="container about-section-min">
                        <div className="position-relative mx-auto p-4 p-md-5 bg-white rounded-4">
                            <div className="mb-4 text-center">
                                <h2 className="display-4 fw-bold lh-1 mt-2">
                                    WE LOVE SEEING <span className="gradient-text"> YOU GROW</span>
                                </h2>
                            </div>
                            <p
                                style={{
                                    maxWidth: '90ch', margin: '0 auto',
                                    fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.65,
                                    color: '#606774', textWrap: 'pretty', hyphens: 'auto'
                                }}
                            >
                                Bitiko turns complexity into momentum. We design with taste, engineer with rigor, and scale with performance marketing so your brand wins where it matters—awareness, conversion, retention. One agile team, zero fluff, results you can feel.
                            </p>
                        </div>
                    </div>

                    {/* Services + Carousel (inside the same white band) */}
                    <Hservices />
                    <Hcarousel />
                </div>
            </section>

            {/* CTA + Footer */}
            <Hcta />
        </div>
    );
};

export default Home;
