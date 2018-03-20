import request from 'superagent'

export default class ApiClient {

  constructor(host, options = {}) {
    this.host = host || 'https://jsonplaceholder.typicode.com'
    this.options = { ...this.defaultOptions, ...options }
  }

  get(path) {
    return request
      .get(this.createUrl(path))
      .set(this.headers())
  }

  headers() {
    let headers = {
      Accept: 'application/json'
    }

    return headers
  }

}
