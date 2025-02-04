import { UseProducts } from "@/Context/Products/UseProducts";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { ProductType } from "@/Context/Products/ProductProvider";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import { addFavorite, removeFavorite } from "@/redux/slice/favouriteSlice";
import { RootState } from "@/redux/store";
import RelatedProductCard from "./RelatedProductCard";

export const RelatedProduct = () => {
  const { bestSellingProducts } = UseProducts();
  const dispatch = useDispatch();
  const isFavourite = useSelector((state: RootState) => state.favourite.items);

  const addToCartClick = (product: ProductType) => {
    dispatch(addToCart({ ...product, qty: 1 }));
  };
  const toggleFavorite = (product: ProductType) => {
    if (isFavourite.find((item: ProductType) => item.id === product.id)) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };
  return (
    <div className="related-swiper h-[22rem] mb-[8rem] mt-[4rem]">
      <p className="text-2xl my-4">Related Products</p>
      <div className="max-sm:hidden max-md:hidden">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {bestSellingProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <RelatedProductCard
                key={i}
                product={product}
                isFavourite={isFavourite}
                toggleFavorite={toggleFavorite}
                addToCartClick={addToCartClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-md:block hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {bestSellingProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <RelatedProductCard
                key={i}
                product={product}
                isFavourite={isFavourite}
                toggleFavorite={toggleFavorite}
                addToCartClick={addToCartClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-sm:block hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-full w-full"
        >
          {bestSellingProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <RelatedProductCard
                key={i}
                product={product}
                isFavourite={isFavourite}
                toggleFavorite={toggleFavorite}
                addToCartClick={addToCartClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
