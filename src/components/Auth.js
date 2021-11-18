import { useState } from 'react'
import { submitSignup, submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

function Auth(props){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [zipCode, setZipCode] = useState(null)
  const navigate = useNavigate()

  const signup = (useLocation().pathname.toString() === "/users/signup")

  const handleSubmit = (e) => {
    e.preventDefault()
    signup ? props.submitSignup({ username, password, email, zipcode: zipCode }) : props.submitLogin({username, password})
    navigate(`/locations/zip-search/${zipCode}`)
  }

  const signupForm = () => {
    return (
    <>
    <label>
      Email:
      <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      </label>
      <label>
      Zip Code: 
      <input type="number" name="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} /><br />
    </label>
    </>
    )
  }

  return (
    <div className="Auth">
      {signup ? <h1>Sign up!</h1> : <h1>Login!</h1>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label><br />
        <label>
          Password: 
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label><br />
        {(signup ? signupForm() : <> </>)}
        <input type="submit" value="Submit" />
        </form>

    </div>
  )
}

export default connect(null, { submitSignup, submitLogin })(Auth);