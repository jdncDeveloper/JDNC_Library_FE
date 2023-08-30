import React, { useState } from 'react';
import BookInfo from '../../components/Bookinfo/Bookinfo';

function BorrowBook() {
  return (
    <>
      <BookInfo isBorrowPage={true} />
    </>
  );
}

export default BorrowBook;
