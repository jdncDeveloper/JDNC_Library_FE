import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchGETBorrowBook } from "../../api/Borrow/borrowAPI";
import Style from "./BorrowBtn.style"



const BorrowBtn = ({bookNumber}) => {
  const navigate = useNavigate()
  const borrowBook = (bookNumber) => {
    fetchGETBorrowBook(bookNumber)
    .then((res) => {
      if (res.status == "200") {
        navigate('/borrowedlist')
      } else {
        alert("대여 실패!")
      }
    })
    .catch((err) => console.log(err))
  }

  return (
    <>
      <Style.BorrowBtn onClick={borrowBook}>대여하기</Style.BorrowBtn>
    </>
  )
}








export default BorrowBtn;