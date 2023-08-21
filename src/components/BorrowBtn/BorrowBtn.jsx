import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchGETBorrowBook } from "../../api/Borrow/borrowAPI";
import { navigateUrl } from "../../constant/navigateUrl";
import Style from "./BorrowBtn.style"



const BorrowBtn = ({ bookNumber }) => {
  const navigate = useNavigate()
  async function borrowBook(bookNumber) {
    try {
      const borrowBookData = await fetchGETBorrowBook(bookNumber)
      if (borrowBookData.status == "200") {
        alert("대여 완료!")
        navigate(navigateUrl.borrowedList)
      } else {
        alert("대여 실패!")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Style.BorrowBtn onClick={borrowBook}>대여하기</Style.BorrowBtn>
    </>
  )
}








export default BorrowBtn;