import axios from 'axios';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
// axios.defaults.withCredentials = true;
const axiosInstance = axios.create({
  baseURL: 'https://api.jdnclib.com',
  headers: { Authorization: '' },
});

// 요청 보내기 전 토큰을 포함시킵니다.
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jdncLibAccessToken');
    const refreshToken = localStorage.getItem('jdncLibRefreshToken');
    if (token) {
      config.headers['Authorization'] = token;
    }
    if (refreshToken) {
      config.headers['Authorization-Refresh'] = refreshToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const newToken = response.headers['Authorization'];
    const newRefreshToken = response.headers['Authorization-Refresh'];
    if (newToken) {
      localStorage.setItem('jdncLibAccessToken', newToken);
    }
    if (newRefreshToken) {
      localStorage.setItem('jdncLibRefreshToken', newRefreshToken);
    }

    return response;
  },
  (error) => {
    // handleHTTPError(object);
    if (error.response.status === 500) {
    }
    if (error.response.status === 403) {
      alert('로그인 정보가 일치하지 않습니다.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
