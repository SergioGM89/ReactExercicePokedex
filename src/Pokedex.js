import './pokedex.css'
import PokeData from './PokeData';
import PokeForm from './PokeForm';
import {useState} from 'react';

function Pokedex() {

  const [id, setId] = useState(undefined);

  return (
    <div>
      <h1>Pokedex</h1>
      <PokeForm func={setId}/>
      {id && <PokeData id={id}/>}
    </div>
  )
}

export default Pokedex
