import React from 'react';
import { useState } from 'react';

const AdminBorrowedRecord = () => {
  const [record, setRecord] = useState([]);
  return (
    <>
      <tbody>
        {record.map(() => {
          return (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.group}</td>
              <td>{record.title}</td>
              <td>{record.borrower}</td>
              <td>{record.borrowDate}</td>
              <td>{record.returnDate}</td>
              <td>{record.status}</td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default AdminBorrowedRecord;
