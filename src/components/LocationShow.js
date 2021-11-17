import { useLocation } from 'react-router-dom'
import {connect} from 'react-redux'
import {getLocation, clearLocation} from '../redux/actionCreators'
import { useEffect } from 'react'

function LocationShow(props){//{id, name, image, description, hours, address, zipcode}){
  const {usda_id, name, image, description, hours, address, zipcode} = props.location
  const location = useLocation().pathname.toString()
  const locationId = parseInt(location.split("s/")[1])

  useEffect(() => {
    props.getLocation(locationId)
    return clearLocation
  }, [getLocation, locationId, clearLocation])

  const loading = () => <p>...Loading...</p>

  const loadedPage = () => <div className="LocationShow">
    <h1>{name}</h1>
    <img src={image} alt={name}/>
    <ul>
      <li>Address: {address}, Zipcode: {zipcode}</li>
      <li>Hours: {hours}</li>
    </ul>
    <p>{description}</p>
  </div>

  return usda_id ? loadedPage() : loading()
}

const mapStateToProps = (state) => {
  return {location: state.selectedLocation}
}

export default connect(mapStateToProps, {getLocation, clearLocation})(LocationShow);