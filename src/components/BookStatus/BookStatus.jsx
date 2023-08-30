import React from 'react';
import { useState } from 'react';
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
      <Style.BookStatus $btnStatus={btnStatus}>{bookStatus}</Style.BookStatus>
    </>
  );
};

export default BookStatus;
