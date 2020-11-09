import { productRepository } from '../../infrastructure/repositories/product.repository'

export const productService = {
  getProducts: () => {
    return productRepository.getProducts()
  }
}
