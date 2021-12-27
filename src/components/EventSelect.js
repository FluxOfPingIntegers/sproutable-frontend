import { useState } from 'react'

export default function EventSelect({event, vendorId}) {
  const [attendingEvent, selectAttendingEvent] = useState(() => false)

  const name = `stall${event.id}`

  const eventParams = {event_id: event.id, vendor_id: vendorId}

  return <>
  <input type="checkbox" name={name} value={eventParams} />
  <label>Name: <u>{event.name}</u> Address: <u>{event.address}</u> Date: <u>{event.date}</u></label><br />
  </>


}