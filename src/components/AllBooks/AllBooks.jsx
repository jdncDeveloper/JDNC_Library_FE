import React, { useState, useEffect } from 'react';
import BookList from '../BookList/BookList';
import { getBookList } from '../../api/testAPI/get/getBookList';
import Style from '../../assets/commonStyles/BookListContanier.style';

const AllBooks = () => {
  const [allBookList, setAllBookList] = useState([]);

  useEffect(() => {
    getBookList()
      .then((res) => setAllBookList(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Style.Container>
      {allBookList.map((book) => {
        return (
          <Style.Booklists key={book.id}>
            <BookList book={book} isMainPage />
          </Style.Booklists>
        );
      })}
    </Style.Container>
  );
};

export default AllBooks;
