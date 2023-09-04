import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const AdminBorrowedRecord = () => {
  // 초기값을 null로 설정
  const [record, setRecord] = useState(null);

  // Redux에서 데이터 가져오기
  const recordData = useSelector((state) => state.dateRecord.data);

  useEffect(() => {
    // 데이터가 존재하는 경우에만 설정
    if (Array.isArray(recordData)) {
      setRecord(recordData);
    }
  }, [recordData]);
  console.log(record);
  // record가 배열인 경우에만 .map() 메서드 호출
  if (Array.isArray(record)) {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {record.map((item, recordItem) => {
            return (
              <tr key={recordItem}>
                <td>{item.borrowId}</td>
                <td>{item.bookNumber}</td>
                <td>{item.title}</td>
                <td>{item.borrowerName}</td>
                <td>{item.borrowDate}</td>
                <td>{item.returnDate}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  // 데이터가 아직 로드되지 않은 경우에는 로딩 상태를 표시할 수 있습니다.
  return <div>Loading...</div>;
};

export default AdminBorrowedRecord;
