import { Link } from 'react-router-dom'

function LocationCard(props){
  const {id, name, image} = props

  return <div className="LocationCard">
    <Link to={`/locations/${id}`}><h3>{name}</h3></Link>
    <Link to={`/locations/${id}`}><img src={image} alt={name}/></Link>
  </div>
}

export default LocationCard