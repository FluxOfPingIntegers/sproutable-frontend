import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import {getEvent, clearEvent} from '../redux/actionCreators'

function EventShow(props) {
  const {usda_id, name, image, description, hours, address, zipcode, date} = props.event
  const eventPath = useLocation().pathname.toString()
  const eventPathArray = eventPath.split("/")
  const eventId = parseInt(eventPathArray[eventPathArray.length - 1])
  const locationId = parseInt(eventPathArray[eventPathArray.length - 3])

  useEffect(() => {
    props.getEvent({eventId: eventId, locationId: locationId})
    return clearEvent
  }, [getEvent, eventId, locationId, clearEvent])
}

const mapStateToProps = (state) => {
  return {
    event: state.selectedEvent
  }
}

export default connect(mapStateToProps, {getEvent, clearEvent})(EventShow)