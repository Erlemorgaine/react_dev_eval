

export default () => {
  return dispatch => {
    api.get('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
      .then(res => dispatch({
        type: GET_PHOTOS, payload: res.body
      }))
  }
}
