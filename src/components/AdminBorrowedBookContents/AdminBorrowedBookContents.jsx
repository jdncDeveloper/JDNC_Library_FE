import React from 'react';
import Style from './AdminBorrowedBookContents.style';

const AdminBorrowedBookContents = () => {
  return (
    <>
      <tr>
        <td>
          <input type={checkbox} />
        </td>
        <td>연번</td>
        <td>구분</td>
        <td>제목</td>
        <td>대출자</td>
        <td>대출일</td>
        <td>상태</td>
      </tr>
    </>
  );
};

export default AdminBorrowedBookContents;
