import * as React from 'react'
import { Product } from '../../domain/models/Product'
import { productService } from '../../domain/services/Product.service'

type ProductListProps = {
  onSelectProduct: (product: Product) => void
}

export const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
  const [products, setProducts] = React.useState<Product[]>([])

  React.useEffect(() => {
    productService.getProducts().then(setProducts)
  }, [])

  return (
    <ul>
      {products.map((product) => <li key={product.id}>
        <button onClick={() => { onSelectProduct(product) }}>{product.title}</button>
      </li>)}
    </ul>
  )
}
