import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Style from './BookStatus.style';

const BookStatus = ({ bookStatus, isHide }) => {
  const [bookStatusText, setBookStatusText] = useState('');
  useEffect(() => {
    function handleText() {
      if (bookStatus) {
        return setBookStatusText('대여가능');
      }
      setBookStatusText('대여불가');
    }
  }, [bookStatus]);
  return (
    <>
      <Style.BookStatus $isHide={isHide} $bookStatus={bookStatus}>
        {bookStatusText}
      </Style.BookStatus>
    </>
  );
};

export default BookStatus;
