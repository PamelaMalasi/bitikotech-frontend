import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import "../Styles/PortfolioCard.css";

const PortfolioCard = ({ image, title, description, link, index }) => {
  const CardInner = (
    <Card className="glass-card border-0 overflow-hidden rounded-4 h-100">
      <div className="position-relative overflow-hidden">
        <Card.Img
          src={image}
          alt={title}
          loading="lazy"
          className="w-100 object-fit-cover portfolio-img"
          style={{ height: 240 }}
        />
        <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100" />
      </div>

      <Card.Body className="p-3">
        <Card.Title className="fs-6 fw-semibold mb-2">{title}</Card.Title>
        <Card.Text className="text-muted small mb-0">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );

  return (
    <motion.div
      className="masonry-item"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-reset d-block"
          style={{ cursor: "pointer" }}
        >
          {CardInner}
        </a>
      ) : (
        CardInner
      )}
    </motion.div>
  );
};

export default PortfolioCard;