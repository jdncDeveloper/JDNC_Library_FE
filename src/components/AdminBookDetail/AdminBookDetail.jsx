import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Style from './AdminBookDetail.style';
import AdminAddBookList from '../AdminAddBookList/AdminAddBookList';
import AdminBookDetailInfo from '../AdminBookDetailInfo/AdminBookDetailInfo';
import { getBookList } from '../../api/testAPI/get/getBookList';

const INITIAL_BOOK = {
  title: '',
  author: '',
  publisher: '',
  bookNumber: '',
  imageUrl: '',
  content: '',
};

const AdminBookDetail = () => {
  const { bookNumber } = useParams();
  const [bookList, setBookList] = useState([]);
  const [newBook, setNewBook] = useState(INITIAL_BOOK);
  const [disappear, setDisappear] = useState(false);

  // mockdata로 테스트중입니다.
  useEffect(() => {
    const fetchBookList = async () => {
      const response = await getBookList();
      setBookList(response);
    };
    fetchBookList();
  }, []);

  useEffect(() => {
    const bookDetail = bookList.find((book) => book.bookNumber === bookNumber);
    if (bookDetail) {
      setNewBook(bookDetail);
    }
  }, [bookNumber, bookList]);

  const handleTextareaChange = (event) => {
    setNewBook({ ...newBook, content: event.target.value });
  };

  const handleReset = () => {
    setNewBook(INITIAL_BOOK);
    if (newBook.imageUrl) {
      URL.revokeObjectURL(newBook.imageUrl);
    }
  };

  return (
    <Style.Container>
      <Style.BookDetailContainer>
        <Style.BookDetailWrapper>
          <Style.BookDetailImage>
            <img src={newBook.imageUrl} alt="BookDetailImage" />
          </Style.BookDetailImage>
          <AdminBookDetailInfo newBook={newBook} setNewBook={setNewBook} />
        </Style.BookDetailWrapper>
        <Style.BookDetailContent>
          <h3>책 소개 :</h3>
          <textarea value={newBook.content} onChange={handleTextareaChange}></textarea>
        </Style.BookDetailContent>
        <Style.BookDetailButtonWrapper>
          <button onClick={handleReset}>초기화</button>
          <div>
            <button>책 추가</button>
            <button>수정</button>
          </div>
        </Style.BookDetailButtonWrapper>
      </Style.BookDetailContainer>
      <AdminAddBookList bookList={bookList} disappear={disappear} setDisappear={setDisappear} />
    </Style.Container>
  );
};

export default AdminBookDetail;
