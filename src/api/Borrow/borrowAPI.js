import axiosInstance from '../axiosConfig';

/**
 * QR 대출 진입 시 책 상세 정보를 불러옵니다.
 *
 * @param {Number} bookNumber 책의 고유 번호
 * @returns {Promise<object>} 책의 상세 정보를 담은 객체
 */
export async function fetchGETQrPage(bookNumber) {
  try {
    const response = await axiosInstance.get(`borrow/qrbook?bookNumber=${bookNumber}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching book details: ${error.message}`);
  }
}

/**
 * bookNumber에 해당하는 책 대출 요청을 보냅니다.
 *
 * @param {Number} bookNumber 책의 고유 번호
 * @returns {Promise<object>} 서버 응답의 정보를 담은 객체
 */
export async function fetchGETBorrowBook(bookNumber) {
  try {
    return await axiosInstance.post(`/borrow?bookNumber=${bookNumber}`);
  } catch (error) {
    throw new Error(`Error fetching book borrow: ${error.message}`);
  }
}

/**
 * QR 반납 진입 시 반납 리스트를 불러옵니다.
 *
 * @param {Number} bookNumber 책의 고유 번호
 * @returns {Promise<array>} 반납 리스트를 담은 배열
 */
export async function fetchGETReturnList() {
  try {
    const response = await axiosInstance.get(`/borrow/return`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching returnlist: ${error.message}`);
  }
}

/**
 * 반납 요청을 보냅니다.
 *
 * @param {Number} bookNumber 책의 고유 번호
 * @param {Number} state 반납함 위치 번호
 * @returns {Promise<object>} 서버 응답의 정보를 담은 객체
 */
export async function fetchPUTReturnBook(bookNumber, state) {
  try {
    const response = await axiosInstance.put(
      `/borrow/return?bookNumber=${bookNumber}&state=${state}`
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching return book: ${error.message}`);
  }
}
