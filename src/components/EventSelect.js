import { useState } from 'react'

export default function EventSelect({event, stall, getStallList, setStallList}) {
  const [stallCheck, setStallCheck] = useState(stall)
  const name = `stall`

  const eventParams = JSON.stringify({event_id: event.id})
  const handleChange = () => {
    setStallCheck(!stallCheck)
    debugger
  }

  const inputBox = () => {
    if (stallCheck) {
    return <input type="checkbox" name={name} value={eventParams} onChange={handleChange} checked />
    } else { 
    return <input type="checkbox" name={name} value={eventParams} onChange={handleChange} />
    }
  }

  const inputBoxDisplay = inputBox()

  const eventUrl = `/locations/${event.location_id}/events/${event.id}`

  return <>
  {inputBoxDisplay}
  <label>Name: <u><a href={eventUrl}>{event.name}</a></u></ label><br />
  <label>Address: <u>{event.address}</u></ label><br />
  <label>Date: <u>{event.date}</u></label><br />
  </>

}