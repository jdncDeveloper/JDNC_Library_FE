import axiosInstance from '../axiosConfig';

/**
 * QR 반납 진입 시 반납 리스트를 불러옵니다.
 *
 * @param {Number} bookNumber 책의 고유 번호
 * @returns {Promise<array>} 반납 리스트를 담은 배열
 */
export async function fetchGETReturnList() {
  try {
    const response = await axiosInstance.get('/borrow/return');
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching returnlist: ${error.message}`);
  }
}

/**
 * 반납 요청을 보냅니다.
 *
 * @param {Number} bookNumber 책의 고유 번호
 * @param {Number} floor 반납함 위치 번호
 * @returns {Promise<object>} 서버 응답의 정보를 담은 객체
 */
export async function fetchPUTReturnBook(bookNumber, floor) {
  try {
    const response = await axiosInstance.put('/borrow/return', { bookNumber, floor });
    return response;
  } catch (error) {
    throw new Error(`Error fetching return book: ${error.message}`);
  }
}
