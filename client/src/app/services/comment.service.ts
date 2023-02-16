import { INewComment } from "@/types"

import httpService from "./http.service"

const commentEndpoint = "/comment/"

const commentService = {
  get: async (productId: string) => {
    const { data } = await httpService.get(commentEndpoint, {
      params: {
        orderBy: "productId",
        equalTo: `${productId}`
      }
    })

    return data
  },

  create: async (payload: INewComment) => {
    const { data } = await httpService.post(commentEndpoint, payload)

    return data
  },

  remove: async (commentId: string) => {
    const { data } = await httpService.delete(commentEndpoint + commentId)

    return data
  }
}

export default commentService
