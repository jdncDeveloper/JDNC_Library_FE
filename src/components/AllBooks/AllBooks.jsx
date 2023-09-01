import React, { useState, useEffect, useRef } from 'react';
import BookList from '../BookList/BookList';
import { fetchGETBookList } from '../../api/Book/bookListAPI';
import Style from '../../assets/commonStyles/BookListContainer.style';

const AllBooks = () => {
  const [allBookList, setAllBookList] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    const fetchBookList = async () => {
      setLoading(true);
      const pageSize = 10;
      const response = await fetchGETBookList(page, pageSize);
      setAllBookList((prevBookList) => [...prevBookList, ...response.data]);
      setLoading(false);

      if (response.data.length < pageSize) {
        setHasMore(false);
      } else {
        setHasMore(true);
        if (initialLoading) {
          setInitialLoading(false);
        }
      }
    };
    fetchBookList();
    console.log('page', page);
    console.log('allBookList', allBookList);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!initialLoading && entry.isIntersecting && !loading && hasMore) {
          setPage((page) => page + 1);
        }
      },
      { threshold: 1 }
    );
    const timer = setTimeout(() => {
      if (observerRef.current && !loading && hasMore) {
        observer.observe(observerRef.current);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [hasMore, loading]);

  return (
    <Style.Container>
      {allBookList.map((book, index) => {
        return (
          <Style.Booklists
            key={book.bookNumber}
            ref={index === allBookList.length - 1 ? observerRef : null}
          >
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
