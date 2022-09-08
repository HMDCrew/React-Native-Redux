import { configureStore } from '@reduxjs/toolkit';
import productsReducers from './features/storeSlice'
import categoriesReducers from './features/categoriesSlice'

export const store = configureStore({
  reducer: {
    products: productsReducers,
    categories: categoriesReducers,
  },
});