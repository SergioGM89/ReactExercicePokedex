import Loading from "./Loading";
import { getSpeciesSprite } from "./pokemon_api";
import { useState, useEffect } from "react";

function PokeData(props) {

  const { id } = props;
  const [data, setData] = useState(undefined);

  async function getImage(id) {
    setData(await getSpeciesSprite(id));
  }

  useEffect(() => {
    getImage(id)
  }, [data]);


  if (data) {
    return (
      <>
        <h2>PokeData</h2>
        <div className='pokedata'>
          <img alt="pokemon image" src={data} />
        </div>
      </>
    )
  } else {
    return (
      <Loading id={id}/>
    )
  }
}

export default PokeData
