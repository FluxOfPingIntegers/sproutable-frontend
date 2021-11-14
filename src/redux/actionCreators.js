const url = "http://localhost:3000/"

export const getLocations = (zipcode) => {
  return dispatch => fetch(`${url}locations/zip-search/${zipcode}`)
    .then(response => response.json())
    .then(locations => dispatch({type: "GET_LOCATIONS", payload: locations})
    )
}

export const getLocation = (id) => {
  return dispatch => fetch(`${url}locations/${id}`)
    .then(response => response.json())
    .then(location => dispatch({type: "GET_LOCATION", payload: location})
  )
}