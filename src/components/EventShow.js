import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {getEvent, clearEvent} from '../redux/actionCreators'

function EventShow() {
  const dispatch = useDispatch()
  const event = useSelector((state) => (state.selectedEvent))
  const {name, hours, address, zipcode, date, vendors, items} = event
  const eventPath = useLocation().pathname.toString()
  const eventPathArray = eventPath.split("/")
  const eventId = parseInt(eventPathArray[eventPathArray.length - 1])
  const locationId = parseInt(eventPathArray[eventPathArray.length - 3])

  useEffect(() => {
    dispatch(getEvent({eventId: eventId, locationId: locationId}))
    return clearEvent
  }, [getEvent, eventId, locationId, clearEvent])

 const eventInfo = () => {
   <>
  <p>The Following Farmers Will Be Tabling This Event</p>
  <ul className="showInfo">
    {vendors.map(vendor => <li>Name: {vendor.name}</li>)}
  </ul>
  <p>The Following Items Will Be At This Event</p>
  <ul className="showInfo">
    {items.map(item => <li>Name: {item.name} Category: {item.category} Price: {item.price}</li>)}
  </ul>
   </>
 }

 const isEventVacant = () => {
   return (vendors.length === 0 || items.length === 0) ? true : false
 }

  return <div className="EventShow">
    <h2>{name}</h2>
    <h3>Time: {hours} on {date}</h3>
    <h3>Address: {address}, {zipcode}</h3>
  {isEventVacant() ? <p>No Information Currently Available On This Event</p> : eventInfo()}
  </div>
}

export default EventShow