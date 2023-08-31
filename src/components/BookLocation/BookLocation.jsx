import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookSection from '../BookSection/BookSection';
import GroupTap from '../GroupTap/GroupTap';
import Style from './BookLocation.style';

const bookShelf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

const BookLocation = ({ bookNumber }) => {
  const [bookGroup, setBookGroup] = useState('T');
  const [bookLocationNum, setBookLocationNum] = useState(0);
  // const [group, setGroup] = useState('');
  const [bookData, setBookData] = useState([]);
  function findBookLocation(number) {
    const groups = ['T', 'A', 'M', 'N', 'a'];
    const groupIndex = Math.floor((number - 1) / 110);
    const group = groups[groupIndex];
    const section = Math.ceil((number % 110) / 10);
    setBookLocationNum(section);
    return { number, group, section };
  }

  // useEffect(() => {
  //   setBookData(bookNumber.map(findBookLocation));
  // }, [bookNumber]);
  console.log(bookData);
  console.log(bookNumber);

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
      <GroupTap setBookGroup={setBookGroup} bookGroup={bookGroup} />
      <Style.BookLocation>
        <h2>{bookGroup}</h2>
        <Style.BookShelf>
          {bookShelf.map((book, index) => {
            const isSelected = index === bookLocationNum - 1;
            return (
              <BookSection $area={book} key={book} $inHere={isSelected} bookNumber={bookNumber} />
            );
          })}
        </Style.BookShelf>
      </Style.BookLocation>
    </>
  );
};

export default BookLocation;
