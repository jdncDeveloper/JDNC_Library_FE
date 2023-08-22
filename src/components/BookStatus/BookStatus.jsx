import React from 'react';
import { useState } from 'react';

const BookStatus = ({ bookStatus, btnStatus }) => {
  const [borrowStatus, setBorrowStatus] = useState('대여가능');

  return (
    <>
      <Style.BookStatus $btnStatus={btnStatus}>{bookStatus}</Style.BookStatus>
    </>
  );
};

export default BookStatus;
