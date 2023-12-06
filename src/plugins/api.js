import axios from 'axios';

const { MY_IP } = process.env;

const api = axios.create({
  // baseURL: `http://191.52.55.31:19003/api/`,
  baseURL: 'https://fabidecor.3.us-1.fl0.io/api/',

});

export default api;