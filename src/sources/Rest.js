import axios from 'axios'
import config from 'config'

const apiSettings = () => {
  const headers = localStorage.getItem('token') ? {Authorization: `Bearer${localStorage.getItem('token')}`} : {};
  return {
    baseURL: config.apiURL,
    headers
  };
};

class Rest {

  static post(url, parameter) {
    return axios.post(url, parameter, apiSettings());
  }

  static patch(url, parameter) {
    return axios.patch(url, parameter, apiSettings());
  }

  static get(url, parameter = {}) {
    return axios.get(url, Object.assign({}, {params: parameter}, apiSettings()));
  }

  static del(url) {
    return axios.delete(url, apiSettings());
  }
}

export default Rest;
