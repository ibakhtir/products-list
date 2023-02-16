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
