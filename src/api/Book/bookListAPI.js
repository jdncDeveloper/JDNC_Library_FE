import axiosInstance from '../axiosConfig';

export async function fetchGETBookList(page = 0, size, group, title) {
  try {
    const response = await axiosInstance.get('/book', {
      params: {
        page,
        size,
        group,
        title,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching book list: ${error.message}`);
  }
}
