import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://exercism.org/api/v2/',
  timeout: 20000,
});

export default axiosInstance;
