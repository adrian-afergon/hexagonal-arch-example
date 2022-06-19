import { ProductList } from './ProductList'
import * as React from 'react'
import { Product } from '../../domain/models/Product'
import { productService } from '../../domain/services/Product.service'
import { Basket } from '../../domain/models/Basket'
import { basketService } from '../../domain/services/Basket.service'
import { BasketDetails } from './BasketDetails'

export const ProductListContainer: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([])

  const [basket, setBasket] = React.useState<Basket | null>(null)

  const handleAddToCart = (product: Product) => {
    setBasket(basketService.addProductToBasket(product, basket))
  }

  React.useEffect(() => {
    productService.getProducts().then(setProducts)
  }, [])

  return <><ProductList onSelectProduct={handleAddToCart} products={products}/>
  <BasketDetails basket={basket} />
  </>
}
