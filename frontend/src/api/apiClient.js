import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL, // Your backend URL
  withCredentials: true,               // CRITICAL for cookie-based auth
});

export default apiClient;