import React from "react";
import { useState } from "react";

const BookStatus = ( { bookStatus} ) => {
  const [borrowStatus, setBorrowStatus] = useState("대여가능")


  return (
    <>
      <Style.BookStatus>{bookStatus}</Style.BookStatus>
    </>
  )
}

export default BookStatus;