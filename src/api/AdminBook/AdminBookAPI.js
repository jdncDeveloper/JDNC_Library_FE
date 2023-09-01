import axiosInstance from '../axiosConfig';

/**
 * 반납 처리 페이지 / 대출중인 모든 책 리스트를 불러옵니다.
 *        (현재 미반납된 도서 목록을 불러옵니다. 추후에 변경해야 합니다.)
 *
 * @param {Number} id 책 고유 아이디
 * @returns {Promise<array>} 대출 중인 모든 리스트를 담은 배열
 */
export async function fetchGETAllBorrowedBookList() {
  try {
    const { data } = await axiosInstance.get(`/admin/book/overdue`);
    return data;
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
    return await axiosInstance.put(`/admin/book/collection/return`, IdArray);
  } catch (error) {
    throw new Error(`Error fetching book ReturnRequest: ${error.message}`);
  }
}

/**
 * 월간 도서 대출 리스트를 불러옵니다. (추후 월별 대출 기록으로 받아와야함)
 *
 * @param {Number} year 선택한 년도
 * @param {Number} month 선택한 월
 */

export async function fetchGETBookListOfMonth() {
  try {
    const { data } = await axiosInstance.get(`/admin/book/monthly`);
    return data;
  } catch (error) {
    throw new Error(`Error fetching BookList Of Month: ${error.message}`);
  }
}
