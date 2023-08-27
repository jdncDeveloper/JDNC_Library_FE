import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Style from './AdminBorrowedBookContents.style';

const AdminBorrowedBookContents = ({ book }) => {
  const [borrowedBookData, setBorrowedBookData] = useState([]);
  useEffect(() => {
    setBorrowedBookData(book);
  });
  return (
    <>
      <tbody>
        {borrowedBookData.map((book) => {
          return (
            <tr>
              <td>
                <input type={checkbox} />
              </td>
              <td>{book.id}</td>
              <td>{book.group}</td>
              <td>{book.title}</td>
              <td>{book.borrower}</td>
              <td>{book.date}</td>
              <td>{book.status}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default AdminBorrowedBookContents;
