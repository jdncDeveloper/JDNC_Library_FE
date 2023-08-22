import React, { useState, useEffect } from 'react';
// import { getBookList } from '../../api/testAPI/get/getBookList';
import { fetchGETReturnList } from '../../api/Borrow/borrowAPI';
import { fetchGETReturnBook } from '../../api/Borrow/borrowAPI';
import Style from '../../assets/commonStyles/BookListContanier.style';
import BookList from '../BookList/BookList';

const ReturnList = () => {
  // const [booklist, setBooklist] = useState([]);

  // API 연결 후 사용할 예정입니다.
  const [returnBookList, setReturnBookList] = useState([]);

  useEffect(() => {
    async function fetchReturnList() {
      const returnList = await fetchGETReturnList();
      setReturnBookList(returnList);
    }
    fetchReturnList();
  }, []);

  const handleBookReturn = async (bookNumber) => {
    const updatedBookList = await fetchGETReturnBook(bookNumber);
    setReturnBookList(updatedBookList);
  };

  //mockdata로 테스트중입니다.
  // useEffect(() => {
  //   async function fetchBooks() {
  //     const books = await getBookList();
  //     setBooklist(books);
  //   }
  //   fetchBooks();
  // }, []);

  // const handleBookReturn = (returnedBookId) => {
  //   const updatedBookList = booklist.filter((book) => book.id !== returnedBookId);
  //   setBooklist(updatedBookList);
  // };

  return (
    <Style.Container>
      {returnBookList.map((book) => {
        return (
          <Style.Booklists key={book.borrowId}>
            <BookList book={book} isReturnPage onBookReturn={handleBookReturn} />
          </Style.Booklists>
        );
      })}
    </Style.Container>
  );
};

export default ReturnList;
