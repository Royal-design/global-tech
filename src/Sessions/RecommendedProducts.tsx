import { products } from "@/data/ProductsRecommended";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

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
    <div className="max-sm:px-4 px-8 mt-[4rem] max-sm:mt-[2rem] font-rajdhani">
      <p className="font-bold text-2xl max-sm:text-lg  link w-[18rem] max-sm:w-[14rem] hover:text-green-500 ">
        Highly Recommended!
      </p>
      <div className=" w-full my-2 flex justify-between">
        <article className="w-[30rem] max-sm:w-full">
          Discover the perfect choice tailored just for you! This product stands
          out for its quality, performance, and unbeatable value.
        </article>
      </div>

      <main className="grid  max-md:grid-cols-3 gap-4  [@media(min-width:400px)_and_(max-width:700px)]:grid-cols-2 grid-cols-[repeat(auto-fit,minmax(230px,1fr))] my-[4rem] max-sm:my-[4rem] ">
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
