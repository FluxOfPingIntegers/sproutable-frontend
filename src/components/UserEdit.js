import { connect } from 'react-redux'
import { useState } from 'react'
import { submitUserUpdate } from '../redux/actionCreators'
import { useNavigate } from 'react-router-dom'

function UserEdit(props) {
  const navigate = useNavigate
  const user = props.user
  const [username, setUsername] = useState(user.username)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [image, setImage] = useState(user.image)
  const [zipcode, setZipCode] = useState(user.zipcode)
  const [venmoname, setVenmoName] = useState(user.venmoname)

  const unauthorizedUser = () => {return <p>Access Denied, please log in to edit an account</p>}
  const handleSubmit = (e) => {
    e.preventDefault()
    props.submitUserUpdate({username, name, email, password, password_confirmation: passwordConfirmation, image, zipcode, venmoname})
    navigate(`/users/1`)
  }
  const editUserForm = () => {
    return (
      <form onSubmit={handleSubmit}>
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
      </form>
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