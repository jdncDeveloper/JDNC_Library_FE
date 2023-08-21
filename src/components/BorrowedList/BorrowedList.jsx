import React, { useState, useEffect } from 'react';
// import { borrowAPI } from '../../api/Borrow/borrowAPI';
import { getBookList } from '../../api/testAPI/get/getBookList';
import Style from '../../assets/commonStyles/BookListContanier.style';
import BookList from '../../components/BookList/BookList';

const BorrowedList = (borrowBook) => {
  const [bookList, setBookList] = useState([]);

  // API 연결 후 사용할 예정입니다.
  // const [borrowedBookList, setBorrowedBookList] = useState([]);

  // useEffect(() => {
  //   async function fetchBorrowedList() {
  //     const borrowedList = await borrowAPI();
  //     setBorrowedBookList(borrowedList);
  //   }
  //   fetchBorrowedList();
  // }, [borrowBook]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBookList();
      setBookList(books);
    };
    fetchBooks();
  }, [borrowBook]);

  return (
    <>
      <Style.Container>
        {bookList.map((book) => {
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
