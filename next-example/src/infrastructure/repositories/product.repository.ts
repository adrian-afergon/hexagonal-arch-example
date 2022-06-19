import { http } from '../http/http'
import { ProductDTO } from '../http/dto/ProductDTO'
import { Product } from '../../domain/models/Product'

export const productRepository = {
  getProducts: async () => {
    const products = await http.get<ProductDTO[]>('http://localhost:3001/products')
    // we can extract this transform to a function inside this file to be reused by different methods
    return products.map((productDto): Product => ({
      id: productDto.product_id,
      title: productDto.title,
      price: Number(productDto.price)
    }))
  }
}
