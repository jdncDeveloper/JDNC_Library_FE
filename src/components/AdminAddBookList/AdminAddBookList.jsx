import React, { useState } from 'react';
import Style from './AdminAddBookList.style';
import CreateQR from '../CreateQR/CreateQR';

const theadWidthData = [
  { width: '15%', label: 'ID' },
  { width: '25%', label: '책번호' },
  { width: '25%', label: '상태' },
  { width: '35%', label: '' },
];

const AdminAddBookList = ({ selectedBook }) => {
  const [disappear, setDisappear] = useState(false);

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
            {selectedBook &&
              selectedBook.bookNumbers &&
              selectedBook.bookNumbers.map((number) => (
                <tr key={number}>
                  <td>{selectedBook.id}</td>
                  <td>
                    {selectedBook.bookGroup}
                    {number}
                  </td>
                  <td>{selectedBook.available ? '보유중' : '대여중'}</td>
                  <td>
                    {disappear && (
                      <div>
                        <button>소실</button>
                        <button>삭제</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </Style.AddedBookList>
      </Style.CreatedBookList>
      <CreateQR />
    </Style.AddBookListContainer>
  );
};

export default AdminAddBookList;
