import {  } from '../redux/actionCreators'

import { connect } from 'react-redux'

function VendorEventList({vendor}) {

}

const mapStateToProps = (state) => {
  return {locations: state.locations}
}

export default connect(mapStateToProps, { getLocations })(VendorEventList)