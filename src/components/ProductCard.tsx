import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyLoad from "react-lazyload";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ProductType } from "@/Context/Products/ProductProvider";
import React, { memo } from "react";

interface ProductCardProps {
  product: ProductType;
  isFavourite: ProductType[];
  toggleFavorite: (product: ProductType) => void;
  addToCartClick: (product: ProductType) => void;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavourite,
  addToCartClick,
  toggleFavorite
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <Card className="overflow-hidden w-full max-w-[300px] h-full flex flex-col justify-between hover:border-green-400 border duration-200">
        <Link to={`/product/${product.id}`}>
          <CardContent className="relative recommend-card p-0">
            <figure className="flex justify-center p-2 bg-background-card h-[12rem] max-sm:h-[8rem]">
              <LazyLoad placeholder="string">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-cover"
                />
              </LazyLoad>
            </figure>
            <div className="swiper-container bg-background-card w-full h-full absolute top-[-20rem] p-2 duration-200 recommend-card-content">
              <Swiper
                loop
                navigation
                modules={[Navigation]}
                className="mySwiper h-full"
              >
                {product.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </CardContent>
        </Link>
        <CardFooter className="p-1 h-full w-full">
          <article className="p-2 flex flex-col justify-between h-full gap-1 w-full">
            <div className="flex w-full text-lg max-sm:text-sm max-sm:font-bold justify-between">
              <p>{product.name}</p>
              <motion.button
                animate={{
                  scale: isFavourite.some((item) => item.id === product.id)
                    ? 1.1
                    : 1
                }}
                transition={{
                  type: "spring",
                  stiffness: 1000,
                  damping: 10
                }}
                className="text-red-400"
                onClick={() => toggleFavorite(product)}
              >
                {isFavourite.some((item) => item.id === product.id) ? (
                  <Heart size="20" className="fill-red-400 max-sm:w-[1rem]" />
                ) : (
                  <Heart size="20" className="max-sm:w-[1rem]" />
                )}
              </motion.button>
            </div>
            <div className="flex items-center w-full gap-2 justify-between">
              <p className="text-lg max-sm:text-base  dark:text-gray-400">
                ₦{product.newPrice}
              </p>
              <p className="line-through max-sm:text-sm dark:text-gray-400">
                ₦{product.oldPrice}
              </p>
            </div>
            <div className="flex gap-1">
              {product.rating && (
                <p className="text-yellow-500">
                  {"★".repeat(product.rating)} {"☆".repeat(5 - product.rating)}
                </p>
              )}
            </div>
            <Button className="mt-4" onClick={() => addToCartClick(product)}>
              Add to Cart
            </Button>
          </article>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
export default memo(ProductCard);
