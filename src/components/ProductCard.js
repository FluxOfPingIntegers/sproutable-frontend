import { useNavigate } from 'react-router-dom'
import { submitProductDestroy } from '../redux/actionCreators'
import { useDispatch } from 'react-redux'

function ProductCard({product, vendorId, owner}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const ownerListing = () => {
    const handleEditClick = (e) => {
      e.preventDefault()
      navigate(`/vendors/${vendorId}/products/${product.id}/edit`)
    }
    const handleDeleteClick = (e) => {
      e.preventDefault()
      dispatch(submitProductDestroy({productId: product.id, vendorId: vendorId}))
    }

    return (
    <li>
      Category: {product.category}, Name: {product.name}, Info: <a href={`/vendors/${vendorId}/products/${product.id}`}>Click Here</a><br></br>
      <button value={"Edit This Product"} onClick={handleEditClick}/> OR <button value={"Delete This Product"} onClick={handleDeleteClick}/>
    </li>
    )
  }

  const visitorListing = () => {
    return (
        <li>
          Category: {product.category}, Name: {product.name}, Info: <a href={`/vendors/${vendorId}/products/${product.id}`}>Click Here</a><br></br>
        </li>
        )
  }
  const listing = (owner ? ownerListing() : visitorListing())
  return listing
}

export default ProductCard