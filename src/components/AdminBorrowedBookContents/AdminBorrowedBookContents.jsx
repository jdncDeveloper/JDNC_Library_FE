import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Style from './AdminBorrowedBookContents.style';

const AdminBorrowedBookContents = ({ bookList, setSelectedBooks, selectedBooks }) => {
  const handleCheckboxChange = (id) => {
    if (selectedBooks.includes(id)) {
      setSelectedBooks(selectedBooks.filter((item) => item !== id));
    } else {
      setSelectedBooks([...selectedBooks, id]);
    }
  };

  const sendMail = (id) => {
    alert(`${id}`);
  };

  return (
    <>
      <Style.Tbody>
        {bookList.map((item) => {
          return (
            <tr key={item.borrowId}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedBooks.includes(item.borrowId)}
                  onChange={() => handleCheckboxChange(item.borrowId)}
                />
              </td>
              <td>{item.bookId}</td>
              <td>{item.title}</td>
              <td>{item.borrowerName}</td>
              <td>{item.borrowDate}</td>
              <td>{item.returnDate}</td>
              <td>
                <Style.BookStatus>{item.status}</Style.BookStatus>
              </td>
              <td>
                <input type="button" onClick={sendMail} value="메일 보내기" />
              </td>
            </tr>
          );
        })}
      </Style.Tbody>
    </>
  );
};

export default AdminBorrowedBookContents;
