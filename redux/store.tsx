import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./features/modals/modalsSlice";
import categoriesSlice from "./features/categories/categoriesSlice";
import allProductsReducer, {
  reducerSetAllProductsWithExcludeItemsByCategoryString
} from "./features/allProducts/allProductsSlice";
import cartSlice from "./features/cart/cartSlice";
import authSlice from "./features/auth/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      modal: ModalSlice,
      categories: categoriesSlice,
      allProducts: allProductsReducer,
      cart: cartSlice,
      auth: authSlice
    }
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
