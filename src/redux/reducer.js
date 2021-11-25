
const initialLocation = {
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

const initialEvent = Object.assign(initialLocation.location, {
  date: "",
  vendors: []
})

const initialUser = {
  username: "",
  name: "",
  email: "",
  image: "",
  zipcode: "",
  venmoname: ""
}

const initialState = {
  locations: [],
  selectedLocation: initialLocation,
  selectedUser: initialUser,
  selectedZip: 20500,
  selectedEvent: initialEvent
}

export function reducer(state=initialState, action){
  switch(action.type){
    case "GET_LOCATIONS":
      return {...state, locations: action.payload};
    case "GET_LOCATION":
      return {...state, selectedLocation: action.payload};
    case "CLEAR_LOCATION":
      return {...state, selectedLocation: initialLocation};
    case "SET_USER":
      return {...state, selectedUser: action.payload}
    case "GET_USER":
      return {...state, selectedUser: action.payload}
    case "CLEAR_USER":
      localStorage.clear()
      return {...state, selectedUser: initialUser, }
    case "SET_ZIPCODE":
      return {...state, selectedZipCode: action.payload}
    case "SET_EVENT":
      console.log("SET_EVENT action.payload=", action.payload)
      return {...state, selectedEvent: action.payload}
    case "CLEAR_EVENT":
      return {...state, selectedEvent: initialEvent}
    default:
      return {...state}
  }
}