import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Style from './AdminBookDetail.style';
import { navigateUrl } from '../../constant/navigateUrl';
import AdminAddBookList from '../AdminAddBookList/AdminAddBookList';
import AdminBookDetailInfo from '../AdminBookDetailInfo/AdminBookDetailInfo';
import AdminBookDetailNew from '../AdminBookDetailNew/AdminBookListNew';
import { fetchGETBookDetailPage } from '../../api/Book/bookDetailAPI';
import { fetchPOSTAddBookList, fetchPOSTCreateBook } from '../../api/AdminBook/AdminBookDetailAPI';

const INITIAL_BOOK = {
  title: '',
  author: '',
  publisher: '',
  bookNumbers: '',
  image: '',
  content: '',
};

const AdminBookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(INITIAL_BOOK);
  const [newBook, setNewBook] = useState(INITIAL_BOOK);
  const [isEditing, setIsEditing] = useState(id ? true : false);

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
    if (id) fetchBookDetailPage(id);
  }, [id]);

  // const handleAddBook = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const bookNumber = newBook.bookNumbers;
  //     const response = await fetchPOSTAddBookList(bookNumber);
  //     if (response.status === 201) {
  //       setSelectedBook({
  //         ...selectedBook,
  //         bookNumbers: [...selectedBook.bookNumbers, bookNumber],
  //       });
  //       alert('책이 추가되었습니다.');
  //     } else {
  //       alert('책 추가에 실패했습니다.');
  //     }
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (selectedBook.id === id) return;
    setSelectedBook(selectedBook);
  }, [id, selectedBook]);

  const handleTextareaChange = (event) => {
    setSelectedBook((selectedBook) => ({ ...selectedBook, content: event.target.value }));
  };

  const handleEditOrSave = async (event) => {
    event.preventDefault();
    if (isEditing) {
      // 수정 updateBook.api
      setIsEditing(true);
    } else {
      // 저장 createBook.api
      try {
        const response = await fetchPOSTCreateBook(newBook);
        console.log(newBook);
        if (response.status === 201) {
          alert('책 정보가 등록 되었습니다.');
          setNewBook(INITIAL_BOOK);
        } else {
          alert('책 정보 등록에 실패했습니다.');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsEditing(false);
      }
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    setNewBook(INITIAL_BOOK);
    setSelectedBook(INITIAL_BOOK);
    navigate(navigateUrl.adminAddBookNew);
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
            <AdminBookDetailInfo
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
              labelData={labelData}
              groupData={groupData}
            />
          ) : (
            <AdminBookDetailNew
              newBook={newBook}
              setNewBook={setNewBook}
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
            <button type="submit" onClick={handleEditOrSave}>
              {isEditing ? '수정' : '저장'}
            </button>
          </div>
        </Style.BookDetailButtonWrapper>
      </Style.BookDetailContainer>
      <AdminAddBookList selectedBook={selectedBook} />
    </Style.Container>
  );
};

export default AdminBookDetail;
