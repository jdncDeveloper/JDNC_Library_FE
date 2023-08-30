import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPOSTBorrowBook } from '../../api/Borrow/borrowBookAPI';
import { navigateUrl } from '../../constant/navigateUrl';
import Style from './BorrowBtn.style';

const BorrowBtn = ({ bookNumber, btnStatus }) => {
  const navigate = useNavigate();
  async function borrowBook(bookNumber) {
    try {
      const borrowBookData = await fetchPOSTBorrowBook(bookNumber);
      if (borrowBookData.status == '201') {
        alert('대여 완료!');
        navigate(navigateUrl.borrowedList);
      } else {
        alert('대여 실패!');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Style.BorrowBtn onClick={() => borrowBook(bookNumber)} $btnStatus={btnStatus}>
        대여하기
      </Style.BorrowBtn>
    </>
  );
};

export default BorrowBtn;
