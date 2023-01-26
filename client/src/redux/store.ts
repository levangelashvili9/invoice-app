import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import { invoiceApi } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    [invoiceApi.reducerPath]: invoiceApi.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(invoiceApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
