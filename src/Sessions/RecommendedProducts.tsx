import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { products } from "@/data/ProductsRecommended";
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
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/Config/firebase";
import { addFavorite, removeFavorite } from "@/redux/slice/favouriteSlice";
import { useEffect } from "react";
import { setRecommendedProducts } from "@/redux/slice/productSlice";
import { ProductCard } from "@/components/ProductCard";

export const RecommendedProducts = () => {
  const dispatch = useDispatch();
  const isFavourite = useSelector((state: RootState) => state.favourite.items);
  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredRecommended
  );
  const addToFireBase = async (product: ProductType) => {
    try {
      const docRef = collection(db, "cart");

      await addDoc(docRef, { ...product, qty: 1 });
    } catch (error) {}
  };
  const addToCartClick = (product: ProductType) => {
    dispatch(addToCart({ ...product, qty: 1 }));
    addToFireBase(product);
  };

  const toggleFavorite = (product: ProductType) => {
    if (isFavourite.find((item: ProductType) => item.id === product.id)) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };
  useEffect(() => {
    dispatch(setRecommendedProducts(products));
  }, [dispatch]);
  return (
    <div className=" px-8 mt-[4rem] font-rajdhani">
      <p className="font-bold text-2xl max-sm:text-lg link w-[18rem] hover:text-green-500 ">
        Highly Recommended!
      </p>
      <div className=" w-full my-2 flex justify-between">
        <article className="md:w-[30rem]">
          Discover the perfect choice tailored just for you! This product stands
          out for its quality, performance, and unbeatable value.
        </article>
      </div>

      <main className="grid grid-cols-4 max-md:grid-cols-3 mt-[4rem] gap-4 max-sm:hidden">
        {filteredProducts.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            isFavourite={isFavourite}
            toggleFavorite={toggleFavorite}
            addToCartClick={addToCartClick}
          />
        ))}
      </main>
      <main className="hidden related-swiper mt-4  max-sm:block">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {filteredProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <div key={i} className="">
                <Card className="overflow-hidden   h-[21rem] duration-200 hover:border-green-400 border">
                  <Link to={`/product/${product.id}`}>
                    <CardContent className="relative recommend-card p-0">
                      <figure className="flex justify-center p-2 bg-background-card h-[10rem]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full"
                        />
                      </figure>
                      <div className="swiper-container bg-background-card w-full h-full  absolute top-[-20rem] p-2  duration-200 recommend-card-content  ">
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
                              (item: ProductType) => item.id === product.id
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
                            (item: ProductType) => item.id === product.id
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
      </main>
    </div>
  );
};
