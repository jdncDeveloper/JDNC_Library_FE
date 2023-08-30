import React from 'react';
import { fetchPUTAdminReturnBookRequest } from '../../api/AdminBook/AdminBookAPI';
import Style from './AdminBookListButtons.style';

const AdminBookListButtons = ({ selectedBooks }) => {
  async function ReturnBook(selectedBooks) {
    const reQuestion = confirm('반납처리하시겠습니까?');
    if (reQuestion) {
      try {
        const returnBooksRequest = await fetchPUTAdminReturnBookRequest(selectedBooks);
        if (returnBooksRequest.status == '') {
          return alert('반납 처리 완료!');
        }
        alert('오류가 발생했습니다!');
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <Style.BtnGroup>
      <Style.Button onClick={() => ReturnBook(selectedBooks)}>반납 처리</Style.Button>
    </Style.BtnGroup>
  );
};

export default AdminBookListButtons;
