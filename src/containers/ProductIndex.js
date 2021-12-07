import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'

function ProductIndex({products, vendorId}) {
  const vendor = useSelector((state) => state.selectedUser.vendor)
  const user = useSelector((state) => state.selectedUser)

  const vendorProductsDisplay = (products) => {
    console.log("productIndex, productsDisplay products=", products)
    if (products.length > 0 && vendor.id === vendorId) {
      return <ul>{products.map(product => <ProductCard product={product} vendorId={vendorId} key={product.id} owner={true}/>)}</ul>
    } else if (products.length > 0 && vendor.id !== vendorId) {
      return <ul>{products.map(product => <ProductCard product={product} vendorId={vendorId} key={product.id} owner={false}/>)}</ul>
    } else if (products.length < 1 && vendor.id === vendorId) {
      return <>
      <p>You have no products listed!  Would you like to <a href={`/vendors/${vendor.id}/products/new`}>list</a> some?</p>
      </>
    } else {return <><p>This farmer has no products currently listed.</p></>}
  }

  const productsDisplay = (products) => {
    if (!!user.username) {
      return <ul>{products.map(product => <ProductCard product={product} vendorId={vendorId} key={product.id} owner={false}/>)}</ul>
    } else {
      return <p>You must <a href={"/users/login"}>Login</a> OR <a href={"/users/signup"}>Signup</a> to view products</p>
    }
  }

  const productsList = (!!vendor ? vendorProductsDisplay(products) : productsDisplay(products) )

  return <>
  <h3>These products are produced by your farm</h3>
  {productsList}
  </>
}

export default ProductIndex