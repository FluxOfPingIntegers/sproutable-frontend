import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {clearUser} from '../redux/actionCreators'
import ZipSearch from './ZipSearch'
import { useState } from 'react'

function Nav({user, clearUser}){
  const [selectedButton, setSelectedButton] = useState("")

  const handleMouseEnter = (e) => {
    setSelectedButton(e.target.id)
    e.preventDefault()
  }

  const handleMouseLeave = (e) => {
    setSelectedButton("")
    e.preventDefault()
  }

  const buttonSize = (elementId) => {
    if (elementId === selectedButton) {
      return "large"
    } else {
      return "small"
    }
  }

  const authOptions = (
    <>
      <NavLink to="/users/login" onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} id="loginButton" className={buttonSize("loginButton")}>Login</NavLink> |<> </>
      <NavLink to="/users/signup" onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} id="signupButton" className={buttonSize("signupButton")}>Signup</NavLink> |<> </>
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
      <div className="userNav">Currently Logged In As: {user.username}</div>
      <NavLink to="/users/1" id="profileButton">Profile</NavLink>
      <NavLink to="/" onClick={handleLogoutClick} id="logoutButton" className={buttonSize("logoutButton")}>Logout</NavLink>
    </>
  )

  return <nav className="Nav">
    {!!user.username ? userDisplay : authOptions}
    <div id="searchbar">
    <ZipSearch />
    </div>
    {/* <NavLink to="/locations/zip-search">Search Markets By Zip</NavLink> */}
  </nav>
}

const mapStateToProps = (state) => {
  return {
    user: state.selectedUser,
  }
}

export default connect(mapStateToProps, { clearUser })(Nav);