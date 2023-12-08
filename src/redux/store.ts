import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import { cartReducer } from "./cart/cartSlice";
import { productsReducer } from "./products/productsSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["cart", "products"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["filledCart"],
};

const favoritePersistConfig = {
  key: "products",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  products: persistReducer(favoritePersistConfig, productsReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
