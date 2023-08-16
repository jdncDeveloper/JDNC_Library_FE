import React, { useState, useEffect } from 'react';
import BookList from '../../components/BookList/BookList';
import { fetchGETQrPage } from '../../api/Borrow/borrowAPI';
import Style from '../../assets/commonStyles/BookListContanier.style';

const BookListPage = () => {
  const [allBookList, setAllBookList] = useState([]);

  useEffect(() => {
    async function getAllBookList() {
      try {
        const response = await fetchGETQrPage();
        setAllBookList(response);
      } catch (error) {
        console.log(error);
      }
    }
    getAllBookList();
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

export default BookListPage;
