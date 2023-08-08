import React, { useState } from "react";
import Styled from "./Bookinfo.style";
import { getBookDetail } from "../../api/testAPI/get/getBookDetail";


const Bookinfo = () => {
  const [book, setBook] = useState({ title: "책이름", imgUrl: "#", author: "홍길동", bookStatus: "대여가능", publisher: "제주더큰내일센터", year: "2020", contents: "평범하지만 화목한 가정에서 태어나...", borrow: true })
  const borrow = true;
  // if (url)
  const cover = book.title;
  const borrowBook = () => {
    alert("책빌리기");
  }
  getBookDetail()
    .then((res) => {
      setBook(res);
    })
  return (
    <>
      <Styled.Container>
        <Styled.InfoTitle>
          <Styled.bookImg src={book.imgUrl} alt={cover}></Styled.bookImg>
          <div>
            <Styled.TitleContainer>
              <h1>{book.title}</h1>
              <Styled.BookStatus bookStatus={book.bookStatus}>{book.bookStatus}</Styled.BookStatus>
            </Styled.TitleContainer>
            <p>저자 : {book.author}</p>
            <p>출판사 : {book.publisher}</p>
            <p>출판년도 : {book.year}</p>
            <Styled.BorrowBtn display={book.borrow} onClick={borrowBook}>대여하기</Styled.BorrowBtn>
          </div>
        </Styled.InfoTitle>
        <Styled.BookContents>
          <h2>소개</h2>
          <p>{book.contents}</p>
        </Styled.BookContents>
      </Styled.Container>
    </>
  )
}

export default Bookinfo;