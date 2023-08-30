import axiosInstance from '../axiosConfig';

/**
 * 반납 처리 페이지 / 대출중인 모든 책 리스트를 불러옵니다.
 *
 * @param {Number} id 책 고유 아이디
 * @returns {Promise<array>} 대출 중인 모든 리스트를 담은 배열
 */
export async function fetchGETAllBorrowedBookList() {
  try {
    const response = await axiosInstance.get(`/`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching AllBorrowedBookList: ${error.message}`);
  }
}

/**
 * id에 해당하는 책들을 반납처리 요청을 합니다.
 *
 * @param {Array} IdArray 책 아이디들이 담긴 배열
 * @returns {Promise<object>} 서버 응답 정보를 담은 객체
 */

export async function fetchPUTAdminReturnBookRequest(IdArray) {
  try {
    const response = await axiosInstance.get(`book/admincheck`, IdArray);
    return response;
  } catch (error) {
    throw new Error(`Error fetching book ReturnRequest: ${error.message}`);
  }
}
