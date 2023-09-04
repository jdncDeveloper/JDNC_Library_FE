import axiosInstance from '../axiosConfig';

/**
 * QR 코드를 찍고 책 대출 페이지 진입 시 책의 상세 정보를 불러옵니다.
 *
 * @param {Number} bookNumber
 * @returns {Promise<object>} 책의 상세 정보를 담은 객체
 */

export async function fetchGETQrBorrowBookInfo(bookNumber) {
  try {
    const { data } = await axiosInstance.get(`/borrow/${bookNumber}`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching BorrowBookInfo: ${error.message}`);
  }
}

/**
 * bookNumber에 해당하는 책 대출 요청을 보냅니다.
 *
 * @param {Number} bookNumber
 * @returns {Promise<object>} 서버 응답의 정보를 담은 객체
 */
export async function fetchPOSTBorrowBook(bookNumber) {
  try {
    const requestData = {
      bookNumber: bookNumber,
    };
    return await axiosInstance.post(`/borrow`, requestData);
  } catch (error) {
    throw new Error(`Error fetching Book Borrow: ${error.message}`);
  }
}
