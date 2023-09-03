import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Style from './AdminBookDetail.style';
import { navigateUrl } from '../../constant/navigateUrl';
import AdminAddBookList from '../AdminAddBookList/AdminAddBookList';
import AdminBookDetailInfo from '../AdminBookDetailInfo/AdminBookDetailInfo';
import AdminBookDetailNew from '../AdminBookDetailNew/AdminBookDetailNew';
import { fetchGETBookDetailPage } from '../../api/Book/bookDetailAPI';
import { fetchPOSTAddBookList } from '../../api/AdminBook/AdminBookDetailAPI';
import EditOrSaveButton from './EditOrSaveButton';

export const INITIAL_BOOK = {
  title: '',
  author: '',
  publisher: '',
  bookGroup: '',
  bookNumber: '',
  image: '',
  content: '',
};

const AdminBookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    { groupValue: 'GROUP_T', bookGroup: 'GROUP_T' },
    { groupValue: 'GROUP_A', bookGroup: 'GROUP_A' },
    { groupValue: 'GROUP_M', bookGroup: 'GROUP_M' },
    { groupValue: 'GROUP_N', bookGroup: 'GROUP_N' },
    { groupValue: 'GROUP_A2', bookGroup: 'GROUP_A2' },
  ];

  useEffect(() => {
    const fetchBookDetailPage = async () => {
      const response = await fetchGETBookDetailPage(id);
      setSelectedBook(response.data);
    };
    if (id) {
      fetchBookDetailPage(id);
      setIsEditing(true);
    }
  }, [id]);

  useEffect(() => {
    if (selectedBook.id === id) return;
    setSelectedBook(selectedBook);
  }, [id, selectedBook]);

  useEffect(() => {
    setNewBook(newBook);
  }, [newBook]);

  const handleAddBook = async (event) => {
    event.preventDefault();
    try {
      const bookNumber = selectedBook.bookNumber;
      const response = await fetchPOSTAddBookList(bookNumber, id);
      if (response.status === 201) {
        setSelectedBook({
          ...selectedBook,
          bookNumber: [...selectedBook.bookNumber, bookNumber],
        });
        alert('책이 추가되었습니다.');
      } else {
        alert('책 추가에 실패했습니다.');
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (event) => {
    const [selectedImage] = event.target.files;
    const image = URL.createObjectURL(selectedImage);

    if (isEditing) {
      if (selectedBook.image) {
        URL.revokeObjectURL(selectedBook.image);
      }
      setSelectedBook((book) => ({ ...book, image }));
    } else {
      setNewBook((book) => ({ ...book, image }));
    }
  };

  const handleTextareaChange = (event) => {
    if (isEditing) {
      setSelectedBook((book) => ({ ...book, content: event.target.value }));
    } else {
      setNewBook((book) => ({ ...book, content: event.target.value }));
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
            {!id && newBook.image && <img src={newBook?.image} alt="Selected" />}
            {id && selectedBook && <img src={selectedBook?.image} alt="BookDetailImage" />}
          </Style.BookDetailImage>
          {isEditing ? (
            <AdminBookDetailInfo
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
              labelData={labelData}
              groupData={groupData}
              onImageChange={handleImageChange}
            />
          ) : (
            <AdminBookDetailNew
              newBook={newBook}
              setNewBook={setNewBook}
              labelData={labelData}
              groupData={groupData}
              onImageChange={handleImageChange}
            />
          )}
        </Style.BookDetailWrapper>
        <Style.BookDetailContent>
          <h3>책 소개 :</h3>
          {!id && newBook && (
            <textarea value={newBook?.content} onChange={handleTextareaChange}></textarea>
          )}
          {id && selectedBook && (
            <textarea value={selectedBook?.content} onChange={handleTextareaChange}></textarea>
          )}
        </Style.BookDetailContent>
        <Style.BookDetailButtonWrapper>
          <button type="button" onClick={handleReset}>
            초기화
          </button>
          <div>
            <button type="submit" onClick={handleAddBook}>
              책 추가
            </button>
            <EditOrSaveButton
              id={id}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              selectedBook={selectedBook}
              newBook={newBook}
              setNewBook={setNewBook}
              INITIAL_BOOK={INITIAL_BOOK}
            />
          </div>
        </Style.BookDetailButtonWrapper>
      </Style.BookDetailContainer>
      <AdminAddBookList selectedBook={selectedBook} />
    </Style.Container>
  );
};

export default AdminBookDetail;
