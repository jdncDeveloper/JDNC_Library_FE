import React, { useState } from 'react';
import Style from './AdminAddBookList.style';
import CreateQR from '../CreateQR/CreateQR';

const theadWidthData = [
  { width: '20%', label: 'ID' },
  { width: '30%', label: '책번호' },
  { width: '30%', label: '상태' },
  { width: '20%', label: '' },
];

const AdminAddBookList = ({ bookList, disappear, setDisappear }) => {
  const toggleEditButton = () => {
    setDisappear((disappear) => !disappear);
  };

  return (
    <Style.AddBookListContainer>
      <Style.CreatedBookList>
        <Style.CreatedBookListTitle>
          <h3>생성된 책</h3>
          <button onClick={toggleEditButton}>{disappear ? '취소' : '편집'}</button>
        </Style.CreatedBookListTitle>
        <Style.AddedBookList>
          <thead>
            <tr>
              {theadWidthData.map(({ width, label }) => {
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
              const { borrowId, bookNumber, title, borrowedStatus } = book;
              return (
                <tr key={title}>
                  <td>{borrowId}</td>
                  <td>{bookNumber}</td>
                  <td>{borrowedStatus ? '보유중' : '대여중'}</td>
                  <td>
                    <button>삭제</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Style.AddedBookList>
      </Style.CreatedBookList>
      <CreateQR />
    </Style.AddBookListContainer>
  );
};

export default AdminAddBookList;
