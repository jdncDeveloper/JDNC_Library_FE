import axiosInstance from "../axiosConfig";

/**
 * QR 대출 진입 시 책 상세 정보를 불러옵니다.
 * 
 * @param {Number} bookNumber 책의 고유 번호
 * @returns {Promise<object>} 책의 상세 정보를 담은 객체
 * {
 *   id: number,      // 책의 고유 ID
 *   title: string,   // 책의 제목
 *   image: string,   // 책의 이미지 URL
 *   content: string, // 책의 소개
 *   author: string,  // 책의 작가
 *   publisher: string // 책의 출판사
 * }
 */ 
export async function fetchGETQrPage(bookNumber) {
  try {
    const response = await axiosInstance.get(`/qrbook?${bookNumber}`);
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
    const response = await axiosInstance.get(`/borrowbook?${bookNumber}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching book borrow: ${error.message}`);
  }
}
  
  /**
   * QR 반납 진입 시 반납 리스트를 불러옵니다.
   * 
   * @param {Number} bookNumber 책의 고유 번호
   * @returns {Promise<array>} 반납 리스트를 담은 배열
   * [
   *  { 
   *      borrowId: number, 
   *      borrowName: string, 
   *      borrowDate: date, 
   *      image: string, 
   *      title: string, 
   *      author: string, 
   *      publisher: string, 
   *      returnDate: date
   *  }
   * ]
   */
  export async function fetchGETReturnList() {
    try {
      const response = await axiosInstance.get('/returnlist');
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching returnlist: ${error.message}`);
    }
  }
  
  /**
   * 반납 요청을 보냅니다.
   * 
   * @param {Number} bookNumber 책의 고유 번호
   * @returns {Promise<object>} 서버 응답의 정보를 담은 객체
   */
  export async function fetchGETReturnBook(bookNumber) {
    try {
      const response = await axiosInstance.get(`/return?${bookNumber}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching return book: ${error.message}`);
    }
  }
