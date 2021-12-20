import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProduct, clearProduct } from '../redux/actionCreators'

function ProductShow() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.selectedProduct)
  const productPath = useLocation().pathname.toString()
  const productPathArray = productPath.split("/")
  const productId = parseInt(productPathArray[productPathArray.length - 1])
  const vendorId = parseInt(productPathArray[productPathArray.length - 3])

  useEffect(() => {
    dispatch(getProduct({productId: productId, vendorId: vendorId}))
    return clearProduct
  }, [getProduct, productId, vendorId, clearProduct])

  const info = (field) => {return !!field ? field : "Not Listed"}

  const productInfo = ({name, category, description, image, price}) => {
    return <>
      <h3>We know the following about this product:</h3>
      <ul>
        <li>Name: {info(name)}</li>
        <li>Category: {info(category)}</li>
        <li>Price: {info(price)}</li>
      </ul>
      <img id="imageShow" src={info(image)} alt="No Pic Available" />
      <p>Description: {info(description)}</p>
    </>
  }

  const productDisplay = (!!product.name ? productInfo(product) : <p>No Such Product</p>)

  return <>{productDisplay}</>
}

export default ProductShow