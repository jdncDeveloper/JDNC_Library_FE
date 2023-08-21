import React, { useState } from "react";
import Styled from "./BookInfo.style";
import { useEffect } from "react";
import BorrowBtn from "../BorrowBtn/BorrowBtn";
import { fetchGETQrPage } from "../../api/Borrow/borrowAPI";
import { useParams } from "react-router-dom";


const BookInfo = ({ isBorrowPage, isBookDetailPage }) => {
  const bookNumber = useParams()
  const [book, setBook] = useState({
    id: "number",
    title: "string",
    image: "string",
    content: "string",
    author: "string",
    publisher: "string",
  });
  useEffect(() => {
    if (isBorrowPage) {
      //Qr찍고 대출 페이지로 입장시 대출 도서 데이터 불러오기
      async function showBorrowPage(bookNumber) {
        try {
          const QrPageBookData = await fetchGETQrPage(bookNumber)
          setBook(QrPageBookData)
        } catch (err) {
          console.log(err)
        }
      }
    }
  }, [isBorrowPage])

  // useEffect(() => {
  //   if (isBookDetailPage) {
  //     //도서 목록에서 상세정보페이지를 눌렀을때 도서데이터 불러오기
  //   }
  // })

  // const cover = title;
  //웹 접근성 위한 alt용 커버

  return (
    <>
      <Styled.Container>
        <Styled.InfoTitle>
          <Styled.bookImg src={book.image}></Styled.bookImg>
          <div>
            <Styled.TitleContainer>
              <h1>{book.title}</h1>
            </Styled.TitleContainer>
            <p>저자 : {book.author}</p>
            <p>출판사 : {book.publisher}</p>
            {/* <Styled.BookStatus display={type} bookStatus={borrowStatus}>{borrowStatus}</Styled.BookStatus> */}
            <BorrowBtn bookNumber={book.id}></BorrowBtn>
          </div>
        </Styled.InfoTitle>
        <Styled.BookContents>
          <h2>소개</h2>
          <p>{book.content}</p>
        </Styled.BookContents>
      </Styled.Container>
    </>
  )
}

export default BookInfo;
