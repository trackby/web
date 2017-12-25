import axios from 'axios'
import config from 'config'

const apiSettings = () => {
  const headers = localStorage.getItem('token') ? { 'x-access-token': localStorage.getItem('token') } : {}
  return {
    baseURL: config.apiURL,
    headers,
  }
}

class Rest {
  static async post(url, parameter, query = {}) {
    return axios.post(url, parameter, Object.assign({}, { params: query }, apiSettings()))
  }

  static async patch(url, parameter, query = {}) {
    return axios.patch(url, parameter, Object.assign({}, { params: query }, apiSettings()))
  }

  static async get(url, parameter = {}) {
    return axios.get(url, Object.assign({}, { params: parameter }, apiSettings()))
  }

  static async del(url, query = {}, parameter = null) {
    return axios.delete(url, Object.assign({}, { params: query, data: parameter }, apiSettings()))
  }
}

export default Rest
