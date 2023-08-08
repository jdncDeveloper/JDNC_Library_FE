import React, { useState, useEffect } from 'react';
import Style from './BookList.style';

const BookList = ({ book }) => {
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  // const [book, setBook] = useState({});

  // const checkQRcodeAndEnableButton = () => {
  //   if (qrCodeData === '이곳에 만족할 QR코드 데어터 추가') {
  //     setButtonEnabled(true);
  //   }
  // };

  // useEffect(() => {
  // 여기서  API 호출을 통해 QR코드 데이터를 받아온다.
  //   checkQRcodeAndEnableButton(qwCodeData);
  // }, [qrCodeData]);  // qrCodeData가 변경될 때마다 useEffect가 실행된다.

  // getBookList().then((res) => setBook(...res));

  const handleReturnButtonClick = () => {
    // 반납 처리 하고 리스트를 삭제할 수 있도록 로직 작성
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
