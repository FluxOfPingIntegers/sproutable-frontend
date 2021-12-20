import { useNavigate } from 'react-router-dom'

export default function UserShow(props) {

const navigate = useNavigate()

const handleUserEditClick = (e) => {
  e.preventDefault()
  navigate('/users/1/edit')
}

const newVendor = () => {
  return <>
  <h3>You Currently Have No Vendor Account On This User Account</h3>
  <p>If you would like to create a vendor account please click <a href={`/vendors/new`}>here</a></p>
  </>
}

const vendorPortal = (vendor) => {
  return <>
  <h3>Currently The Vendor <a href={`/vendors/${vendor.id}`}>{vendor.username}</a> Is Associated With This Account</h3>
  <p>click the link above to access your vendor portal</p>
  </>
}

const userInfo = () => {
  const {username, name, email, image, zipcode, venmoname, vendor} = props.user
  const vendorDisplay = (!!vendor ? vendorPortal(vendor) : newVendor())
    return (
      <div className="UserShow">
        <h1>{username}</h1>
        <img src={image} alt="Not Available" />
        <h3>Your Information:</h3>
        <ul id="userInfo">
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Zip Code: {zipcode}</li>
          <li>Venmo Username: {venmoname}</li>
        </ul>
        <button onClick={handleUserEditClick}>Edit Your Information</button>
        {vendorDisplay}
      </div>
    )
  }

  return (
    <>
    {!!props.user.username ? userInfo() : <p>Please Login to view information</p>}
    </>
  )
}