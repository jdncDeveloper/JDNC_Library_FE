import React, { useState, useEffect } from 'react';
import { fetchGETReturnList } from '../../api/Borrow/borrowAPI';
// import { getBookList } from '../../api/testAPI/get/getBookList';
import Style from '../../assets/commonStyles/BookListContanier.style';
import BookList from '../../components/BookList/BookList';

const BorrowedList = () => {
  const [borrowedBookList, setBorrowedBookList] = useState([]);

  // API 연결 후 사용할 예정입니다.
  useEffect(() => {
    const fetchBorrowedList = async () => {
      const borrowedList = await fetchGETReturnList();
      setBorrowedBookList(borrowedList.data);
      console.log(borrowedList.data);
    };
    fetchBorrowedList();
  }, []);

  //mockdata로 테스트중입니다.
  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     const books = await getBookList();
  //     setBorrowedBookList(books);
  //   };
  //   fetchBooks();
  // }, [borrowBook]);

  return (
    <>
      <Style.Container>
        {borrowedBookList.length === 0 ? (
          <Style.Booklists $align>
            <img
              src="https://img.freepik.com/free-vector/man-doubting-design_1133-263.jpg?w=900&t=st=1692711479~exp=1692712079~hmac=d2a39e1cf40b91c0367062b38c8eb1f5d10d952bbdaafd3a396e53bff2b734cb"
              alt=""
            />
            대여중인 도서가 없습니다.
          </Style.Booklists>
        ) : (
          borrowedBookList.map((book) => {
            return (
              <Style.Booklists key={book.bookNumber}>
                <BookList book={book} />
              </Style.Booklists>
            );
          })
        )}
      </Style.Container>
    </>
  );
};

export default BorrowedList;
