import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Style from './AdminBorrowedBookContents.style';

const AdminBorrowedBookContents = ({ book, handleSelectedBooksList }) => {
  const [borrowedBookData, setBorrowedBookData] = useState([]);
  useEffect(() => {
    setBorrowedBookData(book);
  });
  const [selectedBooks, setSelectedBook] = useState([]);
  const handleCheckboxChange = (id) => {
    if (selectedBooks.includes(id)) {
      setSelectedBook(selectedBooks.filter((item) => item !== id));
    } else {
      setSelectedBook([...selectedBooks, id]);
    }
  };
  useEffect(() => {
    handleSelectedBooksList(selectedBooks);
  }, [selectedBooks]);
  return (
    <>
      <Style.Tbody>
        {borrowedBookData.map((book) => {
          return (
            <tr key={book.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedBooks.includes(book.id)}
                  onChange={() => handleCheckboxChange(book.id)}
                />
              </td>
              <td>{book.id}</td>
              <td>{book.group}</td>
              <td>{book.title}</td>
              <td>{book.borrower}</td>
              <td>{book.date}</td>
              <td>
                <Style.BookStatus>{book.status}</Style.BookStatus>
              </td>
            </tr>
          );
        })}
      </Style.Tbody>
    </>
  );
};

export default AdminBorrowedBookContents;
