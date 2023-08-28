import React, { useState } from 'react';
import Style from './AdminAddBookList.style';
import CreateQR from '../CreateQR/CreateQR';

const AdminAddBookList = ({ newBooks, disappear, setDisappear }) => {
  const theadWidthData = [
    { width: '20%', label: 'ID' },
    { width: '30%', label: '책번호' },
    { width: '30%', label: '상태' },
    { width: '20%', label: '' },
  ];

  console.log('리스트');

  return (
    <Style.AddBookListContainer>
      <Style.CreatedBookList>
        <Style.CreatedBookListTitle>
          <h3>생성된 책</h3>
          <button onClick={() => setDisappear(!disappear)}>{disappear ? '취소' : '편집'}</button>
        </Style.CreatedBookListTitle>
        <Style.AddedBookList>
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
            {newBooks.map((book) => {
              const { id, bookNumber, status } = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{bookNumber}</td>
                  <td>{status}</td>
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
