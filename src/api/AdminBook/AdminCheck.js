import axiosInstance from "../axiosConfig";

export const fetchPutAdminCheck = async (borrowId) => {
  console.log(borrowId);
  try {
    const response = await axiosInstance.put(`/admin/book/collection/return`, { ids: [ borrowId ]});
    return response;
  } catch (error) {
    console.error(error.response.status);
  }
}
