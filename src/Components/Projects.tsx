import { motion } from "framer-motion";
import PortfolioCard from "../Components/PortfolioCard";
import portfolio1 from "../../assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";

const projects = [
  { image: portfolio1, title: "Neon Sphere", category: "3D Art" },
  { image: portfolio2, title: "Brand Identity", category: "Branding" },
  { image: portfolio3, title: "Agency Website", category: "Web Design" },
  { image: portfolio4, title: "Mobile Experience", category: "UI/UX" },
  { image: portfolio5, title: "Abstract Form", category: "3D Art" },
  { image: portfolio6, title: "Packaging Design", category: "Branding" },
  { image: portfolio7, title: "Light Trails", category: "Motion" },
  { image: portfolio8, title: "Glass Architecture", category: "Visualization" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-primary top-[-100px] left-[-100px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-secondary bottom-[200px] right-[-100px]" />
      <div className="glow-orb w-[300px] h-[300px] bg-accent top-[50%] left-[30%]" />



      {/* Hero */}
      <section className="pt-36 pb-20 px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="font-display text-7xl font-bold tracking-tight mb-6">
            <span className="gradient-text">PORTFOLIO</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            A curated collection of creative work spanning digital art, branding, and interactive design.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="px-8 pb-32 max-w-6xl mx-auto relative z-10">
        <div className="masonry-grid">
          {projects.map((project, i) => (
            <PortfolioCard
              key={project.title}
              image={project.image}
              title={project.title}
              category={project.category}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 py-12 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-display text-lg font-bold gradient-text">STUDIO</span>
          <p className="text-sm text-muted-foreground">© 2026 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
