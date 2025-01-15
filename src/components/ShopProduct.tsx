import { UseProducts } from "@/Context/Products/UseProducts";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Heart, MoveLeft, MoveRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "@/Context/Products/ProductProvider";
import BreadCrumbs from "./BreadCrumbs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store";
import {
  addFavorite,
  FavouriteItem,
  removeFavorite
} from "@/redux/slice/favouriteSlice";
export const ShopProduct = () => {
  // const { dispatch, REDUCER_ACTION } = UseCartContext();
  const dispatch = useDispatch();
  const isFavourite = useSelector((state: RootState) => state.favourite.items);
  const { filterProducts } = UseProducts();

  //paginantion
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(filterProducts.length / itemsPerPage);

  // Get the items for the current page
  const currentProducts = filterProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
    <div className="">
      <div className="h-[22rem] p-2 max-sm:mt-[1rem] overflow-y-scroll shop-product mt-[4rem] font-rajdhani">
        <div className="max-sm:hidden ">
          <BreadCrumbs />
        </div>
        <main className="grid max-md:grid-cols-3 grid-cols-4 max-sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] mt-[2rem] gap-4">
          {currentProducts.map((product, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{
                duration: 1
              }}
              className="flex  max-sm:justify-center"
            >
              <Card className="overflow-hidden h-[21rem] max-w-[300px] w-full duration-200 hover:border-green-400 border">
                <Link to={`/product/${product.id}`}>
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
            </motion.div>
          ))}
        </main>
      </div>
      <div className="pagination mt-2 flex justify-between items-center gap-2 w-full">
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div className="action flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <MoveLeft />
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={
                currentPage === i + 1
                  ? "active w-[1rem] h-[1rem]"
                  : "w-[1rem] h-[1rem]"
              }
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="ghost"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
