import React, { useState } from "react";
import Styled from "./BookInfo.style";


const BookInfo = ({ book, type }) => {
  const [borrowStatus, setBorrowStatus] = useState("대여가능")
  if (book.borrowStatus == false) {
    setBorrowStatus("대여불가")
  }


  const cover = book.title;
  //웹 접근성 위한 alt용 커버

  const borrowBook = () => {
    //책 빌리는 로직 작성
    alert("책빌리기");
  }


  return (
    <>
      <Styled.Container>
        <Styled.InfoTitle>
          <Styled.bookImg src={book.imgUrl} alt={cover}></Styled.bookImg>
          <div>
            <Styled.TitleContainer>
              <h1>{book.title}</h1>
            </Styled.TitleContainer>
            <p>저자 : {book.author}</p>
            <p>출판사 : {book.publisher}</p>
            <p>출판년도 : {book.publishYear}</p>
            <Styled.BookStatus display={type} bookStatus={borrowStatus}>{borrowStatus}</Styled.BookStatus>
            <Styled.BorrowBtn display={type} onClick={borrowBook}>대여하기</Styled.BorrowBtn>
          </div>
        </Styled.InfoTitle>
        <Styled.BookContents>
          <h2>소개</h2>
          <p>{book.bookInfo}</p>
        </Styled.BookContents>
      </Styled.Container>
    </>
  )
}

export default BookInfo;
