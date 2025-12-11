import productsReducer from "./slices/productsSlice";
import { configureStore } from "@reduxjs/toolkit";
import singleProductReducer from "./slices/singleProductSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
  },
  devTools: true,
});
