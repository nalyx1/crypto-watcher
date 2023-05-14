import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Adicionar qualquer lógica de pré-processamento aqui
    return config;
  },
  (error) => {
    // Adicionar qualquer lógica de tratamento de erro aqui
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Adicionar qualquer lógica de pós-processamento aqui
    return response;
  },
  (error) => {
    // Adicionar qualquer lógica de tratamento de erro aqui
    return Promise.reject(error);
  }
);
export default axiosInstance;
