import axios from 'axios';
import { config } from './config';
axios.defaults.baseURL = config.URLS.BASEURL;
export const ajaxOperations = {
  post(url, data) {
    return axios.post(url, data);
  },
  fetch(url) {
    return axios.get(url);
  },
};
