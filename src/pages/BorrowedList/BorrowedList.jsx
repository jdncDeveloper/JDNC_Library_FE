import React, { useState, useEffect } from 'react';
import { getBookList } from '../../api/testAPI/get/getBookList';
import Style from '../../assets/commonStyles/BookListContanier.style';
import BookList from '../../components/BookList/BookList';
import BackBtnWithTitle from '../../components/ui/BackBtnWithTitle/BackBtnWithTitle';

const BorrowedList = () => {
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
            <BookList book={book} />
          </Style.Booklists>
        );
      })}
    </Style.Container>
  );
};

export default BorrowedList;
