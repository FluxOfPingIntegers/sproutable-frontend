import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'

function Nav({username}){

  const authOptions = (
    <>
      <NavLink to="/users/login">Login</NavLink> |<> </>
      <NavLink to="/users/signup">Signup</NavLink> |<> </>
    </>
  )

  const userDisplay = (
    <>
      Logged in as: <NavLink to="/users/1">{username}</NavLink> |<> </>
    </>
  )

  return <nav className="Nav">
    {!!username ? userDisplay : authOptions}
    <NavLink to="/locations/zip-search">Search Markets By Zip</NavLink>
  </nav>
}

const mapStateToProps = (state) => {
  return {username: state.selectedUser.username}
}

export default connect(mapStateToProps)(Nav);