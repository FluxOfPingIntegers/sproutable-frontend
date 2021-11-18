import { connect } from 'react-redux'
import UserShow from '../components/UserShow'

function UserContainer({user}){

return <div className="UserContainer">
  <UserShow user={user} />
</div>

}

const mapStateToProps = (state) => {
  return {user: state.selectedUser}
}

export default connect(mapStateToProps)(UserContainer)