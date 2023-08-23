import React, { useState, useEffect } from 'react';
import BookList from '../BookList/BookList';
import { getBookList } from '../../api/testAPI/get/getBookList';
import Style from '../../assets/commonStyles/BookListContanier.style';

const AllBooks = () => {
  const [allBookList, setAllBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  // mockdata로 테스트중입니다.
  useEffect(() => {
    const fetchBooks = async () => {
      if (!hasMore) {
        setLoading(false);
        return;
      }
      const books = await getBookList();
      setAllBookList(books);
      setLoading(false);
      setHasMore(false);
    };
    fetchBooks();
  }, []);

  return (
    <Style.Container>
      {allBookList.map((book) => {
        return (
          <Style.Booklists key={book.bookNumber}>
            <BookList book={book} isMainPage />
          </Style.Booklists>
        );
      })}
      {loading && (
        <Style.Booklists $align>
          <img
            src="https://img.freepik.com/free-vector/business-man-jumping-obstacles_1133-210.jpg?w=900&t=st=1692711919~exp=1692712519~hmac=76a9cc7e5f6500c22890e3fee2e2dc045be64643b9c8a73d94d90cb7218d0b45"
            alt="loading"
          />
          로딩중 입니다...
        </Style.Booklists>
      )}
      {!loading && !hasMore && (
        <Style.Booklists $align>
          <img
            src="https://img.freepik.com/free-vector/doodle-hand-drawn-cartoon-cute-girl-student-with-the-correct-or-ignore-symbols-no-tag-answer_40876-3282.jpg?w=900&t=st=1692713589~exp=1692714189~hmac=28da93f8fafe29fd93f7f5796c0119eb235467ec64e007c09736e160ab9065a5"
            alt="no more books"
          />
          더 이상 도서가 없습니다.
        </Style.Booklists>
      )}
    </Style.Container>
  );
};

export default AllBooks;
