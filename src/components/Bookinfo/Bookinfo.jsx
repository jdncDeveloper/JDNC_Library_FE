import React, { useState } from 'react';
import Style from './Bookinfo.style';
import { useEffect } from 'react';
import BorrowBtn from '../BorrowBtn/BorrowBtn';
import { fetchGETQrPage } from '../../api/Borrow/borrowAPI';
import { useParams } from 'react-router-dom';

const BookInfo = ({ isBorrowPage }) => {
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
          setBook(QrPageBookData.data);
          console.log(QrPageBookData.data);
        } catch (err) {
          console.log(err);
        }
      }
      showBorrowPage(bookNumber.bookNumber);
    }
    // else {
    //   async function showDetailPage(bookNumber) {
    //     try {
    //       const BookDetailData = await
    //     }
    //   }
  }, []);

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
            {/* <Style.BookStatus btnStatus={btnStatus}>{book.borrowStatus}</Style.BookStatus> */}
            <BorrowBtn bookNumber={book.bookNumber} btnStatus={btnStatus}></BorrowBtn>
          </Style.TitleContainer>
        </Style.InfoTitle>
        <Style.BookContents>
          <h2>소개</h2>
          <p>{book.content}</p>
        </Style.BookContents>
        <div>
          <div>
            <h1>위치</h1>
            <ul>
              <li>대여 권수</li>
              <li>
                대여 방법
                <ul>
                  <li>도서 대여는 실물 도서 뒷면에 있는 QR코드로 하면 완료.</li>
                  <li>
                    메인 페이지에서는 도서 목록을 열람하거나 대여 현황을 확인하는 페이지로 즉시
                    대여는 불가합니다.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h1>M</h1>
          </div>
        </div>
      </Style.Container>
    </>
  );
};

export default BookInfo;
