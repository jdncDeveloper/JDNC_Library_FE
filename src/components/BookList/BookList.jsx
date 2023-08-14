import React, { useState, useEffect } from 'react';
import Style from './BookList.style';

const BookList = ({ book, isReturnPage, isMainPage }) => {
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  const [isHide, setHide] = useState(false);
  const [isAvailable, setAvailable] = useState(true);
  const [isNotAvailable, setNotAvailable] = useState(false);

  useEffect(() => {
    if (isReturnPage) {
      // 반납 페이지로 입장시 버튼 활성화
      setButtonEnabled(true);
    }
  }, [isReturnPage]);

  useEffect(() => {
    if (isMainPage) {
      // 반납버튼 숨김
      setHide(true);
      setAvailable(false);
    }
  }, [isMainPage]);

  const handleReturnButtonClick = () => {
    // 반납 처리 하고 리스트를 삭제할 수 있도록 로직 작성
    if (!isButtonEnabled) {
      alert('반납은 반납함 앞에있는 QR코드로 해주세요');
      return;
    }

    if (window.confirm('반납하시겠습니까?')) {
      alert('반납이 완료되었습니다.');
    }
  };

  return (
    <Style.Container>
      <Style.ImageBox>
        <Style.Image src={book.imageUrl} />
      </Style.ImageBox>
      <Style.BookInfoBox>
        <Style.Title>{book.title}</Style.Title>
        <Style.Author>{book.author}</Style.Author>
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
