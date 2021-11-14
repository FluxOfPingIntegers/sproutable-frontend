const url = "http://localhost:3000/"

export const getLocations = (zipcode) => {
  return dispatch => fetch(url + "locations/zip-search" + zipcode)
    .then(response => response.json())
    .then(locations => dispatch({type: "GET_LOCATIONS", payload: locations})
    )
}