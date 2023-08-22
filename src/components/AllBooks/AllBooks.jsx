import React, { useState, useEffect } from 'react';
import BookList from '../BookList/BookList';
import { getBookList } from '../../api/testAPI/get/getBookList';
import Style from '../../assets/commonStyles/BookListContanier.style';

const AllBooks = () => {
  const [allBookList, setAllBookList] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBookList();
      setAllBookList(books);
    };
    fetchBooks();
  }, []);

  return (
    <Style.Container>
      {allBookList.map((book) => {
        return (
          <Style.Booklists key={book.borrowId}>
            <BookList book={book} isMainPage />
          </Style.Booklists>
        );
      })}
    </Style.Container>
  );
};

export default AllBooks;
