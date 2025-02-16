import { BannerSwiper } from "./BannerSwiper";
import { InfiniteMovingCard } from "./InfiniteMovingCard";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1
      }}
      className="h-full"
    >
      <BannerSwiper />
      <InfiniteMovingCard />
    </motion.div>
  );
};
