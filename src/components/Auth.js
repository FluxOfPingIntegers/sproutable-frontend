import { useState } from 'react'
import { submitSignup, submitLogin, setZipCode } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

function Auth(props){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [email, setEmail] = useState("")
  const [zipCode, setZipCode] = useState("")
  const navigate = useNavigate()

  const signup = (useLocation().pathname.toString() === "/users/signup")

  const isFieldValid = (field) => {
    if (field.length < 3 || field === "invalid" || field === "Invalid" || field[0] === " " || field[field.length -1] === " "){
      return false
    } else {
      return true
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFieldValid(username) && isFieldValid(password)) {
      signup ? props.submitSignup({
         username, 
         password, 
         password_confirmation: passwordConfirmation, 
         email, zipcode: zipCode }) : props.submitLogin({username, password})
      navigate(`/users/1`)
    } else {
      setUsername("")
      setPassword("")
    }
  }

  const signupForm = () => {
    return (
    <>
    <label>
      Password Confirmation:
      </label>
      <input type="password" 
        name="password_confirmation" 
        value={passwordConfirmation} 
        onChange={(e) => setPasswordConfirmation(e.target.value)} /><br />
    <label>
      Email:
    </label>
      <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
    <label>
      Zip Code: 
    </label>
      <input type="number" name="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} /><br />
    </>
    )
  }

  return (
    <div className="Auth">
      {signup ? <h1>Sign up!</h1> : <h1>Login!</h1>}
      <form onSubmit={handleSubmit} id="newForm">
        <label>
          Username: 
        </label>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <label>
          Password: 
        </label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        {(signup ? signupForm() : <> </>)}
        <input type="submit" value="Submit" />
        </form>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    zipcode: state.selectedZipCode
  }
}

export default connect(mapStateToProps, { submitSignup, submitLogin, setZipCode })(Auth);