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
import { ScrollToTop } from "@/components/ScrollToTop";
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

      <div className="flex h-[35rem]  max-sm:hidden max-md:hidden w-full mt-6 gap-6">
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
              <figure className="flex h-[35rem] w-full  items-center justify-center bg-gray-300 dark:bg-slate-900">
                <img
                  src={product?.image}
                  className="w-[20rem]  object-contain"
                />
              </figure>
            </SwiperSlide>
            {product?.images.map((image, i) => (
              <SwiperSlide key={i}>
                <figure className="flex h-[35rem] w-full items-center justify-center bg-gray-300 dark:bg-slate-900">
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
      <ScrollToTop />
      <Footer />
    </div>
  );
};
