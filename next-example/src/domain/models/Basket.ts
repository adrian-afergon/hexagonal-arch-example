import { Product } from './Product'

export type BasketId = string

export type Basket = {
  id: BasketId
  items: Product[]
}
