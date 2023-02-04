import './loader.css'

function Loading(props) {
  
  const {id} = props;

  return (
    <div className="loading">
      <div className="loader"></div>
      Cargando datos del pokemonID: {id}
    </div>
  )
}

export default Loading
