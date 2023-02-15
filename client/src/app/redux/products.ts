import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit"

import { IProduct, INewProduct } from "@/types"
import productService from "@/services/product.service"

import { AppDispatch, RootState } from "./store"

interface IProductsIS {
  entities: IProduct[]
  isLoading: boolean
  error: string | null
}

const initialState: IProductsIS = {
  entities: [],
  isLoading: true,
  error: null
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsRequested: (state) => {
      state.isLoading = true
    },
    productsReceived: (state, action: PayloadAction<IProduct[]>) => {
      state.entities = action.payload
      state.isLoading = false
    },
    productsRequestFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
    productCreated: (state, action: PayloadAction<IProduct>) => {
      state.entities.push(action.payload)
    },
    productUpdated: (state, action: PayloadAction<IProduct>) => {
      state.entities[
        state.entities.findIndex((p) => p._id === action.payload._id)
      ] = action.payload
    },
    productRemoved: (state, action: PayloadAction<string>) => {
      state.entities = state.entities.filter((p) => p._id !== action.payload)
    }
  }
})

const { reducer: productsReducer, actions } = productsSlice

const {
  productsRequested,
  productsReceived,
  productsRequestFailed,
  productCreated,
  productUpdated,
  productRemoved
} = actions

const productCreateRequested = createAction("products/productCreateRequested")
const productCreateFailed = createAction("products/productCreateFailed")
const productUpdateRequested = createAction("products/productUpdateRequested")
const productUpdateFailed = createAction("products/productUpdateFailed")
const productRemoveRequested = createAction("products/productRemoveRequested")
const productRemoveFailed = createAction("products/productRemoveFailed")

export function createProduct(payload: INewProduct) {
  return async (dispatch: AppDispatch) => {
    dispatch(productCreateRequested())

    try {
      const content = await productService.create(payload)

      dispatch(productCreated(content))
    } catch (error) {
      dispatch(productCreateFailed())
    }
  }
}

export function updateProduct(payload: IProduct) {
  return async (dispatch: AppDispatch) => {
    dispatch(productUpdateRequested())

    try {
      const content = await productService.update(payload)

      dispatch(productUpdated(content))
    } catch (error) {
      dispatch(productUpdateFailed())
    }
  }
}

export function removeProduct(productId: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(productRemoveRequested())

    try {
      const content = await productService.remove(productId)

      if (!content) {
        dispatch(productRemoved(productId))
      }
    } catch (error) {
      dispatch(productRemoveFailed())
    }
  }
}

export function loadProductsList() {
  return async (dispatch: AppDispatch) => {
    dispatch(productsRequested())

    try {
      const content = await productService.get()

      dispatch(productsReceived(content))
    } catch (error) {
      dispatch(productsRequestFailed((error as Error).message))
    }
  }
}

export const getProducts = (state: RootState) => state.products.entities

export const getProductById = (productId: string) => (state: RootState) =>
  state.products.entities.find((p) => p._id === productId)

export const getProductsLoadingStatus = (state: RootState) =>
  state.products.isLoading

export default productsReducer
