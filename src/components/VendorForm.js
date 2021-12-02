import { useState } from 'react'
import { submitVendorSignup, submitVendorUpdate } from '../redux/actionCreators'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

function VendorForm({vendor}) {

  const extractVendorProps = (vendorProp) => {
    switch (vendorProp) {
      case 'username':
        return vendor.username
      case 'email':
        return vendor.email
      case 'zipCode':
        return vendor.zipcode
      case 'venmoname':
        return vendor.venmoname
      case 'image':
        return vendor.image
      case 'website':
        return vendor.website
      default:
        return "";
    }
  }

  const [username, setUsername] = useState((!!vendor ? extractVendorProps('username') : ""))
  const [email, setEmail] = useState((!!vendor ? extractVendorProps('email') : ""))
  const [zipCode, setZipCode] = useState((!!vendor ? extractVendorProps('zipCode') : ""))
  const [venmoname, setVenmoName] = useState((!!vendor ? extractVendorProps('venmoname') : ""))
  const [image, setImage] = useState((!!vendor ? extractVendorProps('image') : ""))
  const [website, setWebsite] = useState((!!vendor ? extractVendorProps('website') : ""))
  const dispatch = useDispatch()
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
      dispatch(submitVendorSignup(vendorParams))
    } else {
      dispatch(submitVendorUpdate(vendorParams))
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
      return <h3>Welcome {vendor.username} Please Edit Your Information:</h3>
    } else {return <h3>Complete The Form Below To Create A New Vendor Account:</h3>}
  }
  const welcomeMessage = vendorWelcome()

  return <>
  {welcomeMessage}
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

export default VendorForm;