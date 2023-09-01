import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchGETBookList } from '../../api/Book/bookListAPI';
import Style from './AdminBookList.style';

const theadWidthData = [
  { width: '8%', label: 'ID' },
  { width: '48%', label: '도서명' },
  { width: '14%', label: '저자' },
  { width: '14%', label: '출판사' },
  { width: '8%', label: '상태' },
  { width: '8%', label: '수정' },
];

const AdminBookList = () => {
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get('search');

  useEffect(() => {
    const fetchBookList = async () => {
      const response = await fetchGETBookList();
      setBookList(response.data);
    };

    const fetchBookListSearch = async () => {
      const response = await fetchGETBookList();
      const searchBookList = response.data.filter((book) => {
        return book.title.includes(searchValue);
      });
      setBookList(searchBookList);
    };
    if (searchValue) {
      fetchBookListSearch();
    } else {
      fetchBookList();
    }
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
        {bookList.map((book) => {
          const { id, title, author, publisher, available } = book;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{author}</td>
              <td>{publisher}</td>
              <td>
                <Style.BookStatus>{available ? '대여가능' : '대여중'}</Style.BookStatus>
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
