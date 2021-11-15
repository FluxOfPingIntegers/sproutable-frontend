import { useState } from 'react'
import { submitSignup, submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useNavigate as useHistory } from 'react-router-dom'

function Auth(props){

  const [signup, setSignup] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [zipCode, setZipCode] = useState(20500)
  const history = useHistory()

  const toggleSignup = () => setSignup(!signup)

  const handleSubmit = (e) => {
    e.preventDefault()
    signup ? props.submitSignup({ username, password, zip_code: zipCode }) : props.submitLogin({username, password})
    history.pushState("/locations/zip-search/:zipcode")
  }

  return (
    <div class="Auth">
      {signup ? <h1>Sign up!</h1> : <h1>Login!</h1>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label><br />
        {signup && <label>
          Zip Code: 
          <input type="number" name="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} /><br />
        </label>}
        <label>
          Password: 
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        </label>
        <input type="submit" value="Submit" />
        </form>
        <button onClick={toggleSignup}>Or... {signup ? "Login!" : "Signup!"}</button>
    </div>
  )
}

export default connect(null, { submitSignup, submitLogin })(Auth);