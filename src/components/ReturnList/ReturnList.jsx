import React, { useState, useEffect } from 'react';
import { getBookList } from '../../api/testAPI/get/getBookList';
// import { borrowAPI } from '../../api/testAPI/post/borrowAPI';
import Style from '../../assets/commonStyles/BookListContanier.style';
import BookList from '../BookList/BookList';

const ReturnList = () => {
  const [booklist, setBooklist] = useState([]);

  // API 연결 후 사용할 예정입니다.
  // const [returnBookList, setReturnBookList] = useState([]);

  // useEffect(() => {
  //   async function fetchReturnList() {
  //     const returnList = await borrowAPI();
  //     setReturnBookList(returnList);
  //   }
  //   fetchReturnList();
  // }, []);

  // const handleBookReturn = async(bookNumber) => {
  //   try {
  //     const response = await borrowAPI(bookNumber);
  //     setBooklist(updatedBookList);
  //   }
  // };

  //mockdata로 테스트중입니다.
  useEffect(() => {
    async function fetchBooks() {
      const books = await getBookList();
      setBooklist(books);
    }
    fetchBooks();
  }, []);

  const handleBookReturn = (returnedBookId) => {
    const updatedBookList = booklist.filter((book) => book.id !== returnedBookId);
    setBooklist(updatedBookList);
  };

  return (
    <Style.Container>
      {booklist.map((book) => {
        return (
          <Style.Booklists key={book.id}>
            <BookList book={book} isReturnPage onBookReturn={handleBookReturn} />
          </Style.Booklists>
        );
      })}
    </Style.Container>
  );
};

export default ReturnList;
