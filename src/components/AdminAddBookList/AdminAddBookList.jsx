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
        if (window.confirm('소실 처리 하시겠습니까?') && response.status === 204) {
          const newBookList = await fetchGETBookDetailPage(id);
          setSelectedBook(newBookList.data);
          console.log(response);

          setLostBook((lostBook) => ({ ...lostBook, [number]: true }));
          alert('책이 소실되었습니다.');
        } else {
          alert('책 소실에 실패했습니다.');
          return false;
        }
      } else if (window.confirm('복구 처리 하시겠습니까?')) {
        alert('책이 복구되었습니다.');
        setLostBook((lostBook) => ({ ...lostBook, [number]: false }));
      }
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
            {selectedBook && selectedBook.availableList ? (
              selectedBook.availableList.map(({ bookNumber, available }) => {
                const displayGroup = selectedBook.bookGroup
                  ? selectedBook.bookGroup.replace('GROUP_', '')
                  : '';
                return (
                  <Style.TableRow key={bookNumber} isLost={lostBook[bookNumber]}>
                    <td>{selectedBook.id}</td>
                    <td>{`${displayGroup}-${bookNumber}`}</td>
                    <td>{lostBook[bookNumber] ? '소실' : available ? '보유중' : '대여중'}</td>
                    <td>
                      {disappear && (
                        <div>
                          <button type="button" onClick={() => handleLostBook(bookNumber)}>
                            {lostBook[bookNumber] ? '복구' : '소실'}
                          </button>
                          <button>삭제</button>
                        </div>
                      )}
                    </td>
                  </Style.TableRow>
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
