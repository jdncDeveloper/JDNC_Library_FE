import React, { useState, useEffect } from 'react';
import { getBookList } from '../../api/testAPI/get/getBookList';
import Style from '../../assets/commonStyles/BookListContanier.style';
import BookList from '../../components/BookList/BookList';

const ReturnBook = () => {
  const [booklist, setBooklist] = useState([]);

  useEffect(() => {
    getBookList()
      .then((res) => setBooklist(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Style.Container>
      {booklist.map((book) => {
        return (
          <Style.Booklists key={book.id}>
            <BookList book={book} isReturnPage={true} />
          </Style.Booklists>
        );
      })}
    </Style.Container>
  );
};

export default ReturnBook;
