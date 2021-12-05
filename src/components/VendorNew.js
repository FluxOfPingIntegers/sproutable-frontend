import { useState } from 'react'
import { submitVendorSignup } from '../redux/actionCreators'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function VendorNew({vendor, validVendorParams, user}) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [venmoname, setVenmoName] = useState("")
  const [image, setImage] = useState("")
  const [website, setWebsite] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    let vendorParams = validVendorParams({username, email, zipCode, venmoname, image, website})
    dispatch(submitVendorSignup(vendorParams))
    navigate(`/users/1`)
  }

  const occupiedNew = () => {return <p>{vendor.username} is already associated with this account</p>}
  const unauthorizedNew = () => {
    return <p>You must <a href="/users/login">Log In</a> or <a href="/users/signup">Sign Up</a> in order to continue</p>
  }
  const validNew = () => {
    return <>
      <h3>Complete The Form Below To Create A New Vendor Account</h3>
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
  const populateNewVendorMessage = () => {
    if (!!vendor["user_id"]) {
      return occupiedNew()
    } else if (user.username !== "") {
      return validNew()
    } else {return unauthorizedNew()}
  }

  const newVendorMessage = populateNewVendorMessage()
  return newVendorMessage
}

export default VendorNew