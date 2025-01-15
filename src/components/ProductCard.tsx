import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Heart, Star } from "lucide-react";
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
      <Card className="overflow-hidden w-full max-w-[300px] h-[22rem] flex flex-col justify-between hover:border-green-400 border duration-200">
        <Link to={`/product/${product.id}`}>
          <CardContent className="relative recommend-card p-0">
            <figure className="flex justify-center p-2 bg-background-card h-[12rem]">
              <img src={product.image} alt={product.name} className="h-full" />
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
        <CardFooter className="p-0">
          <article className="p-2 flex flex-col gap-1 w-full">
            <div className="flex w-full text-lg justify-between">
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
                  <Heart size="20" className="fill-red-400" />
                ) : (
                  <Heart size="20" />
                )}
              </motion.button>
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-lg dark:text-gray-400">₦{product.newPrice}</p>
              <p className="line-through dark:text-gray-400">
                ₦{product.oldPrice}
              </p>
            </div>
            <div className="flex gap-1">
              {[...Array(5).keys()].map((_, i) => (
                <Star
                  key={i}
                  size="12"
                  className="fill-[#f8801a] text-[#f8801a]"
                />
              ))}
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
