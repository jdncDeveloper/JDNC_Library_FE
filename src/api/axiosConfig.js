import axios from 'axios';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const axiosInstance = axios.create({
  baseURL: 'http://15.164.10.229'
});

// 요청 보내기 전 토큰을 포함시킵니다.
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jdncLibAccessToken');

    if (token) {
      config.headers['Authorization'] = token;
    }
    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    const newToken = response.headers['Authorization']; 

    if (newToken) {
      localStorage.setItem('jdncLibAccessToken', newToken);
    }

    return response;
  },
  error => {
    // handleHTTPError(object);
    if (error.response.status === 401) {
      history.push('/login');
    }
    if (error.response.status === 403) {
      alert('로그인 정보가 일치하지 않습니다.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
