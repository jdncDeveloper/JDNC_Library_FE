import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './BookList.style';

const BookList = ({ book, isReturnPage, isMainPage, onBookReturn }) => {
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  const [isHide, setHide] = useState(false);
  const [isAvailable, setAvailable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isReturnPage) {
      setButtonEnabled(true);
    }
  }, [isReturnPage]);

  useEffect(() => {
    if (isMainPage) {
      setHide(true);
      setAvailable(false);
    }
  }, [isMainPage]);

  const handleBookClick = () => {
    if (window.location.pathname !== '/borrowedlist' && !isButtonEnabled) {
      navigate(`/borrowBook/qr/${book.bookNumber}`);
    }
  };

  const handleReturnButtonClick = () => {
    if (window.confirm('반납하시겠습니까?')) {
      if (onBookReturn === 204) {
        onBookReturn(book.bookNumber);
        alert('반납이 완료되었습니다.');
      } else {
        alert('반납에 실패하였습니다.');
      }
    } else {
      alert('반납이 취소되었습니다.');
    }
  };

  return (
    <Style.Container onClick={handleBookClick}>
      <Style.ImageBox>
        <Style.Image src={book.image} />
      </Style.ImageBox>
      <Style.BookInfoBox>
        <Style.Title>{book.title}</Style.Title>
        <Style.Author>{book.author}</Style.Author>
        <Style.Publisher>{book.publisher}</Style.Publisher>
        <Style.BorrowedDate hidden={isHide}>대여일 : {book.borrowedData}</Style.BorrowedDate>
        <Style.ReturnButton
          onClick={handleReturnButtonClick}
          disabled={!isButtonEnabled}
          hidden={isHide}
        >
          반납
        </Style.ReturnButton>
        <Style.Available hidden={isAvailable}>대여가능</Style.Available>
      </Style.BookInfoBox>
    </Style.Container>
  );
};

export default BookList;
