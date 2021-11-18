const initialLocation = {
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
}

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
  user: {
    username: ""
  },
  selectedZip: 20500
}

export function reducer(state=initialState, action){
  switch(action.type){
    case "GET_LOCATIONS":
      return {...state, locations: action.payload};
    case "GET_LOCATION":
      console.log(`GET_LOCATION action=`, action)
      return {...state, selectedLocation: action.payload};
    case "CLEAR_LOCATION":
      return {...state, selectedLocation: initialLocation};
    case "SET_USER":
      return {...state, user: action.payload};
    case "GET_USER":
      return {...state, selectedUser: action.payload}
    case "CLEAR_USER":
      return {...state, selectedUser: initialUser}
    default:
      return {...state}
  }
}