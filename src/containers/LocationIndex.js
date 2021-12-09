import { useEffect } from "react"
import { useState } from "react"
import { clearLocation, getLocations } from '../redux/actionCreators'
import { connect } from 'react-redux'
import LocationCard from "../components/LocationCard"
import { useLocation } from 'react-router-dom'

function LocationIndex({getLocations, locations}){
  const zip = useLocation().pathname.toString()
  const zipSearch = zip.substr(zip.length - 5)
  const [locationOrder, setLocationOrder] = useState(locations)
  const [originalOrder, setOriginalOrder] = useState(true)

  useEffect(() => {
  getLocations(zipSearch)
  return clearLocation
}, [getLocations, zipSearch, clearLocation])

  const handleClick = () => {
    setOriginalOrder(!originalOrder)
    if (originalOrder) {
      setLocationOrder(locations)
    } else {
      setLocationOrder([...locationOrder].sort((a, b) => {
        let locationA = a.name.toUpperCase()
        let locationB = b.name.toUpperCase()
        return (locationA < locationB) ? -1 : (locationA > locationB) ? 1 : 0
      }))
    }
  }


  return <div id="LocationIndex">
    <button onClick={handleClick}>Sort Locations</button>
    {locationOrder.map(location => <LocationCard {...location} key={location.id}/>)}
  </div>
}

const mapStateToProps = (state) => {
  return {locations: state.locations}
}

export default connect(mapStateToProps, { getLocations })(LocationIndex)