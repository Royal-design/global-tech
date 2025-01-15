import { UseProducts } from "@/Context/Products/UseProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { ProductType } from "@/Context/Products/ProductProvider";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import {
  addFavorite,
  FavouriteItem,
  removeFavorite
} from "@/redux/slice/favouriteSlice";
import { RootState } from "@/redux/store";

export const RelatedProduct = () => {
  const { bestSellingProducts } = UseProducts();
  const dispatch = useDispatch();
  const isFavourite = useSelector((state: RootState) => state.favourite.items);

  const addToCartClick = (product: ProductType) => {
    dispatch(addToCart({ ...product, qty: 1 }));
  };
  const toggleFavorite = (product: FavouriteItem) => {
    if (isFavourite.find((item: FavouriteItem) => item.id === product.id)) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };
  return (
    <div className="related-swiper h-[22rem] mb-[4rem]">
      <p className="text-2xl my-4">Related Products</p>
      <div className="max-sm:hidden max-md:hidden">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {bestSellingProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <div key={i}>
                <Card className="overflow-hidden h-[21rem] duration-200 hover:border-green-400 border">
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                      });
                    }}
                  >
                    <CardContent className="relative recommend-card p-0">
                      <figure className="flex justify-center p-2 bg-background-card h-[10rem]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full"
                        />
                      </figure>
                      <div className="swiper-container bg-background-card w-full h-full absolute top-[-20rem] p-2  duration-200 recommend-card-content  ">
                        <Swiper
                          loop={true}
                          navigation={true}
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
                  <CardFooter className="p-0 m-0 overflow-hidden">
                    <div className="p-2 flex flex-col justify-between h-[11rem] gap-1 w-full">
                      <div className="flex w-full text-lg  justify-between">
                        <p className="">{product.name}</p>
                        <motion.button
                          animate={{
                            scale: isFavourite.find(
                              (item: FavouriteItem) => item.id === product.id
                            )
                              ? 1.1
                              : 1
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 1000,
                            damping: 10
                          }}
                          className={`text-red-400 `}
                          onClick={() => toggleFavorite(product)}
                        >
                          {isFavourite.find(
                            (item: FavouriteItem) => item.id === product.id
                          ) ? (
                            <Heart size="20" className="fill-red-400" />
                          ) : (
                            <Heart size="20" className="" />
                          )}
                        </motion.button>
                      </div>
                      <div className=" flex gap-4 items-center">
                        <p className="text-lg dark:text-gray-400">
                          ₦{product.newPrice}
                        </p>
                        <p className="line-through dark:text-gray-400">
                          ₦{product.oldPrice}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5).keys()].map((_, i) => (
                          <Star
                            key={i}
                            size="12"
                            className="fill-[#f8801a] text-[#f8801a] key={i}"
                          />
                        ))}
                      </div>
                      <Button
                        onClick={() => addToCartClick(product)}
                        className="mt-4"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-md:block hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {bestSellingProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <div key={i}>
                <Card className="overflow-hidden h-[21rem] duration-200 hover:border-green-400 border">
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                      });
                    }}
                  >
                    <CardContent className="relative recommend-card p-0">
                      <figure className="flex justify-center p-2 bg-background-card h-[10rem]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full"
                        />
                      </figure>
                      <div className="swiper-container bg-background-card w-full h-full absolute top-[-20rem] p-2  duration-200 recommend-card-content  ">
                        <Swiper
                          loop={true}
                          navigation={true}
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
                  <CardFooter className="p-0 m-0 overflow-hidden">
                    <div className="p-2 flex flex-col justify-between h-[11rem] gap-1 w-full">
                      <div className="flex w-full text-lg  justify-between">
                        <p className="">{product.name}</p>
                        <motion.button
                          animate={{
                            scale: isFavourite.find(
                              (item: FavouriteItem) => item.id === product.id
                            )
                              ? 1.1
                              : 1
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 1000,
                            damping: 10
                          }}
                          className={`text-red-400 `}
                          onClick={() => toggleFavorite(product)}
                        >
                          {isFavourite.find(
                            (item: FavouriteItem) => item.id === product.id
                          ) ? (
                            <Heart size="20" className="fill-red-400" />
                          ) : (
                            <Heart size="20" className="" />
                          )}
                        </motion.button>
                      </div>
                      <div className=" flex gap-4 items-center">
                        <p className="text-lg dark:text-gray-400">
                          ₦{product.newPrice}
                        </p>
                        <p className="line-through dark:text-gray-400">
                          ₦{product.oldPrice}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5).keys()].map((_, i) => (
                          <Star
                            key={i}
                            size="12"
                            className="fill-[#f8801a] text-[#f8801a] key={i}"
                          />
                        ))}
                      </div>
                      <Button
                        onClick={() => addToCartClick(product)}
                        className="mt-4"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-sm:block hidden">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {bestSellingProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <div key={i}>
                <Card className="overflow-hidden h-[21rem] duration-200 hover:border-green-400 border">
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                      });
                    }}
                  >
                    <CardContent className="relative recommend-card p-0">
                      <figure className="flex justify-center p-2 bg-background-card h-[10rem]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full"
                        />
                      </figure>
                      <div className="swiper-container bg-background-card w-full h-full absolute top-[-20rem] p-2  duration-200 recommend-card-content  ">
                        <Swiper
                          loop={true}
                          navigation={true}
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
                  <CardFooter className="p-0 m-0 overflow-hidden">
                    <div className="p-2 flex flex-col justify-between h-[11rem] gap-1 w-full">
                      <div className="flex w-full text-lg  justify-between">
                        <p className="">{product.name}</p>
                        <motion.button
                          animate={{
                            scale: isFavourite.find(
                              (item: FavouriteItem) => item.id === product.id
                            )
                              ? 1.1
                              : 1
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 1000,
                            damping: 10
                          }}
                          className={`text-red-400 `}
                          onClick={() => toggleFavorite(product)}
                        >
                          {isFavourite.find(
                            (item: FavouriteItem) => item.id === product.id
                          ) ? (
                            <Heart size="20" className="fill-red-400" />
                          ) : (
                            <Heart size="20" className="" />
                          )}
                        </motion.button>
                      </div>
                      <div className=" flex gap-4 items-center">
                        <p className="text-lg dark:text-gray-400">
                          ₦{product.newPrice}
                        </p>
                        <p className="line-through dark:text-gray-400">
                          ₦{product.oldPrice}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5).keys()].map((_, i) => (
                          <Star
                            key={i}
                            size="12"
                            className="fill-[#f8801a] text-[#f8801a] key={i}"
                          />
                        ))}
                      </div>
                      <Button
                        onClick={() => addToCartClick(product)}
                        className="mt-4"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
