

function VendorHome({vendor}) {
    const { username, name, email, image, zipcode, venmoname, website } = vendor
    const info = (field) => {return !!field ? field : "Not Listed"}
  return <>
    <h2>Welcome {username} To Your Vendor Portal</h2>
    <p>We have the following information regarding this account</p>
    <ul>
      <li>Name: {info(name)}</li>
      <li>Email: {info(email)}</li>
      <li>Image URL: {info(image)}</li>
      <li>Zip Code: {info(zipcode)}</li>
      <li>Venmo Username: {info(venmoname)}</li>
      <li>Website: {info(website)}</li>
    </ul>
    <p>Click <a href={`/vendors/${vendor.id}/edit`}>here</a> to edit this account</p>
  </>
}

export default VendorHome