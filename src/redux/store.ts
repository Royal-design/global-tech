import { Action, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slice/cartSlice";
import { countSlice } from "./slice/countSlice";
import { favouriteSlice } from "./slice/favouriteSlice";
import { productSlice } from "./slice/productSlice";
import { authSlice } from "./slice/authSlice";
import { ThunkAction } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    count: countSlice.reducer,
    favourite: favouriteSlice.reducer,
    products: productSlice.reducer,
    auth: authSlice.reducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Define AppThunk type for asynchronous actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
