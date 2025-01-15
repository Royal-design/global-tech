import { ProductType } from "@/Context/Products/ProductProvider";
import BreadCrumbs from "./BreadCrumbs";
import { Heart, Share2, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import { decrement, increment } from "@/redux/slice/countSlice";
import { RootState } from "@/redux/store";
import { motion } from "framer-motion";
import {
  addFavorite,
  FavouriteItem,
  removeFavorite
} from "@/redux/slice/favouriteSlice";

interface ProductDetailsProps {
  product: ProductType;
}
export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const dispatch = useDispatch();
  const isFavourite = useSelector((state: RootState) => state.favourite.items);

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(increment({ productId: product.id }));
  };
  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(decrement({ productId: product.id }));
  };
  const quantity = useSelector(
    (state: RootState) => state.count.counts[product.id] || 0
  );
  const addToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newProduct = { ...product, qty: quantity };
    console.log(newProduct);
    dispatch(addToCart({ ...newProduct, qty: newProduct.qty }));
  };

  const toggleFavorite = (product: FavouriteItem) => {
    if (isFavourite.find((item: FavouriteItem) => item.id === product.id)) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <div className="p-4">
      <div className="max-sm:hidden">
        <BreadCrumbs />
      </div>
      <div className="font-titanium mt-4">
        <p className="text-2xl font-bold">{product.name}</p>
        <div className="items-center flex my-2 gap-4">
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, i) => (
              <Star key={i} fill="#fbd06f" stroke="1px" size={12} />
            ))}
          </div>
          <p className="text-sm">8K+ reviews</p>
        </div>
        <div className="flex gap-4 mt-6">
          <p className="text-lg line-through text-gray-500 font-semibold">
            ₦{product.oldPrice}
          </p>
          <p className="text-lg font-semibold">₦{product.newPrice}</p>
        </div>
        <p className="text-sm mt-4">{product.description}</p>
        <form>
          <div className="items-center flex gap-[2rem]  mt-6">
            <div className="w-[5rem] flex h-[3rem] justify-around dark:bg-transparent items-center bg-white border">
              <Button
                variant="ghost"
                onClick={handleDecrement}
                className="cursor-pointer dark:bg-transparent hover:bg-white"
              >
                -
              </Button>
              <p>{quantity}</p>
              <Button
                variant="ghost"
                onClick={handleIncrement}
                className="cursor-pointer hover:bg-white dark:bg-transparent"
              >
                +
              </Button>
            </div>
            <Button type="submit" onClick={addToCartClick}>
              ADD TO CART
            </Button>
          </div>
        </form>
        <div className="flex items-center gap-[2rem] mt-4">
          <div className="flex items-center gap-4 ">
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
                <Heart size="15" className="fill-red-400" />
              ) : (
                <Heart size="15" className="" />
              )}
            </motion.button>
            <p className="text-xs">ADD TO WISHLIST</p>
          </div>

          <div className="flex items-center gap-4 ">
            <Share2 size={12} />
            <p className="text-xs">SHARE</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-xs mt-[2rem] text-gray-400">
          <p>
            SKU: <span className="">{product.id}</span>
          </p>
          <p>
            CATEGORY: <span className="">{product.category}</span>
          </p>
          <div className="flex items-center gap-2">
            <p>TAGS:</p>
            <div className="text-black flex gap-2 flex-wrap">
              {product.tags.map((tag, i) => (
                <Button
                  className="dark:bg-slate-700 h-[2rem] p-2 dark:text-white dark:hover:bg-slate-600"
                  key={i}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
