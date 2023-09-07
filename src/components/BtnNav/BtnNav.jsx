import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  fetchGETAllBookCount,
  fetchGETAvailableBookCount,
} from '../../api/Book/bookListAPI';
import { fetchGETReturnList } from '../../api/Borrow/borrowAPI';
import { navigateUrl } from '../../constant/navigateUrl';
import Style from './BtnNav.style';

const BtnNav = () => {
  const [allBookNum, setAllBookNum] = useState();
  const [availableBookNum, setAvailableBookNum] = useState();
  const [myBorrowedBook, setMyBorrowedBook] = useState([]);
  const navigate = useNavigate();
  function moveBookList() {
    navigate(navigateUrl.bookList);
  }
  function moveBorrowedPage() {
    navigate(navigateUrl.borrowedList);
  }

  const allBookCount = async () => {
    try {
      const allBookCountData = await fetchGETAllBookCount();
      setAllBookNum(allBookCountData.data.count);
    } catch (error) {
      alert('데이터를 불러오지 못했습니다.');
    }
  };

  const availableBookCount = async () => {
    try {
      const availableBookCountData = await fetchGETAvailableBookCount();
      setAvailableBookNum(availableBookCountData.data.count);
    } catch (error) {
      alert('데이터를 불러오지 못했습니다.');
    }
  };

  const myBorrowListData = async () => {
    try {
      const myBookData = await fetchGETReturnList();
      setMyBorrowedBook(myBookData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //전체 도서 개수를 불러옵니다.
    allBookCount();
    //대출 가능한 도서 개수를 불러옵니다.
    availableBookCount();
    //내 대출중인 도서 개수를 불러옵니다.
    myBorrowListData();
  }, []);
  return (
    <>
      <Style.BtnNav>
        <Style.BtnNavContainer onClick={moveBookList}>
          <Style.BtnNavTitle>
            <h1>도서 목록</h1>
            <Style.ArrowIcon icon="fa-solid fa-arrow-right" />
          </Style.BtnNavTitle>
          <Style.BtnNavContents>
            <Style.CurrentNumberOfBook>{availableBookNum}</Style.CurrentNumberOfBook>
            <h2>/{allBookNum}</h2>
          </Style.BtnNavContents>
        </Style.BtnNavContainer>
        <Style.BtnNavContainer onClick={moveBorrowedPage}>
          <Style.BtnNavTitle>
            <h1>대출 현황</h1>
            <Style.ArrowIcon icon="fa-solid fa-arrow-right" />
          </Style.BtnNavTitle>
          <Style.BtnNavContents>
            <Style.MyBorrowedBookNumber $myBorrowedBook={myBorrowedBook}>
              {myBorrowedBook.length}
            </Style.MyBorrowedBookNumber>
            <h2>/3</h2>
          </Style.BtnNavContents>
        </Style.BtnNavContainer>
      </Style.BtnNav>
    </>
  );
};

export default BtnNav;
