import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Style from './AdminBookDetail.style';
import AdminAddBookList from '../AdminAddBookList/AdminAddBookList';
import AdminBookDetailInfo from '../AdminBookDetailInfo/AdminBookDetailInfo';
import AdminBookDetailNew from '../AdminBookDetailNew/AdminBookListNew';
import { getBookList } from '../../api/testAPI/get/getBookList';

const INITIAL_BOOK = {
  title: '',
  author: '',
  publisher: '',
  bookNumber: '',
  image: '',
  content: '',
};

const AdminBookDetail = () => {
  const { bookNumber } = useParams();
  const [bookList, setBookList] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});
  const [newBook, setNewBook] = useState(INITIAL_BOOK);
  const [isEditing, setIsEditing] = useState(false);

  const labelData = [
    { labelValue: 'title', label: '도서명', placeholder: '도서명을 입력하세요.' },
    { labelValue: 'author', label: '저자', placeholder: '저자를 입력하세요.' },
    { labelValue: 'publisher', label: '출판사', placeholder: '출판사를 입력하세요.' },
    { labelValue: 'bookNumber', label: '책번호', placeholder: '책번호를 기입하세요' },
  ];

  const groupData = [
    { groupValue: 'T', bookGroup: 'T' },
    { groupValue: 'A', bookGroup: 'A' },
    { groupValue: 'M', bookGroup: 'M' },
    { groupValue: 'N', bookGroup: 'N' },
    { groupValue: 'a', bookGroup: 'a' },
  ];

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
    setSelectedBook(bookDetail);
  }, [bookNumber, bookList]);
  const handleTextareaChange = (event) => {
    setBookList({ ...bookList, bookInfo: event.target.value });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setNewBook(INITIAL_BOOK);
    setSelectedBook(INITIAL_BOOK);
    setIsEditing(true);
  };

  return (
    <Style.Container>
      <Style.BookDetailContainer>
        <Style.BookDetailWrapper>
          <Style.BookDetailImage>
            {selectedBook && <img src={selectedBook?.image} alt="BookDetailImage" />}
          </Style.BookDetailImage>
          {isEditing ? (
            <AdminBookDetailNew
              newBook={newBook}
              setNewBook={setNewBook}
              labelData={labelData}
              groupData={groupData}
            />
          ) : (
            <AdminBookDetailInfo
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
              labelData={labelData}
              groupData={groupData}
            />
          )}
        </Style.BookDetailWrapper>
        <Style.BookDetailContent>
          <h3>책 소개 :</h3>
          {selectedBook && (
            <textarea value={selectedBook?.content} onChange={handleTextareaChange}></textarea>
          )}
        </Style.BookDetailContent>
        <Style.BookDetailButtonWrapper>
          <button type="button" onClick={handleReset}>
            초기화
          </button>
          <div>
            <button>책 추가</button>
            <button>수정</button>
          </div>
        </Style.BookDetailButtonWrapper>
      </Style.BookDetailContainer>
      <AdminAddBookList bookList={bookList} />
    </Style.Container>
  );
};

export default AdminBookDetail;
