import axiosInstance from '../axiosConfig';

/**
 * 반납 처리 페이지 / 대출중인 모든 책 리스트를 불러옵니다.
 *
 * @param {Number} id 책 고유 아이디
 * @returns {Promise<array>} 대출 중인 모든 리스트를 담은 배열
 */
export async function fetchGETAllBorrowedBookList(page) {
  try {
    const { data } = await axiosInstance.get(`/admin/book/overdue`, {
      params: {
        page: page,
        size: 100,
      },
    });
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
    return await axiosInstance.put(`/admin/book/collection/return`, { ids: IdArray });
  } catch (error) {
    throw new Error(`Error fetching book ReturnRequest: ${error.message}`);
  }
}

/**
 * 월별 도서 대출 기록을 불러옵니다.
 *
 * @param {Number} year 선택한 년도
 * @param {Number} month 선택한 월
 */

export async function fetchGETBookListOfMonth(year, month, page) {
  try {
    const { data } = await axiosInstance.get(`/admin/book/monthly`, {
      params: {
        year,
        month,
        page,
        size: 100,
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching BookList Of Month: ${error.message}`);
  }
}

/**
 * 월별 도서 대출 기록 엑셀 다운로드
 *
 * @param {Number} year 선택한 년도
 * @param {Number} month 선택한 월
 */

export async function fetchGETExcelDownload(year, month) {
  try {
    return await axiosInstance.get(`/excel`, {
      params: {
        year,
        month,
      },
    });
  } catch (error) {
    console.log(`Error fetching Excel Download: ${error.message}`);
  }
}
