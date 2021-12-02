import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//import {connect} from 'react-redux'
import {getLocation, clearLocation} from '../redux/actionCreators'
import { useEffect/*, useState*/ } from 'react'
import EventIndex from '../containers/EventIndex'

function LocationShow(/*props*/) {
  const dispatch = useDispatch()
  const location = useSelector((state) => (state.selectedLocation.location))
  const {usda_id, name, image, description, hours, address, zipcode} = /*props.*/location
  const locationPath = useLocation().pathname.toString()
  const locationId = parseInt(locationPath.split("s/")[1])
  //const [value, setValue] = useState('')

  useEffect(() => {
    dispatch(getLocation(locationId))
    return clearLocation
  }, [getLocation, locationId, clearLocation/*, value*/])

  const loading = () => <p>...Loading...</p>

  const loadedPage = () => <div className="LocationShow">
    <h1>{name}</h1>
    <img src={image} alt={name}/>
    <ul>
      <li>Address: {address}, Zipcode: {zipcode}</li>
      <li>Hours: {hours}</li>
    </ul>
    <p>{description}</p>
    <EventIndex />
  </div>

  return usda_id ? loadedPage() : loading()
}

export default LocationShow;

/*const mapStateToProps = (state) => {
  return {
    location: state.selectedLocation.location,
    events: state.selectedLocation.events
  }
}

export default connect(mapStateToProps, {getLocation, clearLocation})(LocationShow);*/