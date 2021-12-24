export const initialLocation = {
    location: {
      usda_id: 0,
      yelp_id: "",
      name: "",
      description: "",
      address: "",
      zipcode: 0,
      hours: "",
      fee: 0,
      pass: 0,
      image: "",
    },
    events: []
  }
  
export const initialEvent = Object.assign(initialLocation.location, {
  date: "",
  vendors: [],
  items: []
})

export const initialEvents = []

export const initialUser = {
  id: "",
  username: "",
  name: "",
  email: "",
  image: "",
  zipcode: "",
  venmoname: "",
  vendor: false
}

export const initialVendor = Object.assign(initialUser, {
  website: "",
  products: []
})

export const initialProduct = {
  name: "",
  category: "",
  description: "",
  image: "",
  price: 0,
  quantity: 0,
  vendor_id: 0
}