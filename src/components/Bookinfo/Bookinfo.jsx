import React, { useState } from 'react';
import Style from './Bookinfo.style';
import { useEffect } from 'react';
import BorrowBtn from '../BorrowBtn/BorrowBtn';
import { useParams } from 'react-router-dom';
import BookLocation from '../BookLocation/BookLocation';
import BookStatus from '../BookStatus/BookStatus';
import { fetchGETQrBorrowBookInfo } from '../../api/Borrow/borrowBookAPI';
import { fetchGETBookDetailPage } from '../../api/Book/bookDetailAPI';

const BookInfo = ({ isBorrowPage, isBookListEnter }) => {
  const { bookNumber, bookId } = useParams();

  const [book, setBook] = useState();
  const [btnStatus, setBtnStatus] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [bookLocation, setBookLocation] = useState([]);

  // QR 코드를 찍고 책 대출 페이지 진입 시
  useEffect(() => {
    if (isBorrowPage) {
      const showBorrowPage = async (bookNumber) => {
        try {
          const bookInfo = await fetchGETQrBorrowBookInfo(bookNumber);
          setBook(bookInfo.data);
        } catch (error) {
          //유저 입장에서 오류처리 로직만들기!!
          console.log(error);
        }
      };
      setBtnStatus(true);
      setIsHide(true);
      showBorrowPage(bookNumber);
    }
  }, [isBorrowPage]);

  // 책 리스트를 통해 책 상세페이지 진입시
  useEffect(() => {
    if (!isBookListEnter) return;
    const showBookDetailPage = async (bookId) => {
      try {
        const bookInfo = await fetchGETBookDetailPage(bookId);
        setBook(bookInfo.data);
      } catch (error) {
        console.log(error);
      }
    };
    setBtnStatus(false);
    setIsHide(false);
    showBookDetailPage(bookId);
  }, [isBookListEnter]);

  useEffect(() => {
    //책 위치 찾기에서 bookNumber 넘겨주는 방법
    if (isBorrowPage) {
      setBookLocation([bookNumber]);
    }
    if (isBookListEnter) {
      const availableBookNumbers = book?.availableList
        .filter((item) => item.available === true)
        .map((item) => item.bookNumber);
      setBookLocation(availableBookNumbers);
    }
  }, [book]);
  if (!book) return <></>;

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
        <BookLocation available={book.available} bookNumber={bookLocation} />
      </Style.Container>
    </>
  );
};

export default BookInfo;
