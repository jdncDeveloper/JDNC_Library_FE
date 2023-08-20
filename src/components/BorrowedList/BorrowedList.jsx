import React, { useState, useEffect } from 'react';
import { getBookList } from '../../api/testAPI/get/getBookList';
import Style from '../../assets/commonStyles/BookListContanier.style';
import BookList from '../BookList/BookList';

const BorrowedList = (borrowBook) => {
  const [booklist, setBooklist] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const books = await getBookList();
      setBooklist(books);
    }
    fetchBooks();
  }, [borrowBook]);

  return (
    <Style.Container>
      {booklist.map((book) => {
        return (
          <Style.Booklists key={book.id}>
            <BookList book={book} />
          </Style.Booklists>
        );
      })}
    </Style.Container>
  );
};

export default BorrowedList;
