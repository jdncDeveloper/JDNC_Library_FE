import React, { useState } from 'react';
import Style from './Bookinfo.style';
import { useEffect } from 'react';
import BorrowBtn from '../BorrowBtn/BorrowBtn';
import { fetchGETQrPage } from '../../api/Borrow/borrowAPI';
import { useParams } from 'react-router-dom';

const BookInfo = ({ isBorrowPage, isBookDetailPage }) => {
  const bookNumber = useParams();
  const [book, setBook] = useState({
    id: 'number',
    title: 'string',
    image: 'string',
    content: 'string',
    author: 'string',
    publisher: 'string',
  });

  const [btnStatus, setBtnStatus] = useState(true);
  const handleBtnStatus = () => {
    setBtnStatus(false);
  };
  useEffect(() => {
    if (isBorrowPage) {
      //Qr찍고 대출 페이지로 입장시 대출 도서 데이터 불러오기
      async function showBorrowPage(bookNumber) {
        try {
          const QrPageBookData = await fetchGETQrPage(bookNumber);
          setBook(QrPageBookData);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }, [isBorrowPage]);

  // useEffect(() => {
  //   if (isBookDetailPage) {
  //     //도서 목록에서 상세정보페이지를 눌렀을때 도서데이터 불러오기
  //    handleBtnStatus();
  //   }
  // })

  // const cover = title;
  //웹 접근성 위한 alt용 커버

  return (
    <>
      <Style.Container>
        <Style.InfoTitle>
          <Style.bookImg src={book.image}></Style.bookImg>
          <Style.TitleContainer>
            <h1>{book.title}</h1>
            <Style.TitleContent>
              <p>저자 : {book.author}</p>
              <p>출판사 : {book.publisher}</p>
            </Style.TitleContent>
            {/* <Style.BookStatus btnStatus={btnStatus}>{book.borrowStatus}</Style.BookStatus> */}
            <BorrowBtn bookNumber={book.id} btnStatus={btnStatus}></BorrowBtn>
          </Style.TitleContainer>
        </Style.InfoTitle>
        <Style.BookContents>
          <h2>소개</h2>
          <p>{book.content}</p>
        </Style.BookContents>
      </Style.Container>
    </>
  );
};

export default BookInfo;
