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
    let vendor = {}
    vendor = isFieldValid(username) ? Object.assign(vendor, {username: username}) : vendor
    vendor = isFieldValid(email) ? Object.assign(vendor, {email: email}) : vendor
    vendor = isFieldValid(zipCode) ? Object.assign(vendor, {zipcode: zipCode}) : vendor
    vendor = isFieldValid(venmoname) ? Object.assign(vendor, {venmoname: venmoname}) : vendor
    vendor = isFieldValid(image) ? Object.assign(vendor, {image: image}) : vendor
    vendor = isFieldValid(website) ? Object.assign(vendor, {website: website}) : vendor
    return vendor
  }
  const newOrEdit = () => {
    console.log("VendorForm, newOrEdit vendor=", vendor)
    if (signup) {
      return <VendorNew vendor={vendor} validVendorParams={validVendorParams} user={user} />
    } else {
      return <VendorEdit vendor={vendor} validVendorParams={validVendorParams} user={user} />
    }
  }
  const formPop = newOrEdit()
  console.log("VendorForm vendor=", vendor)
  return formPop

}

export default VendorForm;