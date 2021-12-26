import { getEvents, clearEvents } from '../redux/actionCreators'
import { useEffect } from "react"
import { connect } from 'react-redux'

function VendorEventList({vendor, getEvents, events}) {

  useEffect(() => {
    if (!!vendor.zipcode) {
      getEvents({zipcode: vendor.zipcode})
    }
    return clearEvents
  }, [getEvents, clearEvents])

  const eventList = () => {
    return (
      <>
        <h3>The Following Are A List Of Nearby Events</h3>
        <p>Please check the ones you intend to sell your products at</p>
        <ul>
          {events.map(event => <EventSelect event={event} key={event.id} />)}
        </ul>
      </>
    )
  }

  const zipPrompt = () => {
    return <p>Please provide your zip code within your vendor profile for a list of nearby events</p>
  }

  const eventDisplay = (!!vendor.zipcode ? eventList() : zipPrompt() )

  return eventDisplay

}

const mapStateToProps = (state) => {
  return {events: state.selectedEvents}
}

export default connect(mapStateToProps, { getEvents })(VendorEventList)