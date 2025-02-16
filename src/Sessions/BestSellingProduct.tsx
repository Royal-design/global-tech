import { products } from "@/data/ProductsBestSelling";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { ProductType } from "@/Context/Products/ProductProvider";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import { addFavorite, removeFavorite } from "@/redux/slice/favouriteSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { setBestsellingProducts } from "@/redux/slice/productSlice";
import { ProductCard } from "@/components/ProductCard";

export const BestSellingProduct = () => {
  const dispatch = useDispatch();
  const isFavourite = useSelector((state: RootState) => state.favourite.items);
  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredBestselling
  );
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
  useEffect(() => {
    dispatch(setBestsellingProducts(products));
  }, [products]);
  return (
    <div className=" px-8 max-sm:px-4 mt-[4rem] max-sm:mt-[2rem] font-rajdhani">
      <p className="font-bold text-2xl max-sm:text-lg link w-[18rem] max-sm:w-[14rem] hover:text-green-500 ">
        Best Selling Products
      </p>
      <div className=" w-full flex justify-between my-2">
        <article className="md:w-[30rem] max-sm:w-full">
          Discover the most popular and top-rated products that our customers
          can't stop raving about
        </article>
      </div>

      <main className="grid  max-md:grid-cols-3  [@media(min-width:400px)_and_(max-width:700px)]:grid-cols-2 grid-cols-[repeat(auto-fit,minmax(230px,1fr))] my-[4rem] max-sm:my-[4rem]  gap-4">
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
    </div>
  );
};
