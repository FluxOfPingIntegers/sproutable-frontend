import { NavLink } from 'react-router-dom';

function Nav(){
  return <nav className="Nav">
    <NavLink to="/users/login">Login</NavLink> |<> </>
    <NavLink to="/users/signup">Signup</NavLink> |<> </>
    <NavLink to="/locations/zip-search">Search Markets By Zip</NavLink>
  </nav>
}

export default Nav;