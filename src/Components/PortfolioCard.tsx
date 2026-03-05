import { motion } from "framer-motion";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  index: number;
}

const PortfolioCard = ({ image, title, category, index }: PortfolioCardProps) => {
  return (
    <motion.div
      className="masonry-item"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </div>

        <div className="p-5">
          <p className="text-xs font-medium tracking-widest uppercase text-primary mb-1">
            {category}
          </p>

          <h3 className="font-display text-lg font-semibold text-foreground">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;