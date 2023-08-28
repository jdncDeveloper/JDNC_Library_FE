import React from 'react';
import { useState } from 'react';
import AdminBookListButtons from '../AdminBookListButtons/AdminBookListButtons';
import AdminBorrowedBookContents from '../AdminBorrowedBookContents/AdminBorrowedBookContents';
import Style from './AdminBorrowedBookList.style';

const AdminBorrowedBookList = ({ book }) => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const handleSelectedBooksList = (selected) => {
    setSelectedBooks(selected);
  };

  return (
    <>
      <Style.Table>
        <Style.Thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">연번</th>
            <th scope="col">구분</th>
            <th scope="col">제목</th>
            <th scope="col">대출자</th>
            <th scope="col">대출일</th>
            <th scope="col">상태</th>
          </tr>
        </Style.Thead>
        <AdminBorrowedBookContents book={book} handleSelectedBooksList={handleSelectedBooksList} />
      </Style.Table>
      <AdminBookListButtons selectedBooks={selectedBooks} />
    </>
  );
};

export default AdminBorrowedBookList;
