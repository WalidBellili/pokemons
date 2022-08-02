import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [randomPokemon, setRandomPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon/1"
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [randomPokemon]);

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
    <main>
      <img
        src={pokemons.sprites.front_default}
        alt=""
        width={250}
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
      <button onClick={randomPokemonFunction}>Random pokemon</button>
    </main>
  );
}

export default App;
