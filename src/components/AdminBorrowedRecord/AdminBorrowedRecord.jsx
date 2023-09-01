import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchGETBookListOfMonth } from '../../api/AdminBook/AdminBookAPI';

const AdminBorrowedRecord = () => {
  const [record, setRecord] = useState([]);

  async function showMonthRecord(year, month) {
    try {
      const MonthRecordData = await fetchGETBookListOfMonth(year, month);
      setRecord(MonthRecordData);
    } catch (error) {
      alert('오류발생');
    }
  }
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
