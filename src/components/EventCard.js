import { NavLink } from 'react-router-dom';

function EventCard({location_id, id, date, hours}) {
  const url = `/locations/${location_id}/events/${id}`
  return <>
    <ul className="EventCard">
      <li>Date: {date}</li>
      <li>Time: {hours}</li>
      <li><NavLink to={url}>See Event Details</NavLink></li>
    </ul>
  </>
}

export default EventCard