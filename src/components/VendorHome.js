import ProductIndex from '../containers/ProductIndex'

function VendorHome({vendor}) {
    const { username, name, email, image, zipcode, venmoname, website, products } = vendor
    const info = (field) => {return !!field ? field : "Not Listed"}
    const productList = () => <ProductIndex products={products} vendorId={vendor.id} />
    const productListings = productList()
  return <div className="vendor">
    <h2>Welcome {username} To Your Vendor Portal</h2>
    <p>We have the following information regarding this account</p>
    <ul>
      <li>Name: {info(name)}</li>
      <li>Email: {info(email)}</li>
      <li>Zip Code: {info(zipcode)}</li>
      <li>Venmo Username: {info(venmoname)}</li>
      <li>Website: {info(website)}</li>
      <li>Image URL: {info(image)}</li>
    </ul>
    <img id="vendor-home-image" src={info(image)} alt="No Image Available" />
    <p>Click <a href={`/vendors/${vendor.id}/edit`}>here</a> to edit this account</p>
    {productListings}
  </div>
}

export default VendorHome