import { useState } from 'react'
import { submitVendorSignup, submitVendorUpdate } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

function VendorForm({vendor, submitVendorSignup, submitVendorUpdate}) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [venmoname, setVenmoName] = useState("")
  const [image, setImage] = useState("")
  const [website, setWebsite] = useState("")
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
    let vendorParams = validVendorParams({username, email, zipCode, venmoname, image, website})
    if (signup && !vendor) {
      submitVendorSignup(vendorParams)
    } else {
      submitVendorUpdate(vendorParams)
    }
    navigate(`/users/1`)
  }

  const validVendorParams = ({username, email, zipCode, venmoname, image, website}) => {
    let vendor = {}
    vendor = isFieldValid(username) ? Object.assign(vendor, {username: username}) : vendor
    vendor = isFieldValid(email) ? Object.assign(vendor, {email: email}) : vendor
    vendor = isFieldValid(zipCode) ? Object.assign(vendor, {zipcode: zipCode}) : vendor
    vendor = isFieldValid(venmoname) ? Object.assign(vendor, {venmoname: venmoname}) : vendor
    vendor = isFieldValid(image) ? Object.assign(vendor, {image: image}) : vendor
    vendor = isFieldValid(website) ? Object.assign(vendor, {website: website}) : vendor
    return vendor
  }

  const vendorWelcome = () => {
    if (vendor) {
      setUsername(vendor.username)
      setEmail(vendor.email)
      setZipCode(vendor.zipcode)
      setVenmoName(vendor.venmoname)
      setImage(vendor.image)
      setWebsite(vendor.website)
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
        <label>
          Image Url:
          <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} /><br />
        </label>
        <label>
          Website Url:
          <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} /><br />
        </label>
        <input type="submit" value="Submit" />
      </form>
  </>
}

const mapStateToProps = (state) => {
  return {
    vendor: state.selectedUser.vendor
  }
}

export default connect(mapStateToProps, { submitVendorSignup, submitVendorUpdate } )(VendorForm)