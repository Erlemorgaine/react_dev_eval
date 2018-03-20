const photos = []

export default function(state = photos, { type, payload } = {}) {
  switch(type) {

    case 'GET_PHOTOS' :
      return payload

    default :
      return state
  }
}
