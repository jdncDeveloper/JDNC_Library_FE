import axiosLoginConfig from "../axiosLoginConfig";

export async function fetchPOSTLogin(loginForm) {
  const response = await axiosLoginConfig.post('/login', loginForm);
  return response;
}
