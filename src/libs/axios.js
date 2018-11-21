import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 2500,
  headers: {
    'Content-Type': 'application/json'
  }
  // paramsSerializer: params => qs.stringify(params, { arrayFormat: 'brackets' }),
});
export default axiosInstance;
