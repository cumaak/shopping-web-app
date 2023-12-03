import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './features/categoriesSlice'
import productsSlice from './features/productsSlice'
import singleProductSlice from './features/singleProductSlice'
import searchProductsSlice from './features/searchProductsSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    product: singleProductSlice,
    searchProducts: searchProductsSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch