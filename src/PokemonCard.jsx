import { useState } from 'react'
import './PokemonCard.css'

export default function PokemonCard({ name }) {
  const randomNumber = Math.floor(Math.random() * 1025) + 1
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`

  const [reload, setReload] = useState(false)

  return (
    <div className="PokemonCard">
      <h2>{name}</h2>
      <h3>#{randomNumber}</h3>
      <img className="pokemon_img" src={pokemonImage} alt="pokemon" />
      <div className="card">
        <button onClick={() => setReload((prev) => !prev)}>Click</button>
      </div>
    </div>
  )
}
