import { connect } from 'react-redux'
import { useState } from 'react'
import { submitUserUpdate } from '../redux/actionCreators'
import { useNavigate } from 'react-router-dom'

function UserEdit(props) {
  const navigate = useNavigate()
  const user = props.user
  const [username, setUsername] = useState(() => !!user.username ? user.username : "")
  const [name, setName] = useState(() => !!user.name ? user.name : "")
  const [email, setEmail] = useState(() => !!user.email ? user.email : "")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [image, setImage] = useState(user.image)
  const [zipcode, setZipCode] = useState(user.zipcode)
  const [venmoname, setVenmoName] = useState(user.venmoname)

  const unauthorizedUser = () => {return <p>Access Denied, please log in to edit an account</p>}
  const handleSubmit = (e) => {
    e.preventDefault()
    let userParams = updateParams({username, name, email, password, passwordConfirmation, image, zipcode, venmoname})
    props.submitUserUpdate(userParams)
    navigate(`/users/1`)
  }

  const isFieldValid = (field) => {
    if (!field) {return false}
    if (field.length < 3 || field === "invalid" || field === "Invalid" || field[0] === " " || field[field.length -1] === " "){
      return false
    } else {
      return true
    }
  }

  const updateParams = ({username, name, email, password, passwordConfirmation, image, zipcode, venmoname}) => {
    let user = {}
    user = isFieldValid(username) ? Object.assign(user, {username: username}) : user
    user = isFieldValid(name) ? Object.assign(user, {name: name}) : user
    user = isFieldValid(email) ? Object.assign(user, {email: email}) : user
    user = isFieldValid(password) ? Object.assign(user, {password: password}) : user
    user = isFieldValid(passwordConfirmation) ? Object.assign(user, {password_confirmation: passwordConfirmation}) : user
    user = isFieldValid(image) ? Object.assign(user, {image: image}) : user
    user = isFieldValid(zipcode) ? Object.assign(user, {zipcode: zipcode}) : user
    user = isFieldValid(venmoname) ? Object.assign(user, {venmoname: venmoname}) : user
    return user
  }

  const editUserForm = () => {
    return (
      <>
      <h1>Please Edit Your Information</h1>
      <form onSubmit={handleSubmit} id="editForm">
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        </label>
        <label>
          Confirm Password:
          <input type="password" 
            name="password_confirmation" 
            value={passwordConfirmation} 
            onChange={(e) => setPasswordConfirmation(e.target.value)} 
          /><br />
        </label>
        <label>
          User Image URL: 
          <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} /><br />
        </label>
        <label>
          Zip Code: 
          <input type="number" name="zipcode" value={zipcode} onChange={(e) => setZipCode(e.target.value)} /><br />
        </label>
        <label>
          Venmo Username:
          <input type="text" name="venmoname" value={venmoname} onChange={(e) => setVenmoName(e.target.value)} /><br />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </>
    )
  }
  return (!!user.username ? editUserForm() : unauthorizedUser())
}

const mapStateToProps = (state) => {
  return {
    user: state.selectedUser
  }
}

export default connect(mapStateToProps, { submitUserUpdate })(UserEdit)