import { useParams } from 'react-router-dom'
import {connect} from 'react-redux'
import {getLocation, clearLocation} from '../redux/actionCreators'
import { useEffect } from 'react'

function LocationShow({id, name, image, description, hours, address, zipcode}){
  const locationId = useParams().id

  useEffect(() => {
    getLocation(locationId)
    return clearLocation
  }, [getLocation, locationId, clearLocation])

  const loading = () => <p>...Loading...</p>

  const loadedPage = () => <div className="show">
    <h1>{name}</h1>
    <img src={image} alt={name}/>
    <ul>
      <li>Address: {address}, Zipcode: {zipcode}</li>
      <li>Hours: {hours}</li>
    </ul>
    <p>{description}</p>
  </div>

  return id ? loadedPage() : loading()
}

const mapStateToProps = (state) => {
  return {...state.selectedLocation}
}

export default connect(mapStateToProps, {getLocation, clearLocation})(LocationShow);