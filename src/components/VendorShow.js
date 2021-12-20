import ProductIndex from '../containers/ProductIndex'

function VendorShow({vendor}) {
  const {username, email, zipcode, venmoname, image, website, products} = vendor
  const info = (field) => {return !!field ? field : "Not Listed"}
  const productList = () => <ProductIndex products={products} vendorId={vendor.id} />
  const productListings = productList()
  return <div className="vendor">
    <h1>{username}</h1>
    <img src={image} alt="No Pic Available" />
    <p>We Know The Following Information About This Farmer:</p>
    <ul className="showInfo">
      <li>Email: {info(email)}</li>
      <li>Zip Code: {info(zipcode)}</li>
      <li>Venmo Username: {info(venmoname)}</li>
      <li>Website: {info(website)}</li>
    </ul>
    {productListings}
  </div>
}

export default VendorShow