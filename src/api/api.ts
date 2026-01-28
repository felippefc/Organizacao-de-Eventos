import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.2.15:3000', // ajuste se mudar de rede
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});
