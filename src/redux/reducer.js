import {initialLocation, initialUser, initialEvent, initialVendor} from './initialStates'

const initialState = {
  locations: [],
  selectedLocation: initialLocation,
  selectedUser: initialUser,
  selectedZip: 20500,
  selectedEvent: initialEvent,
  selectedVendor: initialVendor
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
    case "SET_VENDOR":
      return {...state, selectedUser: {...state["selectedUser"], vendor: action.payload}}
    case "GET_VENDOR":
      return {...state, selectedVendor: action.payload}
    case "CLEAR_VENDOR":
      return {...state, selectedVendor: initialVendor}
    case "SET_EVENT":
      return {...state, selectedEvent: action.payload}
    case "CLEAR_EVENT":
      return {...state, selectedEvent: initialEvent}
    default:
      return {...state}
  }
}