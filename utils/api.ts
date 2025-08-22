import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

// Axios instance oluştur
const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor 
apiClient.interceptors.request.use(
  (config) => {
    if (__DEV__) {
      console.log('🚀 API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        baseURL: config.baseURL,
      });
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor hatası:', error);
    return Promise.reject(error);
  }
);

// Response interceptor 
apiClient.interceptors.response.use(
  (response) => {
    if (__DEV__) {
      console.log('✅ API Response:', {
        status: response.status,
        url: response.config.url,
      });
    }
    return response;
  },
  (error) => {
    console.error('❌ API Error:', {
      status: error.response?.status,
      message: error.message,
      url: error.config?.url,
    });
    return Promise.reject(error);
  }
);

export const api = {
  get: apiClient.get.bind(apiClient),
};

export default apiClient;