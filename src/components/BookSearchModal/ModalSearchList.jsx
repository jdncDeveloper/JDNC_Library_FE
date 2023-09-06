import React from 'react';
import Style from './ModalSearchList.style';

const ModalSearchList = ({ book, setNewBook }) => {
  const handleSelect = () => {
    const mappedData = {
      title: book.title,
      author: book.author,
      publisher: book.publisher,
      image: book.image,
      content: book.description,
    };

    setNewBook(mappedData);
  };

  return (
    <Style.Container>
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
};

export default ModalSearchList;
