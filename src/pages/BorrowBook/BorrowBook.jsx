import React, { useState } from 'react';
import BookInfo from '../../components/Bookinfo/Bookinfo';

const BorrowBook = () => {
  return (
    <>
      <BookInfo isBorrowPage={true} />
    </>
  );
};

export default BorrowBook;
