import React from 'react'

type AppProps = {
  msg: string
}

const App: React.FC<AppProps> = ({ msg }) => (
  <div className="App">
    <h1>{ msg }</h1>
  </div>
)

export default App
