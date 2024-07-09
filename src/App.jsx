import './App.css'
import Pokedex from './Pokedex.jsx'
import defaultPokemon from "./assets/defaultPokemon";

function App() {
  return (
    <div className="App">
      <Pokedex defaultPokemon={defaultPokemon}/>
    </div>
  )
}

export default App
