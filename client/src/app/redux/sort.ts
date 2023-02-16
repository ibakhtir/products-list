import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "./store"

interface ISortListItem {
  value: string
  label: string
}

interface ISortIS {
  selectedSort: ISortListItem
}

const initialState: ISortIS = {
  selectedSort: {
    value: "name-asc",
    label: "Name: A-Z"
  }
}

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<ISortListItem>) {
      state.selectedSort = action.payload
    }
  }
})

const { reducer: sortReducer, actions } = sortSlice

export const { setSort } = actions

export const getSort = (state: RootState) => state.sort.selectedSort

export default sortReducer
