// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import PokemonCard from './PokemonCard'
import Protiv from './Protiv'

const name1 = 'Pikachu'
const name2 = 'Charmander'

function App() {
  return (
    <>
      <PokemonCard name={name1} />
      <Protiv />
      <PokemonCard name={name2} />
    </>
  )
}

export default App
