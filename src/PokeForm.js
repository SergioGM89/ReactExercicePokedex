import { getPokemonData } from "./pokemon_api"
import { useState, useEffect } from "react";


const DEFAULT_LANGUAGE = '7' // Español

function pokemonsInLanguage(pokemons, language) {
  return pokemons?.filter(pokemon => pokemon.local_language_id === language)
}

function PokeForm(props) {

  const { func } = props;
  const [allPokemonData, setAllPokemonData] = useState(undefined);
  const [data, setData] = useState(undefined);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [inputValue, setInputValue] = useState('');

  function callFunctionProps(e, inputValue){
    e.preventDefault();
    let pokemon = data?.find(pokemon => pokemon.name === inputValue);
    pokemon? func(pokemon.pokemon_species_id): null;
  }


  async function getPokemonList() {
    setAllPokemonData(await getPokemonData());
  }

  function getDatalist() {
    setData(pokemonsInLanguage(allPokemonData, language));
  }

  useEffect(() => {
    getPokemonList();
  }, []);

  useEffect(() => {
    getDatalist();
  }, [allPokemonData, language]);


  return (
    <div>
      <h2>PokeForm</h2>
      <form>
        <label>
          Nombre del pokèmon:
          <input type="text" name="name" list="pokemons" onChange={e => setInputValue(e.target.value)}/>
        </label>
        <datalist id="pokemons">
          {JSON.stringify(data)}
        </datalist>
        <label>
          Lenguaje
          <select  onChange={e=>setLanguage(e.target.value)}>
            <option value="7">Español</option>
            <option value="5">Francés</option>
            <option value="6">Alemán</option>
          </select>
        </label>
        <input type="submit" value="Search" onClick={(e) => callFunctionProps(e, inputValue)}/>
      </form>
    </div>
  )
}

export default PokeForm
