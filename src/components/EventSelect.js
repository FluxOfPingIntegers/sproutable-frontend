import { connect } from 'react-redux'

const EventSelect = ({event, stalls, applyChange}) => {
  const stallCheck = stalls.some(stall => {
    return (!!stall.stall ? stall.stall.event_id === event.id : event.id === stall.event_id)
    }
  )

  const eventParams = JSON.stringify({event_id: event.id})
  const eventParamsJson = JSON.parse(eventParams)

  const handleChange = (e) => {
    if (e.target.checked) {
      applyChange({value: eventParamsJson, isChecked: true})
    } else {
      applyChange({value: eventParamsJson, isChecked: false})
    }
  }

  const inputBox = () => {
    if (stallCheck) {
    return <input type="checkbox" name='stall' value={eventParams} onChange={handleChange} checked />
    } else { 
    return <input type="checkbox" name='stall' value={eventParams} onChange={handleChange} />
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

const mapStateToProps = (state) => {
  return {stalls: state.selectedUser.vendor.stalls}
}

export default connect(mapStateToProps)(EventSelect)