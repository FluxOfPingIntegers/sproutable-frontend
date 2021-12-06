const url = "http://localhost:3000"

export const getLocations = (zipcode) => {
  return dispatch => fetch(`${url}/locations/zip-search/${zipcode}`)
    .then(result => result.json())
    .then(locations => dispatch({type: "GET_LOCATIONS", payload: locations})
    )
}

export const getLocation = (id) => {
  return dispatch => fetch(`${url}/locations/${id}/events`)
    .then(response => response.json())
    .then(location => dispatch({type: "GET_LOCATION", payload: location}))
}

export const clearLocation = () => ({type: "CLEAR_LOCATION"})

export const submitSignup = (user) => {
  return dispatch => fetch(`${url}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(result => {
    if (!!result.user && !!result.token) {
      localStorage.token = result.token
      dispatch({type: "SET_USER", payload: Object.assign(result.user, {vendor: result.vendor})})
    } else {window.alert("Invalid Entry")}
  })
}

export const submitLogin = (user) => {
  return dispatch => fetch(`${url}/sessions`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(result => {
    if (!!result.user && !!result.token) {
      localStorage.token = result.token
      dispatch({type: "SET_USER", payload: Object.assign(result.user, {vendor: result.vendor})})
    } else {window.alert("Invalid Entry")}
  })
}

export const getUser = () => {
  return dispatch => fetch(`${url}/users/1`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    }
  })
  .then(response => response.json())
  .then(user => dispatch({type: "GET_USER", payload: user}))
  .catch(error => console.log(error))
}

export const clearUser = () => {return dispatch => dispatch({type: "CLEAR_USER"})}

export const submitVendorSignup = (vendor) => {
  return dispatch => fetch(`${url}/vendors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify(vendor)
  })
  .then(response => response.json())
  .then(result => {return (!!result.id ? dispatch({type: "SET_VENDOR", payload: result}) : window.alert("Invalid Entry"))})
  .catch(error => console.log(error))
}

export const submitVendorUpdate = (vendor) => {
  return dispatch => fetch(`${url}/vendors/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify(vendor)
  })
  .then(response => response.json())
  .then(result => dispatch({type: "SET_VENDOR", payload: result}))
  .catch(error => console.log(error))
}

export const getVendor = (vendorId) => {
  return dispatch => fetch(`${url}/vendors/${vendorId}`)
    .then(response=>response.json())
    .then(result => dispatch({type: "GET_VENDOR", payload: result}))
}

export const clearVendor = () => {return dispatch => dispatch({type: "CLEAR_VENDOR"})}

export const getEvent = ({locationId, eventId}) => {
  return dispatch => fetch(`${url}/locations/${locationId}/events/${eventId}`)
    .then(response => response.json())
    .then(({event, vendors, items}) => dispatch({type: "SET_EVENT", payload: Object.assign(event, {vendors: vendors, items: items})}))
}

export const clearEvent = () => {return dispatch => dispatch({type: "CLEAR_EVENT"})}

export const autoLogin = () => {
  return dispatch => fetch(`${url}/me`, {
    headers: {
      'Authorization': localStorage.token
    }
  })
  .then(response => response.json())
  .then(result => {
    if (!!result.user && !!result.token) {
      localStorage.token = result.token
      dispatch({type: "SET_USER", payload: Object.assign(result.user, {vendor: result.vendor})})
    } else {console.log("Invalid autologin result=", result)}
  })
  .catch(error => console.log(error))
}

export const submitUserUpdate = (user) => {
  return dispatch => fetch(`${url}/users/1`, {
    method: 'PUT',
    headers: {
      'Authorization': localStorage.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(result => {
    !!result["user"] ? dispatch({type: "SET_USER", payload: result["user"]}) : dispatch({type: "SET_USER", payload: result})
  })
  .catch(error => console.log(error))
}

export const submitProductDestroy = ({productId, vendorId}) => {
  return dispatch => fetch(`${url}/vendors/${vendorId}/products/${productId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': localStorage.token,
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    !!result["products"] ? dispatch({type: "SET_VENDOR", payload: result}) : window.alert("Invalid Delete Action")
  })
}

export const getProduct = ({productId, vendorId}) => {
  return dispatch => fetch(`${url}/vendors/${vendorId}/products/${productId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    !!result["name"] ? dispatch({type: "SET_PRODUCT", payload: result}) : window.alert("No Such Product")
  })
}

export const submitNewProduct = ({vendorId, productParams}) => {
  return dispatch => fetch(`${url}/vendors/${vendorId}/products`, {
    method: 'POST',
    headers: {
      'Authorization': localStorage.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(productParams)
  })
  .then(response => response.json())
  .then(vendor => {return (!!vendor.id ? dispatch({type: "SET_VENDOR", payload: vendor}) : window.alert(vendor.errors))})
}

export const clearProduct = () => {return dispatch => dispatch({type: "CLEAR_PRODUCT"})}

export const setZipCode = (zipcode) => {return dispatch => dispatch({type: "SET_ZIPCODE", payload: zipcode})}