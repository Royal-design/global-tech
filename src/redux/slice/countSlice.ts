import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountState {
  counts: Record<string, number>;
}
interface UpdateCountPayload {
  productId: string;
}
const initialState: CountState = {
  counts: {}
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<UpdateCountPayload>) => {
      const { productId } = action.payload;
      state.counts[productId] = (state.counts[productId] || 0) + 1;
    },
    decrement: (state, action: PayloadAction<UpdateCountPayload>) => {
      const { productId } = action.payload;
      if (state.counts[productId] > 0) {
        state.counts[productId] -= 1;
      }
    }
  }
});

export const { increment, decrement } = countSlice.actions;
