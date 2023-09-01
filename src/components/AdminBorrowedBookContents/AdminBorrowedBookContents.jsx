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

  return (
    <>
      <Style.Tbody>
        {/* {bookList.map(({ id, group, title, borrower, date, status }) => {
          return (
            <tr key={id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedBooks.includes(id)}
                  onChange={() => handleCheckboxChange(id)}
                />
              </td>
              <td>{id}</td>
              <td>{group}</td>
              <td>{title}</td>
              <td>{borrower}</td>
              <td>{date}</td>
              <td>
                <Style.BookStatus>{status}</Style.BookStatus>
              </td>
            </tr>
          );
        })} */}
      </Style.Tbody>
    </>
  );
};

export default AdminBorrowedBookContents;
