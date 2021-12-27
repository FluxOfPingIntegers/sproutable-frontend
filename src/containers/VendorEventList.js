import { getEvents, clearEvents } from '../redux/actionCreators'
import { useEffect } from "react"
import { connect } from 'react-redux'
import EventSelect from '../components/EventSelect'

function VendorEventList({vendor, getEvents, events}) {

  useEffect(() => {
    if (!!vendor.zipcode) {
      getEvents({zipcode: vendor.zipcode})
    }
    return clearEvents
  }, [getEvents, clearEvents])

  const eventList = () => {
    const eventSelection = events.map(eventListings => {
      const event = eventListings[0]
      return <EventSelect event={event} vendorId={vendor.id} key={event.id} />
    })
    return (
      <div id="eventSelection">
        <h3>The Following Are A List Of Nearby Events</h3>
        <p>Please check the ones you intend to sell your products at</p>
        <form id="eventForm">
          {eventSelection}
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

  const zipPrompt = () => {
    return <p>Please provide your zip code within your vendor profile for a list of nearby events</p>
  }

  const eventDisplay = (!!vendor.zipcode ? eventList(events) : zipPrompt() )

  return eventDisplay

}

const mapStateToProps = (state) => {
  return {events: state.selectedEvents}
}

export default connect(mapStateToProps, { getEvents })(VendorEventList)