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
   const itemsList = () => {
     if (items.length > 0) {
      return items.map(item => {
        let itemShow = `/vendors/${item.vendor_id}/products/${item.id}`
        return <li key={item.id}>Name: <a href={itemShow}>{item.name}</a> Category: {item.category} Price: {item.price}</li>
      })
     } else {
      return <li>No Items Listed</li>
     }
    }
    const itemsDisplay = itemsList()

    const vendorsDisplay = vendors.map(vendor => <li key={vendor.id}>Name: <a href={`/vendors/${vendor.id}`}>{vendor.username}</a></li>)
  return (
  <>
  <p>The Following Farmers Will Be Tabling This Event</p>
  <ul className="showInfo">
    {vendorsDisplay}
  </ul>
  <p>The Following Items Will Be At This Event</p>
  <ul className="showInfo">
    {itemsDisplay}
  </ul>
  </>
  )
 }

 const isEventVacant = () => {
   return (vendors.length === 0)
 }

  return <div className="EventShow">
    <h2>{name}</h2>
    <h3>Time: {hours} on {date}</h3>
    <h3>Address: {address}, {zipcode}</h3>
  {isEventVacant() ? <p>No Information Currently Available On This Event</p> : eventInfo()}
  </div>
}

export default EventShow