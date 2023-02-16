import { IProduct, INewProduct } from "@/types"

import httpService from "./http.service"

const productEndpoint = "/product/"

const productService = {
  get: async () => {
    const { data } = await httpService.get(productEndpoint)

    return data
  },

  create: async (payload: INewProduct) => {
    const { data } = await httpService.post(productEndpoint, payload)

    return data
  },

  update: async (payload: IProduct) => {
    const { data } = await httpService.patch(
      productEndpoint + payload._id,
      payload
    )

    return data
  },

  remove: async (id: string) => {
    const { data } = await httpService.delete(productEndpoint + id)

    return data
  }
}

export default productService
