import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'

function ProductIndex({products, vendorId}) {
  const vendor = useSelector((state) => state.selectedUser.vendor)

  const productsDisplay = (products) => {
    if (products.length > 0 && vendor.id === vendorId) {
      return <ul>{products.map(product => <ProductCard {...product} vendorId={vendorId} key={product.id} owner={true}/>)}</ul>
    } else if (products.length > 0 && vendor.id !== vendorId) {
      return <ul>{products.map(product => <ProductCard {...product} vendorId={vendorId} key={product.id} owner={false}/>)}</ul>
    } else if (products.length < 1 && vendor.id === vendorId) {
      return <>
      <p>You have no products listed!  Would you like to <a href={`/vendors/${vendor.id}/products/new`}>list</a> some?</p>
      </>
    } else {return <><p>This farmer has no products currently listed.</p></>}
  }

  const productsList = productsDisplay(products)

  return <>{productsList}</>
}

export default ProductIndex