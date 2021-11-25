import { NavLink } from 'react-router-dom';

function EventCard(props) {
  console.log(props)
  const url = `/events/${props.id}`
  return <>
    <ul>
      <li>Date: {props.date}</li>
      <li>Time: {props.hours}</li>
      <li><NavLink to={url}>See Event Details</NavLink></li>
    </ul>
  </>
}

export default EventCard