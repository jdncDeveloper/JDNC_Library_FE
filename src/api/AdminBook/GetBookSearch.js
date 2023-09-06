import axiosInstance from '../axiosConfig';

export async function fetchGETBookSearch(title, page) {
  try {
    const response = await axiosInstance.get(`api/naver-books?title=${title}&page=${page}`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching book list: ${error.message}`);
  }
}
