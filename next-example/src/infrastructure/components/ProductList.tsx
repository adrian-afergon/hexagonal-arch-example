import * as React from 'react'
import { Product } from '../../domain/models/Product'

type ProductListProps = {
  products: Product[]
  onSelectProduct: (product: Product) => void
}

export const ProductList: React.FC<ProductListProps> = ({ products, onSelectProduct }) =>
  (
    <ul>
      {products.map((product) => <li key={product.id}>
        <button onClick={() => {
          onSelectProduct(product)
        }}>{product.title}</button>
      </li>)}
    </ul>
  )
