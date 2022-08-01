import { useEffect, useState } from "react";
import Home from "./components/Home";
import _ from "lodash";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [findPokemonRandom, setfindPokemonRandom] = useState(null);

  useEffect(() => {
    fetchData();
    fetchDataId();
  }, []);

  const fetchData = async () => {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const response = await request.json();
    setPokemons(response);
  };
  const fetchDataId = async () => {
    const requestId = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const responseId = await requestId.json();

    setfindPokemonRandom(responseId);
    const filteredPokemon = findPokemonRandom.filter((pokemon) => {
      console.log(pokemon);
    });
  };

  //  si pokemons = null
  if (pokemons === null) {
    return <div></div>;
  }
  if (findPokemonRandom === null) {
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
    </div>
  );
}

export default App;
