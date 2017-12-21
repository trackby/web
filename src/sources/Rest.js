import axios from 'axios'
import config from 'config'

const apiSettings = () => {
  const headers = localStorage.getItem('token') ? {'x-access-token': localStorage.getItem('token')} : {};
  return {
    baseURL: config.apiURL,
    headers
  };
};

class Rest {

  static async post(url, parameter) {
    return axios.post(url, parameter, apiSettings());
  }

  static async patch(url, parameter) {
    return axios.patch(url, parameter, apiSettings());
  }

  static async get(url, parameter = {}) {
    return axios.get(url, Object.assign({}, {params: parameter}, apiSettings()));
  }

  static async del(url) {
    return axios.delete(url, apiSettings());
  }
}

export default Rest;
