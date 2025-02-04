import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useEffect, useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { UseProducts } from "@/Context/Products/UseProducts";
import { ProductDetails } from "@/components/ProductDetails";
import { Footer } from "@/components/Footer";
import { RelatedProduct } from "@/components/RelatedProduct";
import { ProductTab } from "@/components/ProductTab";
import BreadCrumbs from "@/components/BreadCrumbs";
import { ProductSwiperMobile } from "@/components/ProductSwiperMobile";
export const ProductPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const { allProducts } = UseProducts();
  const { productid } = useParams<{ productid: string }>();
  const product = allProducts.find((item) => item.id === productid);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="px-8 max-sm:px-4">
      <div className="hidden max-sm:block my-[2rem] max-md:block">
        <BreadCrumbs />
      </div>

      <div className="flex h-auto max-sm:hidden max-md:hidden w-full mt-6 gap-6">
        <div className="product-swiper   w-[50%] max-sm:w-full">
          {/* Thumbnail Swiper */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop
            spaceBetween={10}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className=""
          >
            <SwiperSlide>
              <figure className="flex w-full h-full overflow-hidden items-center justify-center bg-gray-300 dark:bg-slate-900">
                <img src={product?.image} className="w-[4rem] object-contain" />
              </figure>
            </SwiperSlide>
            {product?.images.map((image, i) => (
              <SwiperSlide key={i}>
                <figure className="flex w-full h-full overflow-hidden  items-center justify-center bg-gray-300 dark:bg-slate-900">
                  <img src={image} className="w-[4rem] object-contain" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Main Image Swiper */}
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff"
              } as React.CSSProperties
            }
            loop
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 w-full"
          >
            <SwiperSlide>
              <figure className="flex h-screen w-full  items-center justify-center bg-gray-300 dark:bg-slate-900">
                <img
                  src={product?.image}
                  className="w-[20rem]  object-contain"
                />
              </figure>
            </SwiperSlide>
            {product?.images.map((image, i) => (
              <SwiperSlide key={i}>
                <figure className="flex h-screen w-full items-center justify-center bg-gray-300 dark:bg-slate-900">
                  <img src={image} className="w-[20rem]  object-contain" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Content */}
        <div className="product-content w-full h-full ">
          {product && <ProductDetails product={product} />}
        </div>
      </div>
      <ProductSwiperMobile />
      {product && <ProductTab key={product?.id} product={product} />}
      <RelatedProduct />
      <Footer />
    </div>
  );
};

{
  /* <div className="hidden max-sm:flex max-sm:flex-col mt-6">
        <div className="product-swiper ">
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff"
              } as React.CSSProperties
            }
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2  w-full flex items-center justify-center h-full dark:bg-slate-900 overflow-hidden bg-gray-300"
          >
            <SwiperSlide>
              <figure className="w-full flex items-center  justify-center h-full dark:bg-slate-900 overflow-hidden bg-gray-300">
                <img
                  src={product?.image}
                  className="h-full w-full object-cover"
                />
              </figure>
            </SwiperSlide>
            {product?.images.map((image, i) => (
              <SwiperSlide key={i}>
                <figure className="w-full flex items-center justify-center h-full overflow-hidden dark:bg-slate-900 bg-gray-300">
                  <img src={image} className=" w-full h-full object-cover" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className=" swiper-thumb w-full"
          >
            <SwiperSlide>
              <figure className="w-full flex flex-col items-center justify-center h-full overflow-hidden dark:bg-slate-900 bg-gray-300">
                <img src={product?.image} className="w-[5rem] object-cover" />
              </figure>
            </SwiperSlide>
            {product?.images.map((image, i) => (
              <SwiperSlide key={i}>
                <figure className="w-full flex items-center justify-center h-full dark:bg-slate-900 overflow-hidden bg-gray-300">
                  <img src={image} className="object-cover" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="product-content w-full  ">
          {product && <ProductDetails product={product} />}
        </div>
      </div> */
}
