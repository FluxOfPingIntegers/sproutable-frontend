import { useEffect } from "react"
import { clearLocation, getLocations } from '../redux/actionCreators'
import { connect } from 'react-redux'
import LocationCard from "../components/LocationCard"
import Loading from "../components/Loading"
import { useLocation } from 'react-router-dom'

function LocationIndex({getLocations, locations}){
  const zip = useLocation().pathname.toString()
  const zipSearch = zip.substr(zip.length - 5)

  useEffect(() => {
  getLocations(zipSearch)
  return clearLocation
}, [getLocations, zipSearch, clearLocation])

  const locationsList = () => {
    return <div id="LocationIndex">
    {locations.map(location => <LocationCard {...location} key={location.id}/>)}
  </div>
  }

  const locationDisplay = (locations.length > 0 ? locationsList() : <Loading />)


  return locationDisplay
}

const mapStateToProps = (state) => {
  return {locations: state.locations}
}

export default connect(mapStateToProps, { getLocations })(LocationIndex)