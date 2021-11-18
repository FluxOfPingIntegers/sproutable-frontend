import { useEffect } from "react"
import { clearUser, getUser } from '../redux/actionCreators'
import { connect } from 'react-redux'
import UserShow from '../components/UserShow'
import { useLocation } from 'react-router-dom'

function UserContainer({getUser, user}){

  useEffect(() => {
    getUser()
    return clearUser
}, [getUser, clearUser])
}

const mapStateToProps = (state) => {
  return {user: state.selectedUser}
}

export default connect(mapStateToProps, { getUser })(UserContainer)