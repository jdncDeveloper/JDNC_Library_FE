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

  return (
    <Style.BookListTable>
      <thead>
        <tr>
          <Style.ColumnHeader width="8%">연번</Style.ColumnHeader>
          <Style.ColumnHeader width="8%">구분</Style.ColumnHeader>
          <Style.ColumnHeader width="40%">도서명</Style.ColumnHeader>
          <Style.ColumnHeader width="14%">저자</Style.ColumnHeader>
          <Style.ColumnHeader width="14%">출판사</Style.ColumnHeader>
          <Style.ColumnHeader width="8%">상태</Style.ColumnHeader>
          <Style.ColumnHeader width="8%">수정</Style.ColumnHeader>
        </tr>
      </thead>
      <tbody>
        {bookList.map((book) => (
          <tr key={book.bookNumber}>
            <td>{book.bookNumber}</td>
            <td>{book.group}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publisher}</td>
            <td>
              <Style.BookStatus>상태</Style.BookStatus>
            </td>
            <td>
              <Style.EditButton>수정</Style.EditButton>
            </td>
          </tr>
        ))}
      </tbody>
    </Style.BookListTable>
  );
};

export default AdminBookList;
