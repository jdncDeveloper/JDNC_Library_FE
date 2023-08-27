import React, { useState, useEffect } from 'react';
import { getBookList } from '../../api/testAPI/get/getBookList';
import Style from './AdminBookList.style';

const AdminBookList = () => {
  const [bookList, setBookList] = useState([]);

  // mockdata로 테스트중입니다.
  useEffect(() => {
    const fetchBookList = async () => {
      const response = await getBookList();
      setBookList(response);
    };
    fetchBookList();
  }, []);

  const theadWidthData = [
    { width: '8%', label: '연번' },
    { width: '8%', label: '구분' },
    { width: '40%', label: '도서명' },
    { width: '14%', label: '저자' },
    { width: '14%', label: '출판사' },
    { width: '8%', label: '상태' },
    { width: '8%', label: '수정' },
  ];

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
          const { bookNumber, group, title, author, publisher } = book;
          return (
            <tr key={bookNumber}>
              <td>{bookNumber}</td>
              <td>{group}</td>
              <td>{title}</td>
              <td>{author}</td>
              <td>{publisher}</td>
              <td>
                <Style.BookStatus>상태</Style.BookStatus>
              </td>
              <td>
                <Style.EditButton>수정</Style.EditButton>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Style.BookListTable>
  );
};

export default AdminBookList;
