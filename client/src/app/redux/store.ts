import { configureStore } from "@reduxjs/toolkit"

import productsReducer from "./products"
import commentsReducer from "./comments"
import modalReducer from "./modal"
import sortReducer from "./sort"

const store = configureStore({
  reducer: {
    products: productsReducer,
    comments: commentsReducer,
    modal: modalReducer,
    sort: sortReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
