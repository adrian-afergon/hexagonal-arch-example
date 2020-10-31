import * as React from 'react'
import { Product } from '../../domain/models/Product'
import { getProducts } from '../../domain/services/Product.service'

export const ProductList: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([])

  React.useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  return (
    <ul>
      {products.map((product) => <li key={product.id}>{product.title}</li>)}
    </ul>
  )
}
