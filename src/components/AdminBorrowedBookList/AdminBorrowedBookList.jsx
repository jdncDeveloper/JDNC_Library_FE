import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchGETAllBorrowedBookList } from '../../api/AdminBook/AdminBookAPI';
import AdminBookListButtons from '../AdminBookListButtons/AdminBookListButtons';
import AdminBorrowedBookContents from '../AdminBorrowedBookContents/AdminBorrowedBookContents';
import Style from './AdminBorrowedBookList.style';

const AdminBorrowedBookList = () => {
  const [bookList, setBookList] = useState({});
  const [selectedBooks, setSelectedBooks] = useState([]);
  useEffect(() => {
    const allBorrowedBookData = async () => {
      try {
        const allBorrowedBookList = await fetchGETAllBorrowedBookList();
        setBookList(allBorrowedBookList.data);
      } catch (error) {
        alert('오류발생');
      }
      allBorrowedBookData();
    };
  }, []);
  console.log(bookList);

  console.log(bookList);
  if (!bookList)
    return (
      <>
        <Style.Container>
          <Style.NoBooksImg
            src="https://img.freepik.com/free-vector/man-doubting-design_1133-263.jpg?w=900&t=st=1692711479~exp=1692712079~hmac=d2a39e1cf40b91c0367062b38c8eb1f5d10d952bbdaafd3a396e53bff2b734cb"
            alt="대여중인 도서가 없습니다."
          />
          <span>대여중인 도서가 없습니다.</span>
        </Style.Container>
      </>
    );

  return (
    <>
      <Style.Table>
        <thead>
          <tr>
            <th> </th>
            <th>연번</th>
            <th>제목</th>
            <th>대출자</th>
            <th>대출일</th>
            <th>반납일</th>
            <th>반납장소</th>
            <th>상태</th>
            <th>메일</th>
          </tr>
        </thead>
        <AdminBorrowedBookContents
          bookList={bookList}
          selectedBooks={selectedBooks}
          setSelectedBooks={setSelectedBooks}
        />
      </Style.Table>
      <AdminBookListButtons selectedBooks={selectedBooks} />
    </>
  );
};

export default AdminBorrowedBookList;
