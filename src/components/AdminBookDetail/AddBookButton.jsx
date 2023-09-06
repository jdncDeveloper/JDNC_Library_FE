import { fetchGETBookDetailPage } from '../../api/Book/bookDetailAPI';
import { fetchPOSTAddBookList } from '../../api/AdminBook/AdminBookDetailAPI';

const AddBookButton = ({ id, selectedBook, setSelectedBook }) => {
  const handleAddBook = async (event) => {
    event.preventDefault();
    try {
      const bookNumber = selectedBook.bookNumber;
      const response = await fetchPOSTAddBookList(bookNumber, id);
      if (response.status === 201) {
        setSelectedBook({
          ...selectedBook,
          bookNumber: bookNumber,
        });

        const newBookList = await fetchGETBookDetailPage(id);
        setSelectedBook(newBookList.data);

        alert('책이 추가되었습니다.');
      } else {
        alert('책 추가에 실패했습니다.');
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="submit" onClick={handleAddBook}>
      책 추가
    </button>
  );
};

export default AddBookButton;
