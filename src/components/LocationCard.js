import { Link } from 'react-router-dom'

function LocationCard({id, name, image}){
  return <div className="card">
    <Link to={`/locations/${id}`}><h3>{name}</h3></Link>
    <Link to={`/locations/${id}`}><img src={image} alt={name}/></Link>
  </div>
}

export default LocationCard