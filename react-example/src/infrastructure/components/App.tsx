import React from 'react'
import { ProductList } from './ProductList'

type AppProps = {
  msg: string
}

const App: React.FC<AppProps> = ({ msg }) => (
  <div className="App">
    <h1>{msg}</h1>
    <ProductList/>
  </div>
)

export default App
