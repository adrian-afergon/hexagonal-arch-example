import React from 'react'
import {ProductList} from './ProductList'
import {Basket} from '../../domain/models/Basket'
import {Product} from '../../domain/models/Product'
import {basketService} from '../../domain/services/Basket.service'
import {BasketDetails} from './BasketDetails';

type ProductPageProps = {
  products: Product[]
}

export const ProductsPage: React.FC<ProductPageProps> = ({products}) => {
  const [basket, setBasket] = React.useState<Basket | null>(null)

  const handleAddToCart = (product: Product) => {
    setBasket(basketService.addProductToBasket(product, basket))
  }

  return <>
    <h1>Welcome to Your Next.js + TypeScript App</h1>
    <ProductList onSelectProduct={handleAddToCart} products={products}/>
    <BasketDetails basket={basket}/>
  </>
}