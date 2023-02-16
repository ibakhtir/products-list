import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "./store"

interface IModalIS {
  modalDisplay: boolean
  modalView: string
  activeProduct?: string | null
}

const initialState: IModalIS = {
  modalDisplay: false,
  modalView: "ADD_VIEW",
  activeProduct: null
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalDisplay = true
    },
    closeModal: (state) => {
      state.modalDisplay = false
    },
    setModalView: (state, action: PayloadAction<string>) => {
      state.modalView = action.payload
    },
    setActiveProduct: (state, action: PayloadAction<string>) => {
      state.activeProduct = action.payload
    }
  }
})

const { reducer: modalReducer, actions } = modalSlice

export const { openModal, closeModal, setModalView, setActiveProduct } = actions

export const getModalDisplay = (state: RootState) => state.modal.modalDisplay

export const getModalView = (state: RootState) => state.modal.modalView

export const getActiveProduct = (state: RootState) => state.modal.activeProduct

export default modalReducer
