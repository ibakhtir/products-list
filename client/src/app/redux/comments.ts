import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit"

import { IComment, INewComment } from "@/types"
import commentService from "@/services/comment.service"

import { AppDispatch, RootState } from "./store"

interface ICommentsIS {
  entities: IComment[]
  isLoading: boolean
  error: string | null
}

const initialState: ICommentsIS = {
  entities: [],
  isLoading: true,
  error: null
}

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    commentsRequested: (state) => {
      state.isLoading = true
    },
    commentsReceived: (state, action: PayloadAction<IComment[]>) => {
      state.entities = action.payload
      state.isLoading = false
    },
    commentsRequestFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
    commentCreated: (state, action: PayloadAction<IComment>) => {
      state.entities.push(action.payload)
    },
    commentRemoved: (state, action: PayloadAction<string>) => {
      state.entities = state.entities.filter((c) => c._id !== action.payload)
    }
  }
})

const { reducer: commentsReducer, actions } = commentsSlice

const {
  commentsRequested,
  commentsReceived,
  commentsRequestFailed,
  commentCreated,
  commentRemoved
} = actions

const commentCreateRequested = createAction("comments/commentCreateRequested")
const commentCreateFailed = createAction("comments/commentCreateFailed")
const commentRemoveRequested = createAction("comments/commentRemoveRequested")
const commentRemoveFailed = createAction("comments/commentRemoveFailed")

export function createComment(payload: INewComment) {
  return async (dispatch: AppDispatch) => {
    dispatch(commentCreateRequested())

    try {
      const content = await commentService.create(payload)

      dispatch(commentCreated(content))
    } catch (error) {
      dispatch(commentCreateFailed())
    }
  }
}

export function removeComment(commentId: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(commentRemoveRequested())

    try {
      const content = await commentService.remove(commentId)

      if (content) {
        dispatch(commentRemoved(commentId))
      }
    } catch (error) {
      dispatch(commentRemoveFailed())
    }
  }
}

export function loadCommentsList(productId: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(commentsRequested())

    try {
      const content = await commentService.get(productId)

      dispatch(commentsReceived(content))
    } catch (error) {
      dispatch(commentsRequestFailed((error as Error).message))
    }
  }
}

export const getComments = (state: RootState) => state.comments.entities

export const getCommentsLoadingStatus = (state: RootState) =>
  state.comments.isLoading

export default commentsReducer
