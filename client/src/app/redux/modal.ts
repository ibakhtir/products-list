import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "./store"

interface IModalIS {
  modalDisplay: boolean
  modalView: string
}

const initialState: IModalIS = {
  modalDisplay: false,
  modalView: "ADD_VIEW"
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
    }
  }
})

const { reducer: modalReducer, actions } = modalSlice

export const { openModal, closeModal, setModalView } = actions

export const getModalDisplay = (state: RootState) => state.modal.modalDisplay

export const getModalView = (state: RootState) => state.modal.modalView

export default modalReducer
