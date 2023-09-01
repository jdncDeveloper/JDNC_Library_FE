import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  fetchGETAllBorrowedBookList,
  fetchGETBookListOfMonth,
} from '../../api/AdminBook/AdminBookAPI';
import AdminBookListButtons from '../AdminBookListButtons/AdminBookListButtons';
import AdminBorrowedBookContents from '../AdminBorrowedBookContents/AdminBorrowedBookContents';
import Style from './AdminBorrowedBookList.style';

const AdminBorrowedBookList = () => {
  const [bookList, setBookList] = useState({});
  const [selectedBooks, setSelectedBooks] = useState([]);
  useEffect(() => {
    const allBorrowedBookData = async () => {
      try {
        const allBorrowedBookList = await fetchGETBookListOfMonth();
        setBookList(allBorrowedBookList.data);
      } catch (error) {
        alert('오류발생');
      }
      allBorrowedBookData();
    };
  }, []);
  console.log(bookList);

  if (!bookList) return <></>;

  return (
    <>
      <Style.Table>
        <Style.Thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">연번</th>
            <th scope="col">구분</th>
            <th scope="col">제목</th>
            <th scope="col">대출자</th>
            <th scope="col">대출일</th>
            <th scope="col">상태</th>
          </tr>
        </Style.Thead>
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
