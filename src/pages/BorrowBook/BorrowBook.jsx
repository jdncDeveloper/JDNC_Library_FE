import React, { useState } from 'react';
import BookInfo from '../../components/BookInfo/BookInfo';

function BorrowBook() {
  return (
    <>
      <BookInfo isBorrowPage={true} />
    </>
  );
}

export default BorrowBook;
