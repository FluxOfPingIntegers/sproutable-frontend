import { useEffect } from "react"
import { clearUser, getUser } from '../redux/actionCreators'
import { connect } from 'react-redux'
import UserShow from '../components/UserShow'

function UserContainer({getUser, user}){

  useEffect(() => {
    getUser()
    return clearUser
}, [getUser, clearUser])

return <div classname="UserContainer">
  <UserShow user={user} />
</div>

}

const mapStateToProps = (state) => {
  return {user: state.selectedUser}
}

export default connect(mapStateToProps, { getUser })(UserContainer)