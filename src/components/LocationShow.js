import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {getLocation, clearLocation} from '../redux/actionCreators'
import { useEffect } from 'react'
import EventIndex from '../containers/EventIndex'

function LocationShow() {
  const dispatch = useDispatch()
  const location = useSelector((state) => (state.selectedLocation.location))
  const {usda_id, name, image, description, hours, address, zipcode} = /*props.*/location
  const locationPath = useLocation().pathname.toString()
  const locationId = parseInt(locationPath.split("s/")[1])


  useEffect(() => {
    dispatch(getLocation(locationId))
    return clearLocation
  }, [getLocation, locationId, clearLocation])

  const loading = () => <p>...Loading...</p>

  const loadedPage = () => <div className="LocationShow">
    <h1>{name}</h1>
    <img src={image} alt={name}/>
    <ul className="showInfo">
      <li>Address: {address}, Zipcode: {zipcode}</li>
      <li>Hours: {hours}</li>
    </ul>
    <p id="location-description">{description}</p>
    <EventIndex />
  </div>

  return usda_id ? loadedPage() : loading()
}

export default LocationShow;
