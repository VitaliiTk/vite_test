// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import PokemonCard from './PokemonCard'
import Posts from './Posts'
import Protiv from './Protiv'

const name1 = 'Pokemon 1'
const name2 = 'Pokemon 2'

function App() {
  return (
    <>
      <section id="pokemons">
        <PokemonCard name={name1} />
        <Protiv />
        <PokemonCard name={name2} />
      </section>
      <Posts />
    </>
  )
}

export default App
