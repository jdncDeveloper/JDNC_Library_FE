import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import BookList from '../BookList/BookList';
import { fetchGETBookList } from '../../api/Book/bookListAPI';
import Style from '../../assets/commonStyles/BookListContainer.style';

const AllBooks = () => {
  const [allBookList, setAllBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const location = useLocation();
  const observerRef = useRef(null);
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get('search');

  useEffect(() => {
    setAllBookList([]);
    setPage(0);
  }, [searchValue]);

  useEffect(() => {
    const fetchBookList = async () => {
      setLoading(true);
      const size = 20;
      const response = await fetchGETBookList(page, size);
      setHasMore(response.data.length > 0);
      setAllBookList((prevBookList) => [...prevBookList, ...response.data]);
      setLoading(false);
    };

    const fetchBookListSearch = async () => {
      setLoading(true);
      const size = 20;
      const response = await fetchGETBookList(page, size);
      const searchBookList = response.data.filter((book) => {
        return book.title.includes(searchValue);
      });
      setHasMore(searchBookList.length > 0);

      if (page === 0) {
        setAllBookList(searchBookList);
      } else {
        setAllBookList((prevBookList) => [...prevBookList, ...searchBookList]);
      }
      setLoading(false);
    };

    if (searchValue) {
      fetchBookListSearch();
    } else {
      fetchBookList();
    }
  }, [page, searchValue]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading && hasMore) {
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
      {loading ? (
        <Style.Booklists $align>
          <img
            src="https://img.freepik.com/free-vector/business-man-jumping-obstacles_1133-210.jpg?w=900&t=st=1692711919~exp=1692712519~hmac=76a9cc7e5f6500c22890e3fee2e2dc045be64643b9c8a73d94d90cb7218d0b45"
            alt="loading"
          />
          로딩중 입니다...
        </Style.Booklists>
      ) : (
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
