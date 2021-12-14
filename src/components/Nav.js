import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {clearUser} from '../redux/actionCreators'
import ZipSearch from './ZipSearch'
import { useState } from 'react'

function Nav({user, vendor, clearUser}){
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
    <div id="greenOption">
      <NavLink to="/users/login" onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} id="loginButton" className={buttonSize("loginButton")}>Login</NavLink>
    </div>
    <div id="yellowOption">
      <NavLink to="/users/signup" onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} id="signupButton" className={buttonSize("signupButton")}>Signup</NavLink>
    </div>
    </>
  )

  const navigate = useNavigate()
  
  const handleLogoutClick = (e) => {
    e.preventDefault()
    clearUser()
    navigate('/')
  }

  const vendorExist = () => {
    let vendorUrl = `/vendors/${vendor.id}`
  return ( 
  <NavLink to={vendorUrl} id="vendorButton" 
    className={buttonSize("vendorButton")}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >Vendor Page</NavLink>
  )}

  const vendorVacant = () => {
    return (
    <NavLink to="/vendors/new" id="vendorButton"
      className={buttonSize("vendorButton")}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >Create Vendor</NavLink>
  )}

  const vendorDisplay = (!!vendor ? vendorExist() : vendorVacant())

  const userDisplay = (
    <>
      <ul className="userNav" ><li>Currently Logged In As: </li><li id="usernameNav">{user.username}</li></ul>
      <div id="greenOption">
      <NavLink to="/users/1" id="profileButton" 
        className={buttonSize("profileButton")}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >Profile</NavLink>
      </div>
      <div id="yellowOption">
        {vendorDisplay}
      </div>
      <div id="orangeOption">
      <NavLink to="/" onClick={handleLogoutClick} id="logoutButton" 
        className={buttonSize("logoutButton")}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >Logout</NavLink>
      </div>
    </>
  )

  return <nav className="Nav">
    {!!user.username ? userDisplay : authOptions}
    <div id="searchbar">
    <ZipSearch />
    </div>
  </nav>
}

const mapStateToProps = (state) => {
  return {
    user: state.selectedUser,
    vendor: state.selectedUser.vendor
  }
}

export default connect(mapStateToProps, { clearUser })(Nav);