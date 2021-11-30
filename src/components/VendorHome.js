

function VendorHome({vendor}) {
    const { username, name, email, image, zipcode, venmoname, website } = vendor
  return <>
    <h2>Welcome {username} To Your Vendor Portal</h2>
    <p>We have the following information regarding this account</p>
    <ul>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
      <li>Image URL: {(!!image ? image : "None Listed")}</li>
      <li>Zip Code: {zipcode}</li>
      <li>Venmo Username: {venmoname}</li>
      <li>Website: {(!!website ? website : "Non Listed")}</li>
    </ul>
    <p>Click <a href={`/vendors/${vendor.id}`}>here</a> to edit this account</p>
  </>
}

export default VendorHome