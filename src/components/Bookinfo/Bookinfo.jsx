import React, { useState } from 'react';
import Style from './BookInfo.style';
import { useEffect } from 'react';
import BorrowBtn from '../BorrowBtn/BorrowBtn';
import { fetchGETQrPage } from '../../api/Borrow/borrowAPI';
import { useParams } from 'react-router-dom';
import BookLocation from '../BookLocation/BookLocation';
import BookStatus from '../BookStatus/BookStatus';
import { useFetcher } from 'react-router-dom';

const BookInfo = ({ isBorrowPage, isBookListEnter }) => {
  const bookNumber = useParams();
  const [book, setBook] = useState({
    id: 'number',
    title: 'string',
    image: 'string',
    content: 'string',
    author: 'string',
    publisher: 'string',
    available: true,
  });

  const [btnStatus, setBtnStatus] = useState(false);
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    if (isBorrowPage) {
      async function showBorrowPage(bookNumber) {
        try {
          const QrPageBookData = await fetchGETQrPage(bookNumber);
          setBook(QrPageBookData.data);
          console.log(QrPageBookData.data);
        } catch (err) {
          console.log(err);
        }
      }
      setBtnStatus(true);
      setIsHide(true);
      showBorrowPage(book.bookNumber);
    }
  }, [isBorrowPage]);

  useEffect(() => {
    if (isBookListEnter) {
      setBtnStatus(false);
      setIsHide(false);
      // async function BookDetailPageData = await
    }
  }, [isBookListEnter]);

  // if (isBorrowPage) {
  //   //Qr찍고 대출 페이지로 입장시 대출 도서 데이터 불러오기
  //   async function showBorrowPage(bookNumber) {
  //     try {
  //       const QrPageBookData = await fetchGETQrPage(bookNumber);
  //       setBook(QrPageBookData.data);
  //       console.log(QrPageBookData.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   showBorrowPage(bookNumber.bookNumber);
  // }
  // else {
  //   async function showDetailPage(bookNumber) {
  //     try {
  //       const BookDetailData = await
  //     }
  //   }
  // }, []);

  return (
    <>
      <Style.Container>
        <Style.InfoTitle>
          <Style.bookImg src={book.image} alt={book.title}></Style.bookImg>
          <Style.TitleContainer>
            <h1>{book.title}</h1>
            <Style.TitleContent>
              <p>저자 : {book.author}</p>
              <p>출판사 : {book.publisher}</p>
            </Style.TitleContent>
            <BookStatus isHide={isHide} bookStatus={book.available}></BookStatus>
            <BorrowBtn bookNumber={book.bookNumber} btnStatus={btnStatus}></BorrowBtn>
          </Style.TitleContainer>
        </Style.InfoTitle>
        <Style.BookContents>
          <h2>소개</h2>
          <p>{book.content}</p>
        </Style.BookContents>
        <BookLocation bookNumber={bookNumber} />
      </Style.Container>
    </>
  );
};

export default BookInfo;
