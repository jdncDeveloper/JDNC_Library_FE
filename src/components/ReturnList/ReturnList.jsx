import React, { useState, useEffect } from 'react';
// import { getBookList } from '../../api/testAPI/get/getBookList';
import { fetchGETReturnList } from '../../api/Borrow/borrowAPI';
import { fetchGETReturnBook } from '../../api/Borrow/borrowAPI';
import Style from '../../assets/commonStyles/BookListContanier.style';
import BookList from '../BookList/BookList';

const ReturnList = () => {
  const [returnBookList, setReturnBookList] = useState([]);

  // API 연결 후 사용할 예정입니다.
  useEffect(() => {
    async function fetchReturnList() {
      try {
        const returnList = await fetchGETReturnList();
        setReturnBookList(returnList.data);
      } catch (error) {
        console.log(error);
      }
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
  //     setReturnBookList(books);
  //   }
  //   fetchBooks();
  // }, []);

  // const handleBookReturn = (returnedBookId) => {
  //   const updatedBookList = returnBookList.filter((book) => book.borrowId !== returnedBookId);
  //   setReturnBookList(updatedBookList);
  // };

  return (
    <Style.Container>
      {returnBookList.length === 0 ? (
        <Style.Booklists $align>
          <img
            src="https://img.freepik.com/free-vector/man-doubting-design_1133-263.jpg?w=900&t=st=1692711479~exp=1692712079~hmac=d2a39e1cf40b91c0367062b38c8eb1f5d10d952bbdaafd3a396e53bff2b734cb"
            alt=""
          />
          대여중인 도서가 없습니다.
        </Style.Booklists>
      ) : (
        returnBookList.map((book) => (
          <Style.Booklists key={book.bookNumber}>
            <BookList book={book} isReturnPage onBookReturn={handleBookReturn} />
          </Style.Booklists>
        ))
      )}
    </Style.Container>
  );
};

export default ReturnList;
