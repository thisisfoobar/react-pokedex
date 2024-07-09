import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex(props) {
  return (
    <div className='Pokedex'>
      <h1 className='Pokedex-title'>Pokedex</h1>
      <div className='Pokedex-cards'>
        {props.defaultPokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            baseXP={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
