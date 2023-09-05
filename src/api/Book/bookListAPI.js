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

/**
 * 전체 총 도서 갯수를 불러옵니다.
 *
 */
export async function fetchGETAllBookCount() {
  try {
    return await axiosInstance.get(`/book/collection`);
  } catch (error) {
    throw new Error(`Error fetching AllBookCount: ${error.message}`);
  }
}

/**
 * 대출가능한 도서 책 갯수를 불러옵니다.
 *
 */
export async function fetchGETAvailableBookCount() {
  try {
    return await axiosInstance.get(`/book/available`);
  } catch (error) {
    throw new Error(`Error fetching AvailableBookCount: ${error.message}`);
  }
}
