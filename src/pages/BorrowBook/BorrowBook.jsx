import React, { useState } from "react";
import BookInfo from "../../components/Bookinfo/BookInfo";
import { getBookDetail } from "../../api/testAPI/get/getBookDetail";
import { useEffect } from "react";

const BorrowBook = () => {
  const [book, setBook] = useState({})


  useEffect(() => {
    getBookDetail()
    .then((res) => setBook(res))
    .catch((err) => console.log(err))
  })


  return (
    <>
      <BookInfo book={book} type={true} />
    </>
  )
}

export default BorrowBook;