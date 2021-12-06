import { useState } from 'react'
import { submitNewProduct } from '../redux/actionCreators'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ProductNew() {
  const vendorId = useSelector((state) => (state.selectedUser.vendor.id))
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [category, setCategory] = useState("vegetable")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
    
  const isFieldValid = (field) => {
    if (field.length < 1 || field === "invalid" || field === "Invalid" || field[0] === " " || field[field.length -1] === " " || field === 0){
      return false
    } else {
      return true
    }
  }

  const newProductParams = ({name, category, description, image, price, quantity}) => {
    let product = {}
    product = isFieldValid(name) ? Object.assign(product, {name: name}) : product
    product = isFieldValid(category) ? Object.assign(product, {category: category}) : product
    product = isFieldValid(description) ? Object.assign(product, {description: description}) : product
    product = isFieldValid(image) ? Object.assign(product, {image: image}) : product
    product = isFieldValid(price) ? Object.assign(product, {price: price}) : product
    product = isFieldValid(quantity) ? Object.assign(product, {quantity: quantity}) : product
    return product
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let productParams = newProductParams({name, category, description, image, price, quantity})
    let areBasicsValid = (isFieldValid(name) || name.length >= 3 || isFieldValid(price) || isFieldValid(quantity))
    if (areBasicsValid) {
      dispatch(submitNewProduct({productParams: productParams, vendorId: vendorId}))
      navigate(`/vendors/${vendorId}`)
    } else {window.alert("Name, Price, and Quantity fields must be valid")}
  }

  const newProductForm = () => {
    return (
    <div className="new-product-form">
      <h3>Please Tell Us About Your Product By Completing The Form Below</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:<br />
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        </label>
        <label>
          Category:<br />
          <select name="category" onChange={(e) => setCategory(e.target.value)}>
            <option value="bean">Bean</option>
            <option value="beef">Beef</option>
            <option value="egg">Egg</option>
            <option value="fruit">Fruit</option>
            <option value="milk">Milk</option>
            <option value="mushroom">Mushroom</option>
            <option value="pork">Pork</option>
            <option value="poultry">Poultry</option>
            <option selected value="vegetable">Vegetable</option>
          </select><br />
        </label>
        <label>
          Image URL:<br />
          <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} /><br />
        </label>
        <label>
          Price:<br />
          <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
        </label>
        <label>
          Quantity:<br />
          <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} /><br />
        </label>
        <label>
          Description:<br />
          <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }

  const invalidVendor = () => <p>You Must Have A Vendor Account To Create A Product</p>
  const productNewDisplay = (!!vendorId ? newProductForm() : invalidVendor() )

  return <>{productNewDisplay}</>
}

export default ProductNew