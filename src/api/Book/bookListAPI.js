import axiosInstance from '../axiosConfig';

export async function fetchGETBookList() {
  try {
    const response = await axiosInstance.get('/book', { data: { page: 1, size: 10 } });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching book list: ${error.message}`);
  }
}
