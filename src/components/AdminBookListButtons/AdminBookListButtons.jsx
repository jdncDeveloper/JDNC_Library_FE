import React from 'react';
import Style from './AdminBookListButtons.style';

const AdminBookListButtons = ({ selectedBooks }) => {
  const DisappearanceBook = () => {
    alert('소실처리');
    console.log(selectedBooks);
  };

  const ReturnBook = () => {
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
