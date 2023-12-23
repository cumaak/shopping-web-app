import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './features/categoriesSlice'
import cartListSlice from './features/cartListSlice'
import favListSlice from './features/favListSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    cartList: cartListSlice,
    favList: favListSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch