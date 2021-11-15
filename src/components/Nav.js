import { NavLink } from 'react-router-dom'

function Nav(){
  return <nav>
    <NavLink to="/Locations/zip-search/:zipcode">See Farmers Markets</NavLink>
  </nav>
}

export default Nav;