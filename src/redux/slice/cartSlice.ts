import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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

export interface CartItem {
  id: string;
  rating?: number;
  name: string;
  newPrice: string;
  oldPrice: string;
  image: string;
  images: string[];
  qty: number;
  totalPrice: number;
  brand: string;
  category: string;
  description: string;
  additionalInfo?: AdditionalInfo;
  tags: string[];
  reviews: Review[];
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}
const initialState: CartState = (() => {
  try {
    const storedData = JSON.parse(localStorage.getItem("cart") || "{}");
    return {
      items: Array.isArray(storedData.items) ? storedData.items : [],
      totalQuantity:
        typeof storedData.totalQuantity === "number"
          ? storedData.totalQuantity
          : 0,
      totalPrice:
        typeof storedData.totalPrice === "number" ? storedData.totalPrice : 0
    };
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return {
      items: [],
      totalQuantity: 0,
      totalPrice: 0
    };
  }
})();

const cleanPrice = (price: string): number => {
  return parseFloat(price.replace(/,/g, ""));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        id,
        name,
        newPrice,
        oldPrice,
        image,
        images,
        brand,
        description,
        reviews,
        rating,
        tags,
        additionalInfo,
        category,
        qty = 1
      }: CartItem = action.payload;
      const price = cleanPrice(newPrice);
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += qty;
        existingItem.totalPrice =
          cleanPrice(existingItem.newPrice) * existingItem.qty;
      } else {
        state.items.push({
          id,
          rating,
          name,
          newPrice,
          oldPrice,
          image,
          images,
          qty,
          brand,
          category,
          description,
          reviews,
          tags,
          additionalInfo,
          totalPrice: qty * price
        });
      }
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.qty,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("Product added to cart");
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.qty,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("Product removed from cart!");
    },
    updateCart: (state, action: PayloadAction<{ id: string; qty: number }>) => {
      const { id, qty } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty = qty;
        existingItem.totalPrice = cleanPrice(existingItem.newPrice) * qty;
      }
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.qty,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("Product quantity updated");
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("All products quantity cleared");
    },
    order: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("Order sent successfully");
    }
  }
});

// Define the ProductType with new fields: AdditionalInfo and tags

export const { addToCart, removeFromCart, clearCart, updateCart, order } =
  cartSlice.actions;

export default cartSlice.reducer;
