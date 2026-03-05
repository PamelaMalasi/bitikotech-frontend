import { motion } from "framer-motion";
import { Card } from "react-bootstrap";

const PortfolioCard = ({ image, title, category, index }) => {
  return (
    <motion.div
      className="masonry-item"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <Card className="glass-card border-0 overflow-hidden rounded-4 position-relative">
        
        <div className="position-relative overflow-hidden">
          <Card.Img
            src={image}
            alt={title}
            loading="lazy"
            className="w-100 object-fit-cover portfolio-img"
          />

          {/* Hover gradient overlay */}
          <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100" />
        </div>

        <Card.Body className="p-3">
          <p className="text-uppercase small fw-semibold text-primary mb-1" style={{ letterSpacing: "0.15em" }}>
            {category}
          </p>

          <Card.Title className="fs-6 fw-semibold mb-0">
            {title}
          </Card.Title>
        </Card.Body>

      </Card>
    </motion.div>
  );
};

export default PortfolioCard;