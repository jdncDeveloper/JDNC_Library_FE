import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Style from './AdminBookDetail.style';
import { navigateUrl } from '../../constant/navigateUrl';
import AdminAddBookList from '../AdminAddBookList/AdminAddBookList';
import AdminBookDetailInfo from '../AdminBookDetailInfo/AdminBookDetailInfo';
import AdminBookDetailNew from '../AdminBookDetailNew/AdminBookDetailNew';
import { fetchGETBookDetailPage } from '../../api/Book/bookDetailAPI';
import {
  fetchPOSTAddBookList,
  fetchPOSTCreateBook,
  fetchPUTUpdateBook,
} from '../../api/AdminBook/AdminBookDetailAPI';

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
      const bookNumber = newBook.bookNumbers;
      const response = await fetchPOSTAddBookList(bookNumber);
      if (response.status === 201) {
        setSelectedBook({
          ...selectedBook,
          bookNumbers: [...selectedBook.bookNumbers, bookNumber],
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

  const handleEditOrSave = async (event) => {
    event.preventDefault();
    if (isEditing) {
      // 수정 updateBook.api
      try {
        const response = await fetchPUTUpdateBook(id, selectedBook);
        if (response.status === 204) {
          alert('책 정보가 수정 되었습니다.');
          setIsEditing(false);
        } else {
          alert('책 정보 수정에 실패했습니다.');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // 저장 createBook.api
      try {
        const response = await fetchPOSTCreateBook(newBook);
        if (response.status === 201) {
          alert('책 정보가 등록 되었습니다.');
          setNewBook(INITIAL_BOOK);
          navigate(navigateUrl.adminAddBookNew);
        } else {
          alert('책 정보 등록에 실패했습니다.');
        }
      } catch (error) {
        console.log(error);
      }
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
    setSelectedBook((selectedBook) => ({ ...selectedBook, content: event.target.value }));
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
          {selectedBook && (
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
