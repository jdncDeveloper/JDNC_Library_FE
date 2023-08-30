import axiosInstance from '../axiosConfig';

export async function fetchGETBookList() {
  try {
    const response = await axiosInstance.get('/book');
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching book list: ${error.message}`);
  }
}
