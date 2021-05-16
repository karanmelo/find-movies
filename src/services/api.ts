import axios from 'axios';

const api = axios.create({
  baseURL: process.env.TMDB_URL,
});

api.interceptors.request.use(async (config) => {
  config.params.api_key = process.env.TMDB_API_KEY;
  config.params.language = process.env.TMDB_LANGUAGE;

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;