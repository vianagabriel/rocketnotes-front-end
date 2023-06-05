import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-e5x5.onrender.com'
});

