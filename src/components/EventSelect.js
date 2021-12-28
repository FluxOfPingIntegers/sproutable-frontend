
export default function EventSelect({event, stall, stallList, setStallList}) {

  const name = `stall`

  const eventParams = JSON.stringify({event_id: event.id})

  const handleChange = (e) => {
    setStallList([...stallList, e.target.value])
  }

  const inputBox = () => {
    if (stall) {
    return <input type="checkbox" name={name} value={eventParams} onChange={handleChange} checked />
    } else { 
    return <input type="checkbox" name={name} value={eventParams} onChange={handleChange} />
    }
  }

  const inputBoxDisplay = inputBox()

  const eventUrl = `/locations/${event.location_id}/events/${event.id}`

  return <>
  {inputBoxDisplay}
  <label>Name: <u><a href={eventUrl}>{event.name}</a></u> Address: <u>{event.address}</u> Date: <u>{event.date}</u></label><br />
  </>


}