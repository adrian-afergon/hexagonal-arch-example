import React from 'react'
import { ProductList } from './ProductList'
import { Basket } from '../../domain/models/Basket'
import { Product } from '../../domain/models/Product'
import { basketService } from '../../domain/services/Basket.service'

type AppProps = {
  msg: string
}

const App: React.FC<AppProps> = ({ msg }) => {
  const [basket, setBasket] = React.useState<Basket|null>(null)

  const handleAddToCart = (product: Product) => {
    setBasket(basketService.addProductToBasket(product, basket))
  }

  return (
    <div className="App">
      <h1>{msg}</h1>
      <ProductList onSelectProduct={handleAddToCart}/>
      { basket && <p>Items on basket: {basket.items.length}</p>}
    </div>
  )
}

export default App
