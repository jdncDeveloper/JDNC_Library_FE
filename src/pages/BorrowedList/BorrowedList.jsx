import React, { useState, useEffect } from 'react';
import { getBookList } from '../../api/testAPI/get/getBookList';
import Style from './BorrowedList.style';
import BookList from '../../components/BookList/BookList';

const BorrowedList = () => {
  const [booklist, setBooklist] = useState([]);

  useEffect(() => {
    getBookList()
      .then((res) => setBooklist(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Style.HeadInfo>
        <Style.Icon icon="fas fa-arrow-left" />
        <Style.Title>대여 현황</Style.Title>
      </Style.HeadInfo>
      <Style.Container>
        {booklist.map((book) => {
          return (
            <Style.Booklists key={book.id}>
              <BookList book={book} />
            </Style.Booklists>
          );
        })}
      </Style.Container>
    </>
  );
};

export default BorrowedList;
