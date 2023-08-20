import axiosInstance from "../axiosConfig";

export async function fetchPOSTLogin(loginForm) {
  const response = await axiosInstance.post('/login', loginForm);
  return response;
}
