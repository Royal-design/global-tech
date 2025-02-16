import { UseProducts } from "@/Context/Products/UseProducts";

import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ProductType } from "@/Context/Products/ProductProvider";
import BreadCrumbs from "./BreadCrumbs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store";
import { addFavorite, removeFavorite } from "@/redux/slice/favouriteSlice";
import ProductCard from "./ProductCard";
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

  const toggleFavorite = (product: ProductType) => {
    if (isFavourite.find((item: ProductType) => item.id === product.id)) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };
  return (
    <div className="">
      <div className="h-auto  max-sm:h-full p-2 max-sm:mt-[1rem] overflow-y-scroll shop-product mt-[4rem] font-rajdhani">
        <div className="max-sm:hidden ">
          <BreadCrumbs />
        </div>
        <main className="grid  grid-cols-[repeat(auto-fit,minmax(230px,1fr))] [@media(min-width:380px)_and_(max-width:700px)]:grid-cols-2 mt-[2rem] gap-4">
          {currentProducts.map((product, i) => (
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
