import "./Pokecard.css";

function Pokecard({ id, name, type, baseXP }) {
  const imgSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className='Pokecard'>
      <h3 className='Pokecard-title'>{name}</h3>
      <div className='Pokecard-data'>
        <img src={imgSource} />
        <p>Type: {type}</p>
        <p>EXP: {baseXP}</p>
      </div>
    </div>
  );
}

export default Pokecard;
