import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGETReturnList } from '../../api/Borrow/borrowAPI';
import { fetchPUTReturnBook } from '../../api/Borrow/borrowAPI';
import Style from '../../assets/commonStyles/BookListContainer.style';
import BookList from '../BookList/BookList';

const ReturnList = () => {
  const [returnBookList, setReturnBookList] = useState([]);
  const { floor } = useParams();

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
  }, [floor]);

  const handleBookReturn = async (bookNumber) => {
    try {
      const updatedBookList = await fetchPUTReturnBook(bookNumber, floor);
      if (updatedBookList.status === 204) {
        alert('반납이 완료되었습니다.');
        const returnList = await fetchGETReturnList();
        setReturnBookList(returnList.data);
      } else {
        alert('반납에 실패하였습니다.');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <BookList
              book={book}
              isReturnPage
              onBookReturn={() => handleBookReturn(book.bookNumber)}
            />
          </Style.Booklists>
        ))
      )}
    </Style.Container>
  );
};

export default ReturnList;
