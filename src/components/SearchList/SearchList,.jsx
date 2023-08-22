import React, { useState, useEffect } from 'react';
import BookList from '../BookList/BookList';
import { getBookList } from '../../api/testAPI/get/getBookList';
import Style from '../../assets/commonStyles/BookListContanier.style';

const SearchList = () => {
  const [searchBook, setSearchBook] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBookList();
      setSearchBook(books);
    };
    fetchBooks();
  }, []);

  return (
    <Style.Container>
      {searchBook.map((book) => {
        return (
          <Style.Booklists key={book.id}>
            <BookList book={book} isMainPage />
          </Style.Booklists>
        );
      })}
    </Style.Container>
  );
};

export default SearchList;
