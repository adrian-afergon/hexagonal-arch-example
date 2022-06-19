import React from 'react'
import { ProductListContainer } from './ProductListContainer'

type AppProps = {
  msg: string
}

const App: React.FC<AppProps> = ({ msg }) => {
  return (
    <div className="App">
      <h1>{msg}</h1>
      <ProductListContainer/>
    </div>
  )
}

export default App
