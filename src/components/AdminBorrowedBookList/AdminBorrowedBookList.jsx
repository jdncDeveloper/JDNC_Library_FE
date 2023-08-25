import React from 'react';
import AdminBorrowedBookContents from '../AdminBorrowedBookContents/AdminBorrowedBookContents';

const AdminBorrowedBookList = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">연번</th>
            <th scope="col">구분</th>
            <th scope="col">제목</th>
            <th scope="col">대출자</th>
            <th scope="col">대출일</th>
            <th scope="col">상태</th>
          </tr>
        </thead>
      </table>
      <tbody>
        <AdminBorrowedBookContents />
      </tbody>
      <div>
        <button>소실 처리</button>
        <button>반납 처리</button>
      </div>
    </>
  );
};

export default AdminBorrowedBookList;
