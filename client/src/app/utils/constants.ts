export const config = {
  apiEndpoint: "http://localhost:8080/api"
}

export const routes = {
  HOME_ROUTE: "/",
  PRODUCT_ROUTE: "/product"
}

export const sortList = [
  {
    value: "name-asc",
    label: "Name: A-Z"
  },
  {
    value: "name-desc",
    label: "Name: Z-A"
  },
  {
    value: "count-asc",
    label: "Count: Low to high"
  },
  {
    value: "count-desc",
    label: "Count: High to low"
  }
]
