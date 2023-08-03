import React, { useState, useEffect } from 'react';
import Style from './BookList.style';

const BookList = () => {
  const [isButtonEnabled, setButtonEnabled] = useState(false);

  // const checkQRcodeAndEnableButton = () => {
  //   if (qrCodeData === '이곳에 만족할 QR코드 데어터 추가') {
  //     setButtonEnabled(true);
  //   }
  // };

  // useEffect(() => {
  // 여기서  API 호출을 통해 QR코드 데이터를 받아온다.
  //   checkQRcodeAndEnableButton(qwCodeData);
  // }, [qrCodeData]);  // qrCodeData가 변경될 때마다 useEffect가 실행된다.

  const handleReturnButtonClick = () => {
    // 반납 처리 하고 리스트를 삭제할 수 있도록 로직 작성
  };

  return (
    <Style.Container>
      <Style.ImageBox></Style.ImageBox>
      <Style.BookInfoBox>
        <Style.Title>Book Title</Style.Title>
        <Style.Author>저자 : 몰?루</Style.Author>
        <Style.BorrowedDate>대여일 : 2023.08.03</Style.BorrowedDate>
        <Style.ReturnButton onClick={handleReturnButtonClick} disabled={!isButtonEnabled}>
          반납
        </Style.ReturnButton>
      </Style.BookInfoBox>
    </Style.Container>
  );
};

export default BookList;
