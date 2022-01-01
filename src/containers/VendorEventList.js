import { getEvents, clearEvents, createStalls } from '../redux/actionCreators'
import { useEffect, useState } from "react"
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EventSelect from '../components/EventSelect'

function VendorEventList({vendor, getEvents, events}) {
  const [stallList, setStallList] = useState(vendor.stalls)
  const getStallList = () => {return stallList}

  useEffect(() => {
    if (!!vendor.zipcode) {
      getEvents({zipcode: vendor.zipcode})
    }
    return clearEvents
  }, [getEvents, clearEvents])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const eventList = () => {
    const eventSelection = events.map(eventListings => {
      const event = eventListings[0]

      const isTabled = (stall) => {
        return (!!stall.stall ? stall.stall.event_id === event.id : event.id === stall.event_id)
      }

      if (stallList.some(isTabled)) { 
        return <EventSelect event={event} key={event.id} stall={true} getStallList={getStallList} setStallList={setStallList} />
      } else {
        return <EventSelect event={event} key={event.id} stall={false} getStallList={getStallList} setStallList={setStallList} />
      }
      })

    const handleSubmit = (e) => {
      debugger
      e.preventDefault()
      const stallParams = {stalls: stallList}
      dispatch(createStalls(stallParams))
      navigate(`/vendors/${vendor.id}`)
    }

    return (
      <div id="eventSelection">
        <h3>The Following Are A List Of Nearby Events</h3>
        <p>Please check the ones you intend to sell your products at</p>
        <form id="eventForm" onSubmit={handleSubmit}>
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

export default connect(mapStateToProps, { getEvents, createStalls })(VendorEventList)