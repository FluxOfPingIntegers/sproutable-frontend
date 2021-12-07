import { connect } from 'react-redux'
import EventCard from '../components/EventCard'

function EventIndex({events}) {
  return <div id="EventIndex">
      <h3>Upcoming Events:</h3>
      {events.map(event => <EventCard {...event} key={event.id}/>)}
  </div>
}

const mapStateToProps = (state) => {
    return {
      events: state.selectedLocation.events
    }
}

export default connect(mapStateToProps)(EventIndex)