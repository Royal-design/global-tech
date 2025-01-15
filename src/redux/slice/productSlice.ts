import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "./cartSlice";

interface ProductState {
  recommendedProducts: ProductType[];
  filteredRecommended: ProductType[];
  bestsellingProducts: ProductType[];
  filteredBestselling: ProductType[];
  searchQuery: string;
}
const initialState: ProductState = {
  recommendedProducts: [],
  filteredRecommended: [],
  bestsellingProducts: [],
  filteredBestselling: [],
  searchQuery: ""
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setRecommendedProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.recommendedProducts = action.payload;
      state.filteredRecommended = action.payload;
    },
    setBestsellingProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.bestsellingProducts = action.payload;
      state.filteredBestselling = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;

      // Filter both sections independently based on the same query
      state.filteredRecommended = state.recommendedProducts.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.filteredBestselling = state.bestsellingProducts.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    }
  }
});

export const {
  setBestsellingProducts,
  setSearchQuery,
  setRecommendedProducts
} = productSlice.actions;

export default productSlice.reducer;
