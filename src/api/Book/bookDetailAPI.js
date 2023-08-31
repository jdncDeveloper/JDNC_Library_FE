import axiosInstance from '../axiosConfig';

/**
 *  책 리스트를 통해 책 상세 정보 페이지에 들어갔을 경우(대출하는 페이지가 아님) 책 상세 정보를 불러옵니다.
 *
 * @param {Number} bookId
 */
export async function fetchGETBookDetailPage(bookId) {
  try {
    const { data } = await axiosInstance.get(`/book/${bookId}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching book details: ${error.message}`);
  }
}
