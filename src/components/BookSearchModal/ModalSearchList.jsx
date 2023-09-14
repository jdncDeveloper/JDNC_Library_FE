import React, { forwardRef } from 'react';
import Style from './ModalSearchList.style';
import { useLocation } from 'react-router-dom';

const ModalSearchList = forwardRef(({ book, setNewBook, selectedBook, setSelectedBook }, ref) => {
  const location = useLocation();

  const handleSelect = () => {
    const mappedData = {
      title: book.title,
      author: book.author,
      publisher: book.publisher,
      image: book.image,
      content: book.description,
      bookGroup: location.pathname === '/new' ? '' : selectedBook.bookGroup,
    };

    if (location.pathname === '/new') {
      setNewBook(mappedData);
    } else {
      setSelectedBook(mappedData);
    }
  };

  return (
    <Style.Container ref={ref}>
      <img src={book.image} alt="bookImage" />
      <Style.BookInfo>
        <h3>{book.title}</h3>
        <p>저자: {book.author}</p>
        <p>출판사: {book.publisher}</p>
      </Style.BookInfo>
      <Style.BookButtonWrapper>
        <button type="button" onClick={handleSelect}>
          선택
        </button>
      </Style.BookButtonWrapper>
    </Style.Container>
  );
});

export default ModalSearchList;
