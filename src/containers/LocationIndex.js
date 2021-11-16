import { useEffect } from "react"
import { clearLocation, getLocations } from '../redux/actionCreators'
import { connect } from 'react-redux'
import LocationCard from "../components/LocationCard"
import { useParams, useLocation } from 'react-router-dom'

function LocationIndex({getLocations, locations}){
  const zip = useLocation().pathname.toString()
  const zipSearch = parseInt(zip.substr(zip.length - 5))

  useEffect(() => {
  getLocations(zipSearch)
  return clearLocation
}, [getLocations, zipSearch, clearLocation])

  console.log(locations)

  return <div className="LocationIndex">
    {locations.map(location => <LocationCard {...location} key={location.id}/>)}
  </div>
}

const mapStateToProps = (state) => {
  return {locations: state.locations}
}

export default connect(mapStateToProps, { getLocations })(LocationIndex)