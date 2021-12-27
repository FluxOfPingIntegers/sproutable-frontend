import {initialLocation, initialUser, initialEvent, initialVendor, initialProduct, initialEvents} from './initialStates'

const initialState = {
  locations: [],
  selectedLocation: initialLocation,
  selectedUser: initialUser,
  selectedZip: 20500,
  selectedEvent: initialEvent,
  selectedEvents: initialEvents,
  selectedVendor: initialVendor,
  selectedProduct: initialProduct
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
      console.log("SET_USER payload=", action.payload)
      return {...state, selectedUser: action.payload}
    case "GET_USER":
      console.log("GET_USER payload=", action.payload)
      return {...state, selectedUser: action.payload}
    case "CLEAR_USER":
      localStorage.clear()
      return {...state, selectedUser: initialUser, }
    case "SET_ZIPCODE":
      return {...state, selectedZipCode: action.payload}
    case "SET_VENDOR":
      console.log("SET_VENDOR, payload=", action.payload)
      return {...state, selectedUser: {...state["selectedUser"], vendor: action.payload}}
    case "GET_VENDOR":
      return {...state, selectedVendor: action.payload}
    case "CLEAR_VENDOR":
      return {...state, selectedVendor: initialVendor}
    case "SET_EVENT":
      return {...state, selectedEvent: action.payload}
    case "CLEAR_EVENT":
      return {...state, selectedEvent: initialEvent}
    case "SET_EVENTS":
      console.log("SET_EVENTS, payload=", action.payload)
      return {...state, selectedEvents: action.payload}
    case "CLEAR_EVENTS":
      return {...state, selectedEvents: initialEvents}
    case "SET_PRODUCT":
      console.log("SET_PRODUCT, payload=", action.payload)
      return {...state, selectedProduct: action.payload}
    case "CLEAR_PRODUCT":
      return {...state, selectedProduct: initialProduct}
    default:
      return {...state}
  }
}