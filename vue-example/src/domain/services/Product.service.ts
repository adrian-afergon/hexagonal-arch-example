import { getProducts as getProductsRepository } from '../../infrastructure/repositories/product.repository'

export const getProducts = () => {
  return getProductsRepository()
}
