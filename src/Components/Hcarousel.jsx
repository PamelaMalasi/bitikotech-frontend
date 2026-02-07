import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 992 }, items: 4, partialVisibilityGutter: 20 },
    tablet: { breakpoint: { max: 992, min: 768 }, items: 3, partialVisibilityGutter: 16 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, partialVisibilityGutter: 12 },
};

export default function Hcarousel() {
    const projects = [
        { category: "Web Development", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" },
        { category: "Branding", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80" },
        { category: "App Development", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" },
        { category: "Consulting", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
        { category: "Digital Marketing", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80" },
        { category: "AI & Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" }
    ];

    return (
        <section className="py-5 carousel">
            <div className="container">
       <div className="text-left mb-1 ">
          <h2 className="display-5 fw-bold mb-1 ms-2">Our Projects</h2>
        </div>
                <Carousel
                    responsive={responsive}
                    partialVisible
                    arrows
                    swipeable
                    draggable
                    infinite
                    autoPlay
                    autoPlaySpeed={2500}
                    pauseOnHover
                    keyBoardControl
                    slidesToSlide={1}
                    itemClass="px-2"
                    containerClass="py-4"
                    renderDotsOutside={false}
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="card project-card border-0 shadow-sm bg-white rounded-4"
                            style={{ overflow: "hidden", background: "rgba(255,255,255,0.8)", backdropFilter: "blur(4px)" }}
                        >
                            <div className="position-relative">
                                <img
                                    src={project.image}
                                    alt={project.category}
                                    className="w-100"
                                    style={{ height: "16rem", objectFit: "cover", transition: "transform .3s ease" }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100 overlay"
                                    style={{
                                        background: "linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.2), rgba(0,0,0,0))",
                                        opacity: 0,
                                        transition: "opacity .3s ease",
                                    }}
                                />
                                <div className="position-absolute bottom-0 start-0 end-0 p-3">
                                    <h3 className="h5 fw-bold text-white mb-1">{project.category}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
