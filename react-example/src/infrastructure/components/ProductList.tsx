import * as React from 'react'
import { Product } from '../../domain/models/Product'
import { productService } from '../../domain/services/Product.service'

export const ProductList: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([])

  React.useEffect(() => {
    productService.getProducts().then(setProducts)
  }, [])

  return (
    <ul>
      {products.map((product) => <li key={product.id}>{product.title}</li>)}
    </ul>
  )
}
