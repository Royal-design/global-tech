import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slice/cartSlice";
import { countSlice } from "./slice/countSlice";
import { favouriteSlice } from "./slice/favouriteSlice";
import { productSlice } from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    count: countSlice.reducer,
    favourite: favouriteSlice.reducer,
    products: productSlice.reducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
