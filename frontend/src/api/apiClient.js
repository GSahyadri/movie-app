import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3500', // Your backend URL
  withCredentials: true,               // CRITICAL for cookie-based auth
});

export default apiClient;