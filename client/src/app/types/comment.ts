export interface INewComment {
  description: string
  productId: string
}

export interface IComment extends INewComment {
  _id: string
  createdAt?: Date
  updatedAt?: Date
  __v?: number
}
