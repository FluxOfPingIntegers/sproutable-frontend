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

export const initialUser = {
  username: "",
  name: "",
  email: "",
  image: "",
  zipcode: "",
  venmoname: "",
  vendor: false
}