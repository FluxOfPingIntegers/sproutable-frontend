import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {clearUser} from '../redux/actionCreators'

function Nav({user, clearUser}){

  const authOptions = (
    <>
      <NavLink to="/users/login">Login</NavLink> |<> </>
      <NavLink to="/users/signup">Signup</NavLink> |<> </>
    </>
  )

  const navigate = useNavigate()
  
  const handleLogoutClick = (e) => {
    e.preventDefault()
    clearUser()
    navigate('/')
  }

  const userDisplay = (
    <>
      Logged in as: <NavLink to="/users/1">{user.username}</NavLink> |<> </>
      <NavLink to="/" onClick={handleLogoutClick}>Logout</NavLink> | <> </>
    </>
  )

  return <nav className="Nav">
    {!!user.username ? userDisplay : authOptions}
    <NavLink to="/locations/zip-search">Search Markets By Zip</NavLink>
  </nav>
}

const mapStateToProps = (state) => {
  return {
    user: state.selectedUser,
  }
}

export default connect(mapStateToProps, { clearUser })(Nav);