import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookSection from '../BookSection/BookSection';

const BookLocation = ({ bookNumber }) => {
  const [bookShelf, setBookShelf] = useState([]);
  const [bookGroup, setBookGruop] = useState('');
  const [book, setBook] = useState({});
  // useEffect(() => {
  //   if (book.bookNumber)
  // });
  return (
    <>
      <div>
        <div>
          <h1>위치</h1>
          <ul>
            <li>대여 권수</li>
            <li>
              대여 방법
              <ul>
                <li>도서 대여는 실물 도서 뒷면에 있는 QR코드로 하면 완료.</li>
                <li>
                  메인 페이지에서는 도서 목록을 열람하거나 대여 현황을 확인하는 페이지로 즉시 대여는
                  불가합니다.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h1>M</h1>
        </div>
      </div>
      <div>
        <h2>{bookGroup}</h2>
        {bookShelf.map(() => {
          return <BookSection />;
        })}
      </div>
    </>
  );
};
