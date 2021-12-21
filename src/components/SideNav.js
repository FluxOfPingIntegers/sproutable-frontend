import { NavLink } from 'react-router-dom';
import { useState } from 'react'

const SideNav = (user = false) => {
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

  const defaultOptions = () => {
    return (
      <>
        <li><NavLink to="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
          id="homeButton" className={buttonSize("homeButton")}>Home</NavLink></li>
        <li><NavLink to="/about" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          id="aboutButton" className={buttonSize("aboutButton")}>About</NavLink></li>
      </>
    )
  }

  const displayOptions = (!!user ? defaultOptions() : defaultOptions() ) /* fix when cart component is built */

  return (
  <div id="purpleBox">
    <ul id="SideNav">
      {displayOptions}
    </ul>
  </div>
  )
}

export default SideNav