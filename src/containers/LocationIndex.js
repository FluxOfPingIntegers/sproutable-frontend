import { useEffect } from "react"
import { getLocations } from '../redux/actionCreators'
import { connect } from 'react-redux'
import LocationCard from "../components/LocationCard"

function LocationIndex({getLocations, locations}){
  useEffect(getLocations, [getLocations])

  return <div className="cards">
      {locations.map(location => <LocationCard {...location} key={location.id}/>)}
  </div>
}

const mapStateToProps = (state) => {
  return {locations: state.locations}
}

export default connect(mapStateToProps, { getLocations })(LocationIndex)