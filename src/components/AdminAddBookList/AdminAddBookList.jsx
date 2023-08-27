import React, { useState } from 'react';
import Style from './AdminAddBookList.style';

const AdminAddBookList = () => {
  const [disappear, setDisappear] = useState(false);

  const handleAppear = () => {
    setDisappear(!disappear);
  };

  const theadWidthData = [
    { width: '20%', label: 'ID' },
    { width: '30%', label: '책번호' },
    { width: '30%', label: '상태' },
    { width: '20%', label: '' },
  ];

  return (
    <Style.AddBookListContainer>
      <Style.CreatedBookList>
        <Style.CreatedBookListTitle>
          <h3>생성된 책</h3>
          <button onClick={handleAppear}>{disappear ? '취소' : '편집'}</button>
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
            <tr>
              <td>1</td>
              <td>T 001</td>
              <td>대출가능</td>
              <td>{disappear && <button>삭제</button>}</td>
            </tr>
          </tbody>
        </Style.AddedBookList>
      </Style.CreatedBookList>
    </Style.AddBookListContainer>
  );
};

export default AdminAddBookList;
