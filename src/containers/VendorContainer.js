import { useLocation } from 'react-router-dom'
import { useEffect } from "react"
import { connect } from 'react-redux'
import { getVendor, clearVendor } from '../redux/actionCreators'
import VendorShow from '../components/VendorShow'
import VendorHome from '../components/VendorHome'

function VendorContainer({vendor, selectedVendor, getVendor, user}) {
  const vendorUrl = useLocation().pathname.toString()
  const vendorPaths = vendorUrl.split("/")
  const vendorId = vendorPaths[vendorPaths.length - 1]
  useEffect(() => {
    getVendor(vendorId)
    return clearVendor
  }, [getVendor, vendorId, clearVendor])

  let vendorDisplay = (vendor.id === selectedVendor.id ? <VendorHome vendor={vendor} /> : <VendorShow vendor={selectedVendor} />)
  let display = (user.username !== "" ? vendorDisplay : <p>You Must Be Logged In To View Vendor Details</p>)
  return <>
    {display}
  </>
}

const mapStateToProps = (state) => {
    return {
      vendor: state.selectedUser.vendor,
      selectedVendor: state.selectedVendor,
      user: state.selectedUser
    }
}

export default connect(mapStateToProps, {getVendor})(VendorContainer)