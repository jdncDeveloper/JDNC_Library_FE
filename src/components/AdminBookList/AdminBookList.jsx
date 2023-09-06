import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchGETBookList } from '../../api/Book/bookListAPI';
import Style from './AdminBookList.style';

const theadWidthData = [
  { width: '8%', label: 'ID' },
  { width: '48%', label: '도서명' },
  { width: '14%', label: '저자' },
  { width: '14%', label: '출판사' },
  { width: '8%', label: '상태' },
  { width: '8%', label: '상세정보' },
];

const AdminBookList = () => {
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const lastBookRef = useRef();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get('search');

  useEffect(() => {
    const fetchBookList = async () => {
      const size = 20;
      const response = await fetchGETBookList(page, size);
      setHasMoreData(response.data.length > 0);
      setBookList((prevBookList) => [...prevBookList, ...response.data]);
    };

    const fetchBookListSearch = async () => {
      const size = 20;
      const response = await fetchGETBookList(page, size);
      const searchBookList = response.data.filter((book) => {
        return book.title.includes(searchValue);
      });

      setHasMoreData(searchBookList.length > 0);

      if (page === 0) {
        setBookList(searchBookList);
      } else {
        setBookList((prevBookList) => [...prevBookList, ...searchBookList]);
      }
    };

    if (searchValue) {
      fetchBookListSearch();
    } else {
      fetchBookList();
    }

    return () => {
      setHasMoreData(true);
    };
  }, [searchValue, page]);

  useEffect(() => {
    if (!hasMoreData) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMoreData) setPage((page) => page + 1);
      },
      { threshold: 1 }
    );

    const timer = setTimeout(() => {
      if (lastBookRef.current) {
        observer.observe(lastBookRef.current);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [bookList, hasMoreData]);

  useEffect(() => {
    setPage(0);
    setBookList([]);
  }, [searchValue]);

  const handleBookDetail = (id) => {
    navigate(`/admin/addbook/${id}`);
  };

  return (
    <Style.BookListTable>
      <thead>
        <tr>
          {theadWidthData.map((data) => {
            const { width, label } = data;
            return (
              <Style.ColumnHeader key={label} width={width}>
                {label}
              </Style.ColumnHeader>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {bookList.map(({ id, title, author, publisher, available }, index) => {
          const isLastBook = index === bookList.length - 1;
          return (
            <tr key={id} ref={isLastBook ? lastBookRef : null}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{author}</td>
              <td>{publisher}</td>
              <td>
                <Style.BookStatus available={available}>
                  {available ? '대여가능' : '대여중'}
                </Style.BookStatus>
              </td>
              <td>
                <Style.EditButton onClick={() => handleBookDetail(id)}>수정</Style.EditButton>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Style.BookListTable>
  );
};

export default AdminBookList;
