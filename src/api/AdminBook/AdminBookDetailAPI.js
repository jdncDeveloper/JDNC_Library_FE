import axiosInstance from '../axiosConfig';

/**
 * 보유중인 책 정보의 책 번호를 부여하여 새로 생성합니다.
 *
 * @param {number} bookNumber - 책 번호
 * @param {number} bookId - 책 아이디
 */
export async function fetchPOSTAddBookList(bookNumber, bookId) {
  try {
    const response = await axiosInstance.post(`admin/book/collection`, { bookNumber, bookId });

    return response;
  } catch (error) {
    throw new Error(`Error fetching book list: ${error.message}`);
  }
}

export async function fetchPOSTCreateBook(book) {
  const bookToSend = { ...book };
  delete bookToSend.bookNumber;
  try {
    const response = await axiosInstance.post('admin/book', bookToSend);

    return response;
  } catch (error) {
    throw new Error(`Error fetching book list: ${error.message}`);
  }
}

export async function fetchPUTUpdateBook(id, book) {
  const bookToSend = { ...book };
  delete bookToSend.bookNumbers;
  try {
    const response = await axiosInstance.put(`admin/book/${id}`, bookToSend);

    return response;
  } catch (error) {
    throw new Error(`Error fetching book list: ${error.message}`);
  }
}

export async function fetchPUTLostBook(bookNumber) {
  try {
    const response = await axiosInstance.put(`admin/book/collection/lost`, bookNumber);

    return response;
  } catch (error) {
    throw new Error(`Error fetching book list: ${error.message}`);
  }
}
