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

const initialState = {
  locations: [],
  selectedLocation: initialLocation,
  user: {
    username: ""
  }
}

export function reducer(state=initialState, action){
  switch(action.type){
    case "GET_LOCATIONS":
      return {...state, locations: action.payload};
    case "GET_LOCATION":
      return {...state, slectedLocation: action.payload};
    case "CLEAR_LOCATION":
      return {...state, selectedLocation: initialLocation};
    case "SET_USER":
      return {...state, user: action.payload};
    default:
      return {...state}
  }
}