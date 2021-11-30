import { useState } from 'react'
import { submitVendorSignup, submitVendorUpdate } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

function VendorForm({vendor, submitVendorSignup, submitVendorUpdate}) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [venmoname, setVenmoName] = useState("")
  const navigate = useNavigate()

  const signup = (useLocation().pathname.toString() === "/vendors/new")

  const isFieldValid = (field) => {
    if (field.length < 3 || field === "invalid" || field === "Invalid" || field[0] === " " || field[field.length -1] === " "){
        return false
      } else {
        return true
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let vendorParams = validVendorParams({username, email, zipCode, venmoname})
    if (signup && !vendor) {
      submitVendorSignup(vendorParams)
    } else {
      submitVendorUpdate(vendorParams)
    }
    navigate(`/vendors/1`)
  }

  const validVendorParams = ({username, email, zipCode, venmoname}) => {
    let vendor = {}
    vendor = isFieldValid(username) ? Object.assign(vendor, {username: username}) : vendor
    vendor = isFieldValid(email) ? Object.assign(vendor, {username: username}) : vendor
    vendor = isFieldValid(zipCode) ? Object.assign(vendor, {username: username}) : vendor
    vendor = isFieldValid(venmoname) ? Object.assign(vendor, {username: username}) : vendor
    return vendor
  }

  const vendorWelcome = () => {
    if (vendor) {
      setUsername(vendor.username)
      setEmail(vendor.email)
      setZipCode(vendor.zipcode)
      setVenmoName(vendor.venmoname)
      return <h3>Welcome {vendor.username} Please Edit Your Information:</h3>
    } else {return <h3>Complete The Form Below To Create A New Vendor Account:</h3>}
  }

  return <>
  {vendorWelcome()}
  <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        </label>
        <label>
          Zip Code: 
          <input type="number" name="zipcode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} /><br />
        </label>
        <label>
          Venmo Username:
          <input type="text" name="venmoname" value={venmoname} onChange={(e) => setVenmoName(e.target.value)} /><br />
        </label>
        <input type="submit" value="Submit" />
      </form>
  </>
}



export default connect(null, { submitVendorSignup, submitVendorUpdate } )(VendorForm)