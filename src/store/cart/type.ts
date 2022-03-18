import { ProductType } from "../../components/ProductItem"

export type CartState = {
  products: ProductType[]
  open: boolean
  toggle: () => void
  addProduct: (product: ProductType) => void
  remove: (product: ProductType) => void
}
  