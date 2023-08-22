import axios from "axios"
const axiosLoginConfig = axios.create({
  baseURL: 'http://15.164.10.229'
})

axiosLoginConfig.interceptors.response.use(
  response => {
    const newToken = response.headers.authorization;
    if (newToken) {
      localStorage.setItem('jdncLibAccessToken', newToken);
    }
    return response;
  },
  error => {
    console.log(error);
  }
)

export default axiosLoginConfig;
