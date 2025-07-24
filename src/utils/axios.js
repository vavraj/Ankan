import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001',  // Replace with your backend URL
  timeout: 1000,
});

export default instance;

