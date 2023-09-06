import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Style from './AdminBorrowedRecord.style';

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
      <Style.Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>연번</th>
            <th>제목</th>
            <th>대출자</th>
            <th>대출일</th>
            <th>반납일</th>
            <th>반납장소</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {record.map((item, recordItem) => {
            const isReturn = item.returnDate == null;
            const isAdminCheck = item.adminCheck;
            const status = isReturn ? '대여중' : isAdminCheck ? '반납완료' : '반납처리 대기중';
            return (
              <tr key={recordItem}>
                <td>{item.borrowId}</td>
                <td>{item.bookNumber}</td>
                <td>{item.title}</td>
                <td>{item.borrowerName}</td>
                <td>{item.borrowDate.slice(0, -6)}</td>
                <td>{isReturn ? '' : item.returnDate.slice(0, -6)}</td>
                <td>{isReturn ? ' ' : `${item.floor}층`}</td>
                <td>
                  <Style.BookStatus $isReturn={isReturn} $isAdminCheck={isAdminCheck}>
                    {status}
                  </Style.BookStatus>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Style.Table>
    );
  }

  // 데이터가 아직 로드되지 않은 경우에는 로딩 상태를 표시할 수 있습니다.
  return (
    <Style.Container>
      <Style.NoBooksImg
        src="https://img.freepik.com/free-vector/man-doubting-design_1133-263.jpg?w=900&t=st=1692711479~exp=1692712079~hmac=d2a39e1cf40b91c0367062b38c8eb1f5d10d952bbdaafd3a396e53bff2b734cb"
        alt="도서 목록이 없습니다."
      />
      <p>도서 목록이 없거나 불러오지 못했습니다.</p>
      <p>기간을 설정하고, 검색버튼을 눌러주세요.</p>
    </Style.Container>
  );
};

export default AdminBorrowedRecord;
