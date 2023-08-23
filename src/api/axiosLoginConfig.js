import axios from "axios"
const axiosLoginConfig = axios.create({
  baseURL: 'https://15.164.10.229'
})

axiosLoginConfig.interceptors.response.use(
  response => {
    const newToken = response.headers.authorization;
    const newRefreshToken = response.headers['authorization-refresh'];
    if (newToken) {
      localStorage.setItem('jdncLibAccessToken', newToken);
    }
    if (newRefreshToken) {
      localStorage.setItem('jdncLibRefreshToken', newRefreshToken);
    }
    return response;
  },
  error => {
    console.log(error);
  }
)

export default axiosLoginConfig;
