import React, { useState, useMemo } from 'react';
import Style from './AdminBookDetail.style';
import AdminAddBookList from '../AdminAddBookList/AdminAddBookList';

const AdminBookDetail = () => {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [newBooks, setNewBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    publisher: '',
    bookNumber: '',
    imageUrl: '',
    content: '',
  });
  const [disappear, setDisappear] = useState(false);

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const image = URL.createObjectURL(selectedImage);
    setImageUrl(image);
  };

  const handleReset = () => {
    setText('');
    setImageUrl('');
  };

  const handleAddBook = () => {
    const newId = newBooks.length + 1;
    const newBookObject = {
      id: newId,
      ...newBook,
      status: '대여가능',
    };
    setNewBooks([...newBooks, newBookObject]);
    setNewBook({
      title: '',
      author: '',
      publisher: '',
      bookNumber: '',
      imageUrl: '',
      content: '',
    });
  };

  const labelData = [
    { value: 'title', label: '도서명', placeholder: '도서명을 입력하세요.' },
    { value: 'author', label: '저자', placeholder: '저자를 입력하세요.' },
    { value: 'publisher', label: '출판사', placeholder: '출판사를 입력하세요.' },
    { value: 'bookNumber', label: '책번호', placeholder: '책번호(그룹포함)를 기입하세요' },
  ];

  console.log('추가');

  return (
    <Style.Container>
      <Style.BookDetailContainer>
        <Style.BookDetailWrapper>
          <Style.BookDetailImage>
            <img src={imageUrl} alt="" />
          </Style.BookDetailImage>
          <Style.BookDetailInfo>
            {labelData.map((data) => {
              const { value, label, placeholder } = data;
              return (
                <label key={value}>
                  {label} :{''}
                  <input
                    type="text"
                    value={newBook[value]}
                    placeholder={placeholder}
                    onChange={(e) => setNewBook({ ...newBook, [value]: e.target.value })}
                  />
                </label>
              );
            })}
            <span>책 이미지 :</span>
            <input type="file" onChange={handleImageChange} accept="image/*" />
          </Style.BookDetailInfo>
        </Style.BookDetailWrapper>
        <Style.BookDetailContent>
          <h3>책 소개 :</h3>
          <textarea value={text} onChange={handleTextareaChange}></textarea>
        </Style.BookDetailContent>
        <Style.BookDetailButtonWrapper>
          <button onClick={handleReset}>초기화</button>
          <div>
            <button onClick={handleAddBook}>책 추가</button>
            <button>수정</button>
          </div>
        </Style.BookDetailButtonWrapper>
      </Style.BookDetailContainer>
      <AdminAddBookList newBooks={newBooks} disappear={disappear} setDisappear={setDisappear} />
    </Style.Container>
  );
};

export default AdminBookDetail;
