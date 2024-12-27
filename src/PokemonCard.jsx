import { useState } from 'react'
import './PokemonCard.css'

export default function PokemonCard() {
  const randomNumber = Math.floor(Math.random() * 1025) + 1
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`

  const [count, setCount] = useState(0)

  return (
    <div className="PokemonCard">
      <h1>Pokemon Card #{randomNumber}</h1>
      <img src={pokemonImage} alt="pokemon" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Click</button>
      </div>
    </div>
  )
}
