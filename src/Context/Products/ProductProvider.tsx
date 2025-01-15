import { createContext, ReactNode, useState } from "react";
import { products as bestsellingproducts } from "@/data/ProductsBestSelling";
import { products as recommendedproducts } from "@/data/ProductsRecommended";
export type Review = {
  name: string;
  date: string;
  rating: number;
  picture: string;
  comment: string;
};

export type AdditionalInfo = Record<
  string,
  string | number | (string | number)[] | undefined
>;

export type ProductType = {
  id: string;
  name: string;
  newPrice: string;
  oldPrice: string;
  image: string;
  images: string[];
  brand: string;
  category: string;
  description: string;
  additionalInfo?: AdditionalInfo;
  tags: string[];
  reviews: Review[];
};

// Create product arrays
const recommendedProduct: ProductType[] = [...recommendedproducts];
const bestSellingProduct: ProductType[] = [...bestsellingproducts];
const allProduct: ProductType[] = [
  ...recommendedproducts,
  ...bestsellingproducts
];

// Define the context type
type ProductContextType = {
  recommendedProducts: ProductType[];
  bestSellingProducts: ProductType[];
  allProducts: ProductType[];
  filterProducts: ProductType[];
  setFilterProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

const producstState: any = {};
// Create the context with a default value (or use `undefined` initially)
export const ProductContext = createContext<ProductContextType>(producstState);

// Define the ProductProvider component
type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children
}) => {
  const [recommendedProducts] = useState<ProductType[]>(recommendedProduct);
  const [bestSellingProducts] = useState<ProductType[]>(bestSellingProduct);
  const [allProducts] = useState<ProductType[]>(allProduct);
  const [filterProducts, setFilterProducts] =
    useState<ProductType[]>(allProduct);

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        bestSellingProducts,
        recommendedProducts,
        filterProducts,
        setFilterProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
