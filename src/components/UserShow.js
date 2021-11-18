import { useNavigate } from 'react-router-dom'

export default function UserShow(props) {

const navigate = useNavigate()

const handleUserEditClick = (e) => {
  e.preventDefault()
  navigate('/users/1/edit')
}

const userInfo = () => {
  const {username, name, email, image, zipcode, venmoname} = props.user
    return (
      <>
        <h1>{username}</h1>
        <img src={image} alt="No Image Url Uploaded" />
        <h3>Your Information:</h3>
        <ul>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Zip Code: {zipcode}</li>
          <li>Venmo Username: {venmoname}</li>
        </ul>
        <button onClick={handleUserEditClick}>Edit Your Information</button>
      </>
    )
  }

  return (
    <>
    {!!props.user.username ? userInfo() : <p>Please Login to view information</p>}
    </>
  )
}