import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import VendorNew from '../components/VendorNew'
import VendorEdit from '../components/VendorEdit'

function VendorForm() {
  const vendor = useSelector((state) => state.selectedUser.vendor)
  const user = useSelector((state) => state.selectedUser)

  const signup = (useLocation().pathname.toString() === "/vendors/new")

  const isFieldValid = (field) => {
    if (field.length < 3 || field === "invalid" || field === "Invalid" || field[0] === " " || field[field.length -1] === " "){
        return false
      } else {
        return true
      }
  }

  const validVendorParams = ({username, email, zipCode, venmoname, image, website}) => {
    let vendorParams = (!!vendor ? vendor : {} )
    vendorParams = isFieldValid(username) ? Object.assign(vendorParams, {username: username}) : vendorParams
    vendorParams = isFieldValid(email) ? Object.assign(vendorParams, {email: email}) : vendorParams
    vendorParams = isFieldValid(zipCode) ? Object.assign(vendorParams, {zipcode: zipCode}) : vendorParams
    vendorParams = isFieldValid(venmoname) ? Object.assign(vendorParams, {venmoname: venmoname}) : vendorParams
    vendorParams = isFieldValid(image) ? Object.assign(vendorParams, {image: image}) : vendorParams
    vendorParams = isFieldValid(website) ? Object.assign(vendorParams, {website: website}) : vendorParams
    return vendorParams
  }
  const newOrEdit = () => {
    if (signup) {
      return <VendorNew vendor={vendor} validVendorParams={validVendorParams} user={user} />
    } else if (!!vendor) {
      return <VendorEdit vendor={vendor} validVendorParams={validVendorParams} user={user} />
    } else {return <><p>Loading...</p></>}
  }
  const formPop = newOrEdit()
  return formPop

}

export default VendorForm;