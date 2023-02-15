import { IComment } from "./comment"

interface ISize {
  width: number
  height: number
}

export interface INewProduct {
  name: string
  imageUrl: string
  count: number
  weight: string
  size: ISize
  comment?: IComment[]
}

export interface IProduct extends INewProduct {
  _id: string
  createdAt: Date
  updatedAt: Date
  __v: number
}
