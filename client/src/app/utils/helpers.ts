import { IProduct } from "@/types"

interface IData {
  [key: string]: string | number
}

export function checkIsEmpty(data: IData) {
  const errors: any = {}

  Object.keys(data).forEach((item) => {
    String(data[item]).trim() === ""
      ? (errors[item] = "Field is required")
      : (errors[item] = "")
  })

  return errors
}

export function checkErrors(data: IData) {
  return Object.values(data).every((item) => item === "")
}

export function rangeMap(n: number, fn: (i: number) => any) {
  const arr = []

  while (n > arr.length) {
    arr.push(fn(arr.length))
  }

  return arr
}

export function sortBy(sortValue: string, data: IProduct[]) {
  const sortedData = [...data]

  if (sortValue === "name-asc") {
    return sortedData.sort((a, b) => a.name.localeCompare(b.name))
  }

  if (sortValue === "name-desc") {
    return sortedData.sort((a, b) => b.name.localeCompare(a.name))
  }

  if (sortValue === "count-asc") {
    return sortedData.sort((a, b) => +a.count - +b.count)
  }

  if (sortValue === "count-desc") {
    return sortedData.sort((a, b) => +b.count - +a.count)
  }

  return data
}
