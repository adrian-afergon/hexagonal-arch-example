import { Product } from '../models/Product'
import { Basket } from '../models/Basket'
import { generateUid } from '../../infrastructure/uid/uid'

const hasProduct = (basket: Basket, product: Product) => basket.items.find((item) => item.id === product.id)

const createBasket = (product: Product) => ({
  id: generateUid(),
  items: [product]
})

const increaseBasket = (basket: Basket, product: Product) => ({
  ...basket,
  items: [...basket.items, product]
})

const addProductToBasket = (product: Product, basket?: Basket|null): Basket =>
  basket
    ? hasProduct(basket, product)
        ? basket
        : increaseBasket(basket, product)
    : createBasket(product)

export const basketService = {
  addProductToBasket
}
