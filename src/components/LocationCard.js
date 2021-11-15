import { Link } from 'react-router-dom'

function LocationCard({id, name, image, hours, address, zipcode}){
  return <div className="card">
    <Link to={`/locations/${id}`}><h3>{name}</h3></Link>
    <Link to={`/locations/${id}`}><img src={image} alt={name}/></Link>
    <ul>
      <li>Address: {address}</li>
      <li>Zip Code: {zipcode}</li>
      <li>Hours: {hours}</li>
    </ul>
  </div>
}

export default LocationCard