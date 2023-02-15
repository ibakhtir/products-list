import axios from "axios"

import { config } from "@/utils/constants"

const http = axios.create({
  baseURL: config.apiEndpoint
})

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  patch: http.patch,
  delete: http.delete
}

export default httpService
