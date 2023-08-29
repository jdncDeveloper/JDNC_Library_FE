import React from 'react';
import Style from './AdminBookListButtons.style';

const AdminBookListButtons = ({ selectedBooks }) => {
  const DisappearanceBook = () => {
    // 로직 작성 해야 합니다.
    alert('소실처리');
    console.log(selectedBooks);
  };

  const ReturnBook = () => {
    //여기도 꼭 작성해야 합니다.

    alert('반납처리');
    console.log(selectedBooks);
  };
  return (
    <Style.BtnGroup>
      <Style.Button onClick={DisappearanceBook}>소실 처리</Style.Button>
      <Style.Button onClick={ReturnBook}>반납 처리</Style.Button>
    </Style.BtnGroup>
  );
};

export default AdminBookListButtons;
