import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://exercism.org/api/v2/',
  timeout: 20000,
});

axiosInstance.interceptors.response.use((response) => {
  return response.data;
});

export default axiosInstance;
