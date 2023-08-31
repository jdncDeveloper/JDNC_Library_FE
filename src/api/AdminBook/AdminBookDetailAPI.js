import axiosInstance from '../axiosConfig';

/**
 * 보유중인 책 정보의 책 번호를 부여하여 새로 생성합니다.
 *
 * @param {number} bookNumber - 책 번호
 */
export async function fetchPOSTAddBookList(bookNumber) {
  try {
    const response = await axiosInstance.post(`/book/addnumber?bookNumber=${bookNumber}`);

    return response;
  } catch (error) {
    throw new Error(`Error fetching book list: ${error.message}`);
  }
}

export async function fetchPOSTCreateBook(book) {
  try {
    const response = await axiosInstance.post('/book', book);

    return response;
  } catch (error) {
    throw new Error(`Error fetching book list: ${error.message}`);
  }
}
