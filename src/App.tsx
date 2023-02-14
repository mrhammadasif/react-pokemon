import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PokemonList from './components/PokemonList'
import { RecoilRoot } from 'recoil'
import AnotherComponent from './components/AnotherComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PokemonList />
      <AnotherComponent />
    </div>
  )
}

export default App
