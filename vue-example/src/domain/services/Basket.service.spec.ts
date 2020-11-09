import { Product } from '../models/Product'
import { basketService } from './Basket.service'
import { Basket } from '../models/Basket'

describe('Basket Service', () => {
  it('creates a basket given a product and basket doesn\'t exists', function () {
    const product: Product = { id: 'irrelevant_id', title: 'irrelevant title', price: 0 }
    const basket = basketService.addProductToBasket(product)
    expect(basket).toBeTruthy()
    expect(basket.items.length).toBe(1)
  })

  it('add a given product to the used basket', () => {
    const product: Product = { id: 'irrelevant_id', title: 'irrelevant title', price: 0 }
    const currentBasket: Basket = { id: 'irrelevant_cart_id', items: [product] }
    const basket = basketService.addProductToBasket({ ...product, id: 'different product' }, currentBasket)
    expect(basket).toBeTruthy()
    expect(basket.items.length).toBe(2)
  })

  it('skip duplicate products when it exists at basket', () => {
    const product: Product = { id: 'irrelevant_id', title: 'irrelevant title', price: 0 }
    const currentBasket: Basket = { id: 'irrelevant_cart_id', items: [product] }
    const basket = basketService.addProductToBasket(product, currentBasket)
    expect(basket).toBeTruthy()
    expect(basket.items.length).toBe(1)
  })
})
