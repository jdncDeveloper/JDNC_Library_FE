import axiosInstance from "../axiosConfig";

export const fetchGetOverdueBorrowList = async (page) => {
  try {
    const response = await axiosInstance.get('/admin/book/overdue', {
      params: {
        page: page,
        size: 10,
      }
    });
    return response.data.data;
  } catch (error) {
    throw new Error(`Error fetching book list: ${error.message}`);
  }
}
