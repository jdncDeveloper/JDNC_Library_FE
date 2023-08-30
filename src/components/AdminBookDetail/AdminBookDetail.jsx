import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Style from './AdminBookDetail.style';
import AdminAddBookList from '../AdminAddBookList/AdminAddBookList';
import AdminBookDetailInfo from '../AdminBookDetailInfo/AdminBookDetailInfo';
import AdminBookDetailNew from '../AdminBookDetailNew/AdminBookListNew';
import { fetchGETBookDetailPage } from '../../api/Book/bookDetailAPI';

const INITIAL_BOOK = {
  title: '',
  author: '',
  publisher: '',
  bookNumber: '',
  image: '',
  content: '',
};

const AdminBookDetail = () => {
  const path = useLocation().pathname;
  const pathArray = path.split('/');
  const id = pathArray[pathArray.length - 1];
  const [selectedBook, setSelectedBook] = useState(INITIAL_BOOK);
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

  useEffect(() => {
    const fetchBookDetailPage = async (id) => {
      const response = await fetchGETBookDetailPage(id);
      setSelectedBook(response.data);
    };
    fetchBookDetailPage(id);
  }, [id]);

  useEffect(() => {
    if (selectedBook.id === id) {
      setSelectedBook(selectedBook);
    }
  }, [id, selectedBook]);

  const handleTextareaChange = (event) => {
    setSelectedBook({ ...selectedBook, content: event.target.value });
  };

  const handleEditOrSave = (event) => {
    event.preventDefault();
    if (isEditing) {
      // 수정 updateBook.api
      setIsEditing(false);
    } else {
      // 저장 createBook.api
      setIsEditing(true);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    setNewBook(INITIAL_BOOK);
    setSelectedBook(INITIAL_BOOK);
    setIsEditing(false);
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
            <button onClick={handleEditOrSave}>{isEditing ? '저장' : '수정'}</button>
          </div>
        </Style.BookDetailButtonWrapper>
      </Style.BookDetailContainer>
      <AdminAddBookList selectedBook={selectedBook} />
    </Style.Container>
  );
};

export default AdminBookDetail;
