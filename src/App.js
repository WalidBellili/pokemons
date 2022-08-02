import { random } from "lodash";
import { useEffect, useState } from "react";
// import Home from "./components/Home";

function App() {
  const [pokemons, setPokemons] = useState(null);

  const [randomPokemon, setRandomPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon/1"
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch(randomPokemon);
    const response = await request.json();
    setPokemons(response);
  };
  const randomPokemonFunction = () => {
    const random = Math.floor(Math.random() * 151) + 1;
    setRandomPokemon(`https://pokeapi.co/api/v2/pokemon/${random}`);
  };

  //  si pokemons = null
  if (pokemons === null) {
    return <div></div>;
  }

  console.log(pokemons);
  return (
    <div>
      <img
        src={pokemons.sprites.front_default}
        alt=""
        width={150}
        height={150}
      />
      <p>{pokemons.name}</p>
      <p>height: {pokemons.height}</p>
      <p>weight: {pokemons.weight}</p>
      <br />
      <p>Types :</p>
      <br />
      {pokemons.types.map((type, i) => {
        return (
          <ul key={i}>
            <li>{type.type.name}</li>
          </ul>
        );
      })}
      <button onClick={randomPokemonFunction}></button>
    </div>
  );
}

export default App;
