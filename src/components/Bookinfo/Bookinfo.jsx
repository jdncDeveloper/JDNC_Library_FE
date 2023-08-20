import React, { useState } from "react";
import Styled from "./BookInfo.style";
import { useEffect } from "react";
import BorrowBtn from "../BorrowBtn/BorrowBtn";
import { fetchGETQrPage } from "../../api/Borrow/borrowAPI";
import { useParams } from "react-router-dom";


const BookInfo = ({ type }) => {
  const bookNumber = useParams()
  console.log(useParams())
  const [book, setBook] = useState({
    id: "number",      
    title: "string", 
    image: "string",  
    content: "string",
    author: "string",  
    publisher: "string",
  });
  useEffect(() => {
    fetchGETQrPage(bookNumber)
    .then((res) => {setBook(res)})
    .catch((err) => console.log(err))
  })

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