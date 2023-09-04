import React, { useState } from 'react';
import { fetchGETBookDetailPage } from '../../api/Book/bookDetailAPI';
import { fetchPUTLostBook } from '../../api/AdminBook/AdminBookDetailAPI';
import Style from './AdminAddBookList.style';
import CreateQR from '../CreateQR/CreateQR';

const theadWidthData = [
  { width: '15%', label: 'ID' },
  { width: '25%', label: '책번호' },
  { width: '25%', label: '상태' },
  { width: '35%', label: '' },
];

const AdminAddBookList = ({ selectedBook, setSelectedBook, id }) => {
  const [disappear, setDisappear] = useState(false);
  const [lostBook, setLostBook] = useState({});

  const toggleEditButton = () => {
    setDisappear((disappear) => !disappear);
  };

  const handleLostBook = async (number) => {
    try {
      if (!lostBook[number]) {
        const response = await fetchPUTLostBook(number);
        if (response.status === 204) {
          const newBookList = await fetchGETBookDetailPage(id);
          setSelectedBook(newBookList.data);

          setLostBook((lostBook) => ({ ...lostBook, [number]: true }));
          alert('책이 소실되었습니다.');
        } else {
          alert('책 소실에 실패했습니다.');
        }
      } else {
        alert('책이 복구되었습니다.');
        setLostBook((lostBook) => ({ ...lostBook, [number]: false }));
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
            {selectedBook && selectedBook.bookNumbers ? (
              selectedBook.bookNumbers.map((number) => {
                const displayGroup = selectedBook.bookGroup
                  ? selectedBook.bookGroup.replace('GROUP_', '')
                  : '';
                return (
                  <tr key={number}>
                    <td>{selectedBook.id}</td>
                    <td>
                      {displayGroup}
                      {number}
                    </td>
                    <td>
                      {lostBook[number] ? '소실' : selectedBook.available ? '보유중' : '대여중'}
                    </td>
                    <td>
                      {disappear && (
                        <div>
                          <button
                            type="button"
                            onClick={() => handleLostBook(number)}
                            disabled={lostBook[number]}
                          >
                            {lostBook[number] ? '복구' : '소실'}
                          </button>
                          <button>삭제</button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
          </tbody>
        </Style.AddedBookList>
      </Style.CreatedBookList>
      <CreateQR />
    </Style.AddBookListContainer>
  );
};

export default AdminAddBookList;
