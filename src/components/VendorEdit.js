import { useState } from 'react'
import { submitVendorUpdate } from '../redux/actionCreators'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'


function VendorEdit({vendor, validVendorParams, user}) {
  const [username, setUsername] = useState(() => !!vendor.username ? vendor.username : "")
  const [email, setEmail] = useState(() => !!vendor.email ? vendor.email : "")
  const [zipCode, setZipCode] = useState(() => !!vendor.zipcode ? vendor.zipcode : "")
  const [venmoname, setVenmoName] = useState(() => !!vendor.venmoname ? vendor.venmoname : "")
  const [image, setImage] = useState(() => !!vendor.image ? vendor.image : "")
  const [website, setWebsite] = useState(() => !!vendor.website ? vendor.website : "")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    let vendorParams = validVendorParams({username, email, zipCode, venmoname, image, website})
    dispatch(submitVendorUpdate(vendorParams))
    navigate(`/vendors/${vendor.id}`)
  }

  const vacantVendor = () => {
      return <p>There is no Vendor associated with this account, would you like to <a href="/vendors/new">Make One</a>?</p>
    }
  const unauthorizedEdit = () => {
    return <p>You must <a href="/users/login">Log In</a> or <a href="/users/signup">Sign Up</a> in order to continue</p>
  }
  const validEdit = () => {
    return <>
      <h2>Welcome {vendor.username}</h2>
      <h3>Please Edit Your Information:</h3>
      <form onSubmit={handleSubmit} id="editForm">
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

  const populateEditVendorMessage = () => {
    if (!vendor && user) {
      return vacantVendor()
    } else if (user.username === "") {
      return unauthorizedEdit()
    } else {return validEdit()}
  }

  const editVendorMessage = populateEditVendorMessage()
  return editVendorMessage
}

export default VendorEdit