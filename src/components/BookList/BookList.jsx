import React, { useState, useEffect } from 'react';
import Style from './BookList.style';

const BookList = ({ book, isReturnPage }) => {
  const [isButtonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    if (isReturnPage) {
      // 반납 페이지로 입장시 버튼 활성화
      setButtonEnabled(true);
    }
  }, [isReturnPage]);

  const handleReturnButtonClick = () => {
    // 반납 처리 하고 리스트를 삭제할 수 있도록 로직 작성
    if (!isButtonEnabled) {
      alert('반납은 반납함 앞에있는 QR코드로 해주세요');
      return;
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
        <Style.BorrowedDate>{book.borrowedData}</Style.BorrowedDate>
        <Style.ReturnButton onClick={handleReturnButtonClick} disabled={!isButtonEnabled}>
          반납
        </Style.ReturnButton>
      </Style.BookInfoBox>
    </Style.Container>
  );
};

export default BookList;
