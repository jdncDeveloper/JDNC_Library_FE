import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookSection from '../BookSection/BookSection';
import Style from './BookLocation.style';

const BookLocation = ({ isBorrowPage, bookNumber }) => {
  const [bookShelf, setBookShelf] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [bookGroup, setBookGroup] = useState('');
  const [inHere, setInHere] = useState(false);
  const [bookLocationNum, setBookLocationNum] = useState(0);

  function findBookLocation(bookNumber) {
    const groups = ['T', 'A', 'M', 'N', 'a'];
    const groupIndex = Math.floor((bookNumber - 1) / 110);
    const group = groups[groupIndex];
    setBookGroup(group);
    const section = Math.ceil((bookNumber % 110) / 10);
    setBookLocationNum(section);
  }
  useEffect(() => {
    findBookLocation(bookNumber);
  }, [bookNumber]);
  return (
    <>
      <Style.LocationInfo>
        <h1>위치</h1>
        <h2>대여 안내</h2>
        <Style.LocationInfoUl>
          <li>대여 권수</li>
          <li>
            대여 방법
            <Style.UseInfoUl>
              <li>도서 대여는 실물 도서 뒷면에 있는 QR코드로 하면 완료.</li>
              <li>
                메인 페이지에서는 도서 목록을 열람하거나 대여 현황을 확인하는 페이지로 즉시 대여는
                불가합니다.
              </li>
            </Style.UseInfoUl>
          </li>
        </Style.LocationInfoUl>
      </Style.LocationInfo>
      <Style.BookLocation>
        <h2>{bookGroup}</h2>
        <Style.BookShelf>
          {bookShelf.map((book, index) => {
            return <BookSection $area={index + 1} />;
          })}
        </Style.BookShelf>
      </Style.BookLocation>
    </>
  );
};

export default BookLocation;
