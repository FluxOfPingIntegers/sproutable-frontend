

function VendorShow({vendor}) {
  const {username, email, zipcode, venmoname, image, website} = vendor
  const info = (field) => {return !!field ? field : "Not Listed"}
  return <>
    <h1>{username}</h1>
    <img src={image} alt="No Pic Available" />
    <p>We Know The Following Information About This Farmer:</p>
    <ul>
      <li>Email: {info(email)}</li>
      <li>Zip Code: {info(zipcode)}</li>
      <li>Venmo Username: {info(venmoname)}</li>
      <li>Website: {info(website)}</li>
    </ul>
  </>
}

export default VendorShow