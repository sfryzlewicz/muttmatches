// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://frontend-take-home-service.fetch.com',
  withCredentials: true, // Include credentials (cookies) with requests
});

export default instance;
